import { skillGroups } from '../data/skills'
import { SectionHead } from './SectionHead'

export function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHead title="// 04_SKILLS" />
      <div className="sk-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="sk-col">
            <div className="sk-head">{group.title}</div>
            {group.items.map((item) => (
              <div key={item} className="sk-item">
                <span className="caret">▸</span>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
