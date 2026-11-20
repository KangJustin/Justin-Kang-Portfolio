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

import { Sidebar } from '../src/components/Sidebar'
import { MobileHeader } from '../src/components/MobileHeader'
import { Footer } from '../src/components/Footer'
import { TableHome } from '../src/components/table/TableHome'
import { AboutPage } from '../src/components/table/AboutPage'
import { ExperiencePage } from '../src/components/table/ExperiencePage'
import { ProjectsPage } from '../src/components/table/ProjectsPage'
import { LeadershipPage } from '../src/components/table/LeadershipPage'
import { ResumePage } from '../src/components/table/ResumePage'
import { ContactPage } from '../src/components/table/ContactPage'
import { WritingArchive } from '../src/components/WritingArchive'
import { BuzzBuddyCase } from '../src/components/case/BuzzBuddyCase'
import { UrbanPilotCase } from '../src/components/case/UrbanPilotCase'
import { FluxCase } from '../src/components/case/FluxCase'
import { SkylineCase } from '../src/components/case/SkylineCase'
import { BlastRadiusCase } from '../src/components/case/BlastRadiusCase'
import { ExoplanetCase } from '../src/components/case/ExoplanetCase'
import { ExcaScanCase } from '../src/components/case/ExcaScanCase'
import { ALL_ROUTES, metaForPath, SITE_URL } from '../src/seo'
import type { Page } from '../src/App'

const noopNavigate = () => {}

const caseComponents: Record<string, () => React.JSX.Element> = {
  '/projects/excascan': ExcaScanCase,
  '/projects/buzzbuddy': BuzzBuddyCase,
  '/projects/urbanpilot': UrbanPilotCase,
  '/projects/flux': FluxCase,
  '/projects/skyline': SkylineCase,
  '/projects/blastradius': BlastRadiusCase,
  '/projects/exoplanet': ExoplanetCase,
}

const tablePages: Record<string, (props: { navigate: (to: string) => void }) => React.JSX.Element> = {
  '/about': AboutPage,
  '/experience': ExperiencePage,
  '/projects': ProjectsPage,
  '/leadership': LeadershipPage,
  '/resume': ResumePage,
  '/contact': ContactPage,
}

function pageFor(path: string): Page {
  if (path in caseComponents) return 'case'
  if (path === '/writing') return 'writing'
  return 'home'
}

function renderRoute(path: string): string {
  const page = pageFor(path)
  const CaseComponent = caseComponents[path]

  // The poker-table pages render without the sidebar shell. '/' is baked
  // in its intro state; the client skips straight to the dealt table for
  // returning visitors and reduced-motion users.
  if (page === 'home') {
    const TablePage = tablePages[path]
    return renderToString(
      TablePage ? <TablePage navigate={noopNavigate} /> : <TableHome navigate={noopNavigate} initialPhase="spin" />
    )
  }

  return renderToString(
    <div className="shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Sidebar page={page} navigate={noopNavigate} />
      <MobileHeader page={page} navigate={noopNavigate} />
      <main id="main-content" className="main">
        {CaseComponent ? <CaseComponent /> : <WritingArchive />}
        <Footer />
      </main>
    </div>
  )
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
