import { now } from '../data/now'
import { SectionHead } from './SectionHead'

export function Now() {
  return (
    <section id="now" className="section">
      <SectionHead title="// 05_NOW" meta={now.lastUpdated} />
      <div className="now-panel">
        <div className="now-block">
          <div className="now-label">&gt; currently_building</div>
          <div className="now-text">{now.currentlyBuilding}</div>
        </div>
        <div className="now-block">
          <div className="now-label">&gt; looking_for</div>
          <div className="now-text">{now.lookingFor}</div>
        </div>
      </div>
    </section>
  )
}
