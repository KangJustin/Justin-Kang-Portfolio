import { lazy, Suspense, useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { Sidebar } from './components/Sidebar'
import { MobileHeader } from './components/MobileHeader'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Now } from './components/Now'
import { Footer } from './components/Footer'
import { metaForPath, SITE_URL } from './seo'

// Lazy-loaded: a visitor reading only the homepage shouldn't have to
// download every case study's mock illustrations (Skyline's inline CAD
// SVG, Flux's pipeline mock, etc.) or the writing archive up front.
const WritingArchive = lazy(() =>
  import('./components/WritingArchive').then((m) => ({ default: m.WritingArchive }))
)
const UrbanPilotCase = lazy(() =>
  import('./components/case/UrbanPilotCase').then((m) => ({ default: m.UrbanPilotCase }))
)
const FluxCase = lazy(() => import('./components/case/FluxCase').then((m) => ({ default: m.FluxCase })))
const SkylineCase = lazy(() =>
  import('./components/case/SkylineCase').then((m) => ({ default: m.SkylineCase }))
)
const BuzzBuddyCase = lazy(() =>
  import('./components/case/BuzzBuddyCase').then((m) => ({ default: m.BuzzBuddyCase }))
)

// Minimal history-based routing: '/' is the single-page portfolio,
// '/writing' is the Research & Essays archive, and '/projects/<slug>'
// are the project case studies. vercel.json rewrites unknown paths to
// index.html so deep links work in production.
export type Page = 'home' | 'writing' | 'case'

const caseStudies: Record<string, ComponentType> = {
  buzzbuddy: BuzzBuddyCase,
  urbanpilot: UrbanPilotCase,
  flux: FluxCase,
  skyline: SkylineCase,
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

function setLinkHref(rel: string, href: string) {
  document.querySelector(`link[rel="${rel}"]`)?.setAttribute('href', href)
}

// Updates the tab title, meta/OG/Twitter description, og:url, and canonical
// per route on client-side navigation (SPA route changes via pushState).
// The *initial* HTML for each route already has correct per-route metadata
// baked in by scripts/prerender.tsx (see vercel.json), so this only needs
// to keep things correct across in-app navigation after that first load.
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

  const clean = path.replace(/\/+$/, '')
  const caseMatch = clean.match(/^\/projects\/([a-z-]+)$/)
  const CaseComponent = caseMatch ? caseStudies[caseMatch[1]] : undefined
  const page: Page = CaseComponent ? 'case' : clean === '/writing' ? 'writing' : 'home'

  return (
    <div className="shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Sidebar page={page} navigate={navigate} />
      <MobileHeader page={page} navigate={navigate} />
      <main id="main-content" className="main">
        {CaseComponent || page === 'writing' ? (
          <Suspense fallback={<div className="page-loading">loading…</div>}>
            {CaseComponent ? <CaseComponent /> : <WritingArchive />}
          </Suspense>
        ) : (
          <>
            <Hero navigate={navigate} />
            <Projects navigate={navigate} />
            <Experience />
            <Skills />
            <Now />
          </>
        )}
        {/* Rendered on every page (not just home): the sidebar carrying
            contact info is hidden at <=900px, so this is the only place
            mobile visitors can reach email/résumé/LinkedIn/GitHub from a
            case study or the writing archive. */}
        <Footer />
      </main>
    </div>
  )
}
