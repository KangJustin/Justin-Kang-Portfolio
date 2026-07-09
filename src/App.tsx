import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Now } from './components/Now'
import { Resume } from './components/Resume'

export default function App() {
  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Now />
        <Resume />
      </main>
    </div>
  )
}
