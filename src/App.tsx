import { Sidebar } from './components/Sidebar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { ExperienceInvolvement } from './components/ExperienceInvolvement'
import { NowBar } from './components/NowBar'
import { useRevealAll } from './hooks/useRevealAll'

export default function App() {
  useRevealAll()
  return (
    <div className="shell">
      <Sidebar />
      <main className="main">
        <Hero />
        <div className="rule" />
        <Projects />
        <div className="rule" />
        <Skills />
        <ExperienceInvolvement />
        <NowBar />
      </main>
    </div>
  )
}
