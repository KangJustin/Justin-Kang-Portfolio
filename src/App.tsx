import { lazy, Suspense, useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Now } from './components/Now'
import { site } from './data/site'
import { projects } from './data/projects'
import { writingPage } from './data/writing'

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

const DEFAULT_TITLE = 'Justin Kang — Software · AI · Data'
const DEFAULT_DESCRIPTION =
  'Justin Kang — UC Berkeley Data Science student building full-stack AI tools, data products, and practical software systems.'

function metaForPath(clean: string): { title: string; description: string } {
  if (clean === '/writing') {
    return { title: `${writingPage.title} — Justin Kang`, description: writingPage.subtitle }
  }
  const slug = clean.match(/^\/projects\/([a-z-]+)$/)?.[1]
  const project = slug && projects.find((p) => p.caseStudy === `/projects/${slug}`)
  if (project) {
    return { title: `${project.title} — Justin Kang`, description: project.desc }
  }
  return { title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content)
}

// Updates the tab title and meta/OG/Twitter description per route. This is
// a client-side patch only: it's real for the browser tab and for crawlers
// that execute JS (Google), but does NOT fix link-preview cards on
// platforms that scrape raw HTML without running JS (LinkedIn, Slack,
// iMessage) -- vercel.json rewrites every route to the same static
// index.html, so those still see the homepage's title/OG tags. Fixing
// that fully needs SSR/prerendering or an edge function per route.
function useDocumentMeta(path: string) {
  useEffect(() => {
    const clean = path.replace(/\/+$/, '') || '/'
    const { title, description } = metaForPath(clean)
    document.title = title
    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:title"]', title)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[name="twitter:title"]', title)
    setMetaContent('meta[name="twitter:description"]', description)
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
      <Sidebar page={page} navigate={navigate} />
      <main className="main">
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
      </main>
    </div>
  )
}
