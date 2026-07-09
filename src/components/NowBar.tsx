import { now } from '../data/now'

const columns = [
  { label: 'Learning', text: now.learning },
  { label: 'Building', text: now.building },
  { label: 'Improving', text: now.improving },
  { label: 'Looking for', text: now.lookingFor },
]

export function NowBar() {
  return (
    <section id="now" className="now-bar">
      <div>
        <div className="now-bar__head">
          <span className="now-bar__title">— Now</span>
          <span className="now-bar__dot" />
        </div>
        <div className="now-bar__text">{now.blurb}</div>
      </div>
      {columns.map((col) => (
        <div key={col.label}>
          <div className="now-bar__label">{col.label}</div>
          <div className="now-bar__text">{col.text}</div>
        </div>
      ))}
    </section>
  )
}
