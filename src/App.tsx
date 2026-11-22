import { useEffect, useState } from 'react'
import { Router } from './components/simple/Router'
import { metaForPath, SITE_URL } from './seo'

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

function setLinkHref(rel: string, href: string) {
  document.querySelector(`link[rel="${rel}"]`)?.setAttribute('href', href)
}

// Updates the tab title, meta/OG/Twitter description, og:url, and canonical
// per route on client-side navigation. The *initial* HTML for each route
// already has correct metadata baked in by scripts/prerender.tsx.
function useDocumentMeta(path: string) {
  useEffect(() => {
    const { title, description, path: canonicalPath } = metaForPath(path)
    const url = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`
    document.title = title
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:title"]', title)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[property="og:url"]', url)
    setMetaContent('meta[name="twitter:title"]', title)
    setMetaContent('meta[name="twitter:description"]', description)
    setLinkHref('canonical', url)
  }, [path])
}

// Minimal history-based routing; vercel.json rewrites unknown paths to
// index.html so deep links work in production.
export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setPath(to)
    window.scrollTo(0, 0)
  }

  useDocumentMeta(path)

  return <Router path={path} navigate={navigate} />
}
