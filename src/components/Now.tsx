import { now } from '../data/now'
import type { NowIcon } from '../data/now'
import { SectionHead } from './SectionHead'

// Tabler icons (MIT), inlined so no icon font/CDN is needed.
const iconPaths: Record<NowIcon, string[]> = {
  hammer: [
    'M11.414 10l-7.383 7.418a2.091 2.091 0 0 0 0 2.967a2.11 2.11 0 0 0 2.976 0l7.407 -7.385',
    'M18.121 15.293l2.586 -2.586a1 1 0 0 0 0 -1.414l-7.586 -7.586a1 1 0 0 0 -1.414 0l-2.586 2.586a1 1 0 0 0 0 1.414l7.586 7.586a1 1 0 0 0 1.414 0z',
  ],
  bulb: [
    'M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7',
    'M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3',
    'M9.7 17l4.6 0',
  ],
  compass: [
    'M8 16l2 -6l6 -2l-2 6l-6 2',
    'M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18',
    'M12 3l0 2',
    'M12 19l0 2',
    'M3 12l2 0',
    'M19 12l2 0',
  ],
  notebook: [
    'M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18',
    'M13 8l2 0',
    'M13 12l2 0',
  ],
}

function Icon({ name }: { name: NowIcon }) {
  return (
    <svg
      className="now-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

export function Now() {
  return (
    <section id="now" className="section">
      <SectionHead title="// 05_NOW" meta={now.lastUpdated} />
      <div className="now-grid">
        {now.blocks.map((block) => (
          <div key={block.label} className="now-card">
            <div className="now-card-head">
              <Icon name={block.icon} />
              <span className="now-card-label">{block.label}</span>
            </div>
            <p className="now-card-body">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
