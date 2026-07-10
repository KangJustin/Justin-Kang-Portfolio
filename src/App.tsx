import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Now } from './components/Now'
import { Resume } from './components/Resume'
import { WritingArchive } from './components/WritingArchive'
import { WritingCallout } from './components/WritingCallout'
import { UrbanPilotCase } from './components/case/UrbanPilotCase'
import { FluxCase } from './components/case/FluxCase'
import { SkylineCase } from './components/case/SkylineCase'

// Minimal history-based routing: '/' is the single-page portfolio,
// '/writing' is the Research & Essays archive, and '/projects/<slug>'
// are the project case studies. vercel.json rewrites unknown paths to
// index.html so deep links work in production.
export type Page = 'home' | 'writing' | 'case'

const caseStudies: Record<string, ComponentType> = {
  urbanpilot: UrbanPilotCase,
  flux: FluxCase,
  skyline: SkylineCase,
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

  const clean = path.replace(/\/+$/, '')
  const caseMatch = clean.match(/^\/projects\/([a-z-]+)$/)
  const CaseComponent = caseMatch ? caseStudies[caseMatch[1]] : undefined
  const page: Page = CaseComponent ? 'case' : clean === '/writing' ? 'writing' : 'home'

  return (
    <div className="shell">
      <Sidebar page={page} navigate={navigate} />
      <main className="main">
        {CaseComponent ? (
          <CaseComponent />
        ) : page === 'writing' ? (
          <WritingArchive />
        ) : (
          <>
            <Hero />
            <Projects navigate={navigate} />
            <WritingCallout navigate={navigate} />
            <Experience />
            <Skills />
            <Now />
            <Resume />
          </>
        )}
      </main>
    </div>
  )
}
