import type { MouseEvent, ReactNode } from 'react'
import { site } from '../../data/site'
import { sectionCards } from '../../data/table'
import type { SectionCard } from '../../data/table'
import { JkChip } from './PlayingCard'

interface SectionPageProps {
  id: SectionCard['id']
  navigate: (to: string) => void
  children: ReactNode
}

// Frame shared by the six pages a home-page card opens: a way back to the
// table, and ‹ › to deal the neighbouring card without going back.
export function SectionPage({ id, navigate, children }: SectionPageProps) {
  const index = sectionCards.findIndex((c) => c.id === id)
  const prev = sectionCards[(index - 1 + sectionCards.length) % sectionCards.length]
  const next = sectionCards[(index + 1) % sectionCards.length]

  const go = (to: string) => (e: MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <div className="tb tb-page">
      <header className="tb-page__bar">
        <a href="/" className="tb-backlink" onClick={go('/')}>
          ← Back to the table
        </a>
        <nav className="tb-page__deal" aria-label="Other sections">
          <a href={prev.path} className="tb-round-btn" onClick={go(prev.path)} aria-label={`Previous: ${prev.title}`}>
            ‹
          </a>
          <span className="tb-page__path">
            {site.wordmark}
            {sectionCards[index].path}
          </span>
          <a href={next.path} className="tb-round-btn" onClick={go(next.path)} aria-label={`Next: ${next.title}`}>
            ›
          </a>
        </nav>
        <a href="/" className="tb-chip-btn" onClick={go('/')} aria-label="Home">
          <JkChip size={48} />
        </a>
      </header>
      <main id="main-content" className="tb-page__main">
        {children}
      </main>
      <footer className="tb-page__foot">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
      </footer>
    </div>
  )
}

// Eyebrow + big serif heading used at the top of every section.
export function SectionHead({ eyebrow, title, aside }: { eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="tb-shead">
      <div className="tb-shead__main">
        <span className="tb-eyebrow">{eyebrow}</span>
        <h1 className="tb-shead__title">{title}</h1>
      </div>
      {aside && <p className="tb-shead__aside">{aside}</p>}
    </div>
  )
}
