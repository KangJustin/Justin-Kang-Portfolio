import { experience } from '../data/experience'

// Renders nothing until src/data/experience.ts has verified entries.
export function ExperienceInvolvement() {
  if (experience.length === 0) return null
  return (
    <>
      <div className="rule" />
      <section id="experience" className="section-block">
        <div className="col-header">
          <h2 className="col-header__title">Experience &amp; Involvement</h2>
        </div>
        <div className="timeline">
          <div className="timeline__rail" />
          {experience.map((item) => (
            <div key={item.org + item.role + item.dates} className="exp" data-reveal>
              <span className="exp__dot" />
              <div>
                <div className="exp__org">{item.org}</div>
                <div className="exp__role">{item.role}</div>
              </div>
              <div className="exp__dates">{item.dates}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
