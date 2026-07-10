import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { SectionHead } from './SectionHead'
import { FluxPreview } from './previews/FluxPreview'
import { SkylinePreview } from './previews/SkylinePreview'
import { UrbanPilotPreview } from './previews/UrbanPilotPreview'

function PreviewBody({ preview }: { preview: Project['preview'] }) {
  if (preview.kind === 'image') {
    return (
      <div className="window__body window__body--image">
        <img src={preview.src} alt="" />
      </div>
    )
  }
  if (preview.mock === 'urbanpilot') {
    return (
      <div className="window__body window__body--dash">
        <UrbanPilotPreview />
      </div>
    )
  }
  return (
    <div className="window__body">
      {preview.mock === 'flux' ? <FluxPreview /> : <SkylinePreview />}
    </div>
  )
}

export function Projects({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section id="projects" className="section section--projects">
      <SectionHead title="// 02_PROJECTS" meta={`${projects.length} selected`} />
      <div className="projects-list">
        {projects.map((p) => (
          <article key={p.title} className="project">
            <div className="project__info">
              <div className="project__index">{p.index}</div>
              <h3 className="project__title">{p.title}</h3>
              <div className="chips">
                {p.tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="project__desc">{p.desc}</p>
              <p className="project__proof">{p.proof}</p>
              {(p.caseStudy || p.links.length > 0) && (
                <div className="project__links">
                  {p.caseStudy && (
                    <a
                      href={p.caseStudy}
                      className="plink plink--primary"
                      onClick={(e) => {
                        e.preventDefault()
                        navigate(p.caseStudy!)
                      }}
                    >
                      Case study →
                    </a>
                  )}
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`plink${link.primary ? ' plink--primary' : ''}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="window">
              <div className="window__bar">
                <span className="window__file">{p.windowTitle}</span>
                <span className="window__dots">
                  <span />
                  <span />
                  <span />
                </span>
              </div>
              <PreviewBody preview={p.preview} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
