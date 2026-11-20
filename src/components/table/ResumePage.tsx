import { site } from '../../data/site'
import { RESUME_UPDATED, resumeFacts } from '../../data/table'
import { CardBack } from './PlayingCard'
import { SectionHead, SectionPage } from './SectionPage'

export function ResumePage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <SectionPage id="resume" navigate={navigate}>
      <section className="tb-sheet tb-resume">
        <div className="tb-resume__stack" aria-hidden="true">
          <CardBack style={{ transform: 'rotate(7deg)', left: 34, top: 8 }} />
          <CardBack style={{ transform: 'rotate(2deg)', left: 22, top: 4, backgroundColor: '#7a1f1f' }} />
          <div className="tb-resume__paper">
            <span className="tb-idx">
              10
              <br />♠
            </span>
            <span className="tb-idx tb-idx--flip">
              10
              <br />♠
            </span>
            <span className="tb-resume__name">{site.name.toUpperCase()}</span>
            <span className="tb-resume__contact">{site.email} · berkeley, ca</span>
            <span className="tb-resume__rule" />
            {['EXPERIENCE', 'PROJECTS', 'SKILLS'].map((h, i) => (
              <span key={h} className="tb-resume__block">
                <span className="tb-resume__h">{h}</span>
                {Array.from({ length: [3, 2, 1][i] }, (_, j) => (
                  <span key={j} className="tb-resume__line" style={{ width: `${[92, 80, 86][j]}%` }} />
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="tb-resume__body">
          <SectionHead eyebrow="10♠ — 05 · RÉSUMÉ" title="Show your cards." />
          <p className="tb-lede">One page, everything on the table: roles, projects, and skills, current as of Fall 2026.</p>
          <div className="tb-btn-row">
            <a href={site.links.resume} className="tb-btn tb-btn--gold" target="_blank" rel="noreferrer">
              View PDF ↗
            </a>
            <a href={site.links.resume} className="tb-btn" download="Justin-Kang-Resume.pdf">
              Download ↓
            </a>
          </div>
          <span className="tb-resume__file">resume.pdf · 1 page · updated {RESUME_UPDATED}</span>
          <div className="tb-facts">
            {resumeFacts.map((f) => (
              <div key={f.label} className="tb-fact">
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionPage>
  )
}
