import { useEffect, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Now } from './components/Now'
import { Resume } from './components/Resume'
import { WritingArchive } from './components/WritingArchive'
import { WritingCallout } from './components/WritingCallout'

// Minimal history-based routing: '/' is the single-page portfolio,
// '/writing' is the Research & Essays archive. vercel.json rewrites
// unknown paths to index.html so deep links work in production.
export type Page = 'home' | 'writing'

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

  const page: Page = path.replace(/\/+$/, '') === '/writing' ? 'writing' : 'home'

  return (
    <div className="shell">
      <Sidebar page={page} navigate={navigate} />
      <main className="main">
        {page === 'writing' ? (
          <WritingArchive />
        ) : (
          <>
            <Hero />
            <Projects />
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
