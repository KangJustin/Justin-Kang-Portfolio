import { useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { projects } from '../../data/projects'
import { isRedSuit, projectRanks } from '../../data/table'
import { SectionHead, SectionPage } from './SectionPage'

// '[ 001 ] · sep_2026' -> 'SEP 2026'
function projectDate(index: string) {
  return (index.split('·')[1] ?? '').trim().replace('_', ' ').toUpperCase()
}

export function ProjectsPage({ navigate }: { navigate: (to: string) => void }) {
  const [focus, setFocus] = useState(0)
  const n = projects.length

  const openCase = (to?: string) => (e: MouseEvent) => {
    if (!to || e.metaKey || e.ctrlKey || e.shiftKey) return
    e.preventDefault()
    navigate(to)
  }

  return (
    <SectionPage id="projects" navigate={navigate}>
      <section className="tb-sheet tb-sheet--flow">
        <div className="tb-shead-row">
          <SectionHead eyebrow="Q♦ — 03 · PROJECTS" title="The board." />
          <div className="tb-flow-ctl">
            <button type="button" className="tb-round-btn" onClick={() => setFocus((focus - 1 + n) % n)} aria-label="Previous project">
              ‹
            </button>
            <span className="tb-flow-ctl__pos" aria-live="polite">
              {focus + 1} / {n}
            </span>
            <button type="button" className="tb-round-btn" onClick={() => setFocus((focus + 1) % n)} aria-label="Next project">
              ›
            </button>
          </div>
        </div>

        {/* coverflow: the focused project faces you, its neighbours angle away */}
        <div className="tb-flow">
          {projects.map((p, k) => {
            let off = k - focus
            if (off > n / 2) off -= n
            if (off < -n / 2) off += n
            const abs = Math.abs(off)
            const rank = projectRanks[p.title] ?? { rank: '?', suit: '♠' as const }
            const side = off !== 0
            return (
              <article
                key={p.title}
                className={`tb-flow-card${side ? ' is-side' : ' is-focus'}`}
                style={
                  {
                    '--off': off,
                    '--abs': abs,
                    '--sign': Math.sign(off),
                    zIndex: 10 - abs,
                    opacity: abs > 2 ? 0 : 1,
                    visibility: abs > 2 ? 'hidden' : 'visible',
                  } as CSSProperties
                }
                aria-hidden={side}
              >
                <span className="tb-idx" style={{ color: isRedSuit(rank.suit) ? '#c0392b' : '#1b1b1b' }} aria-hidden="true">
                  {rank.rank}
                  <br />
                  {rank.suit}
                </span>
                <span className="tb-flow-card__date">{projectDate(p.index)}</span>
                <div className="tb-flow-card__shot">[ {p.windowTitle.split('—')[1]?.trim() ?? 'preview'} ]</div>
                <span className="tb-flow-card__tag">{p.tags.slice(0, 2).join(' · ').toUpperCase()}</span>
                <h2 className="tb-flow-card__title">{p.title}</h2>
                <p className="tb-flow-card__desc">{p.desc}</p>
                {p.caseStudy && (
                  <a href={p.caseStudy} className="tb-flow-card__link" onClick={openCase(p.caseStudy)} tabIndex={side ? -1 : 0}>
                    case study →
                  </a>
                )}
                {side && (
                  <button type="button" className="tb-flow-card__pick" onClick={() => setFocus(k)} aria-label={`Show ${p.title}`} />
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="tb-sheet tb-allhands" aria-labelledby="all-hands">
        <h2 id="all-hands" className="tb-label">EVERY HAND · {n} PROJECTS</h2>
        <ul className="tb-allhands__grid">
          {projects.map((p) => {
            const rank = projectRanks[p.title] ?? { rank: '?', suit: '♠' as const }
            return (
              <li key={p.title}>
                <a href={p.caseStudy ?? '#'} className="tb-mini" onClick={openCase(p.caseStudy)}>
                  <span className="tb-mini__rank" style={{ color: isRedSuit(rank.suit) ? '#c0392b' : '#1b1b1b' }}>
                    {rank.rank}
                    {rank.suit}
                  </span>
                  <span className="tb-mini__body">
                    <span className="tb-mini__meta">{projectDate(p.index)}</span>
                    <span className="tb-mini__title">{p.title}</span>
                    <span className="tb-mini__tags">{p.tags.slice(0, 3).join(' · ')}</span>
                  </span>
                  <span className="tb-mini__go" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </SectionPage>
  )
}
