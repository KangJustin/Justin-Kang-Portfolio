import { now } from '../data/now'
import { SectionHead } from './SectionHead'

export function Now() {
  return (
    <section id="now" className="section">
      <SectionHead title="// 05_NOW" meta={now.lastUpdated} />
      <div className="now-panel">
        {now.blocks.map((block) => (
          <div key={block.label} className="now-block">
            <div className="now-label">{block.label}</div>
            <div className="now-text">{block.text}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
