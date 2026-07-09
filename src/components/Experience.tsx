import { experience } from '../data/experience'
import { SectionHead } from './SectionHead'

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHead title="// 03_EXPERIENCE" />
      <div className="xp-list">
        {experience.map((r) => (
          <div key={r.org} className="xp-row">
            <div className="xp-when">
              <div className="xp-dates">{r.dates}</div>
              <div className="xp-loc">{r.loc}</div>
            </div>
            <div className="xp-body">
              <div className="xp-org">{r.org}</div>
              <div className="xp-role">{r.role}</div>
              <p className="xp-summary">{r.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
