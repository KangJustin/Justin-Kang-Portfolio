import { site } from '../data/site'
import { SectionHead } from './SectionHead'

export function Resume() {
  return (
    <section id="resume" className="section section--resume">
      <SectionHead title="// 06_RESUME" />
      <div className="resume-row">
        <a href={site.links.resume} className="btn-dark" target="_blank" rel="noreferrer">
          Download resume.pdf <span>↓</span>
        </a>
        <span className="sec-meta">{site.resumeMeta}</span>
      </div>
    </section>
  )
}
