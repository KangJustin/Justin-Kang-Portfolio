import { projects } from '../data/projects'
import type { Project } from '../data/projects'

function Thumb({ thumb }: { thumb: Project['thumb'] }) {
  if (thumb.kind === 'image') {
    return (
      <div className="proj__thumb">
        <img src={thumb.image} alt="" />
      </div>
    )
  }
  return <div className={`proj__thumb proj__thumb--${thumb.kind}`}>{thumb.glyphText}</div>
}

export function Projects() {
  return (
    <section id="projects" className="section-block">
      <div className="col-header">
        <h2 className="col-header__title">Projects</h2>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state" data-reveal>
          Projects coming soon — currently organizing GitHub repos, demos, and writeups.
        </div>
      ) : (
        <div className="proj-grid">
          {projects.map((p) => (
            <a key={p.title} href={p.link ?? '#'} className="proj" data-reveal>
              <Thumb thumb={p.thumb} />
              <div className="proj__text">
                <div>
                  <div className="proj__title">{p.title}</div>
                  <div className="proj__desc">{p.description}</div>
                </div>
                <div className="proj__tags">{p.tags.join('  ')}</div>
              </div>
              {p.gallery && (
                <div className="proj__gallery">
                  {p.gallery.map((src) => (
                    <img key={src} src={src} alt="" />
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
