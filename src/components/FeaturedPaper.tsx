import { featuredPaper, writingPage } from '../data/writing'

export function FeaturedPaper() {
  const { item, filename, excerpt } = featuredPaper
  return (
    <aside className="wr-aside">
      <div className="fp-panel">
        <div className="fp-label">FEATURED PAPER</div>

        <div className="window fp-window">
          <div className="window__bar">
            <span className="window__file">{filename}</span>
            <span className="window__dots">
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className="fp-doc">
            <div className="fp-doc-title">{item.title}</div>
            <p className="fp-doc-excerpt">“{excerpt}”</p>
            <div className="fp-doc-insight">
              <span className="fp-doc-insight-label">key_insight:</span> {item.takeaway}
            </div>
          </div>
        </div>

        <div className="fp-meta-block">
          <div className="fp-title">{item.title}</div>
          <div className="fp-meta">
            {item.date} · {item.type}
          </div>
        </div>

        <div className="fp-includes">
          <div className="fp-label">WHAT EACH NOTE INCLUDES</div>
          <ul className="fp-includes-list">
            {writingPage.includes.map((line) => (
              <li key={line}>
                <span className="fp-arrow">→</span> {line}
              </li>
            ))}
          </ul>
        </div>

        <a href={item.href ?? '#'} className="btn-dark fp-cta">
          Open featured paper <span>↗</span>
        </a>
      </div>
    </aside>
  )
}
