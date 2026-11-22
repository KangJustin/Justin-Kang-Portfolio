// Build-time prerender: renders each public route to static HTML with its
// own <title>/description/OG/canonical baked into the initial response,
// so link-preview scrapers (LinkedIn, Slack, iMessage) and non-JS crawlers
// see correct per-route metadata instead of the homepage's. Run via
// `npm run build` (see package.json) after `vite build` has produced
// dist/index.html and the client bundle.
//
// Deliberately NOT using hydrateRoot on the client (main.tsx still does a
// plain createRoot().render()) -- keeping this simple avoids hydration-
// mismatch bugs, at the cost of a brief re-render on first paint. That's
// a reasonable tradeoff for a mostly-static portfolio site.
import { renderToString } from 'react-dom/server'
import { writeFileSync, mkdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Router } from '../src/components/simple/Router'
import { ALL_ROUTES, metaForPath, SITE_URL } from '../src/seo'

const noopNavigate = () => {}

function renderRoute(path: string): string {
  return renderToString(<Router path={path} navigate={noopNavigate} />)
}

// Replaces a whole <meta .../> or <link .../> tag identified by one marker
// attribute (e.g. name="description"), tolerant of attribute order and the
// multi-line formatting index.html uses for some tags. Throws if the
// marker isn't found, so a template change that silently breaks injection
// fails the build instead of shipping wrong metadata.
function replaceTag(html: string, marker: string, newTag: string): string {
  // [^>]* (not [\s\S]*) so the match can't cross a tag boundary and
  // accidentally swallow/delete unrelated tags in between.
  const re = new RegExp(`<(?:meta|link)\\b[^>]*${marker}[^>]*/>`)
  if (!re.test(html)) throw new Error(`prerender: couldn't find a tag matching marker: ${marker}`)
  return html.replace(re, newTag)
}

function injectHead(template: string, meta: ReturnType<typeof metaForPath>): string {
  const url = `${SITE_URL}${meta.path}`
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
  html = replaceTag(html, 'name="description"', `<meta name="description" content="${meta.description}" />`)
  html = replaceTag(html, 'property="og:title"', `<meta property="og:title" content="${meta.title}" />`)
  html = replaceTag(
    html,
    'property="og:description"',
    `<meta property="og:description" content="${meta.description}" />`
  )
  html = replaceTag(html, 'property="og:url"', `<meta property="og:url" content="${url}" />`)
  html = replaceTag(html, 'name="twitter:title"', `<meta name="twitter:title" content="${meta.title}" />`)
  html = replaceTag(
    html,
    'name="twitter:description"',
    `<meta name="twitter:description" content="${meta.description}" />`
  )
  html = replaceTag(html, 'rel="canonical"', `<link rel="canonical" href="${url}" />`)
  return html
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const template = readFileSync(join(distDir, 'index.html'), 'utf-8')

for (const route of ALL_ROUTES) {
  const meta = metaForPath(route)
  const rendered = renderRoute(route)
  const html = injectHead(template, meta).replace('<div id="root"></div>', `<div id="root">${rendered}</div>`)
  const outPath = route === '/' ? join(distDir, 'index.html') : join(distDir, route.replace(/^\//, ''), 'index.html')
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${route} -> ${outPath.replace(distDir + '/', '')}`)
}
