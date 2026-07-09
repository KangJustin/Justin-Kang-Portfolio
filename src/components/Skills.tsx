import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="col-header">
        <h2 className="col-header__title">Skills</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.label} className="skill-group" data-reveal>
            <div className="skill-group__label">{group.label}</div>
            <ul className="skill-group__list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
