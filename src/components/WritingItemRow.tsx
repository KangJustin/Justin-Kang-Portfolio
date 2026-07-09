import type { WritingItem } from '../data/writing'
import { Tag } from './Tag'

export function WritingItemRow({ item }: { item: WritingItem }) {
  return (
    <article className="wr-row">
      <div className="wr-meta">
        <div className="wr-index">
          {item.index} · {item.date}
        </div>
        <div className="wr-cat">{item.category}</div>
        <div className="wr-type">{item.type}</div>
      </div>
      <div className="wr-main">
        <h3 className="wr-item-title">{item.title}</h3>
        <p className="wr-summary">{item.summary}</p>
        <p className="wr-takeaway">→ {item.takeaway}</p>
        <div className="wr-foot">
          <div className="chips">
            {item.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <a href={item.href ?? '#'} className="plink plink--primary">
            {item.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  )
}
