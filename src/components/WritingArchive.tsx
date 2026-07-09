import { writingItems, writingPage } from '../data/writing'
import { SectionHead } from './SectionHead'
import { WritingItemRow } from './WritingItemRow'
import { FeaturedPaper } from './FeaturedPaper'

export function WritingArchive() {
  const isEmpty = writingItems.length === 0
  return (
    <>
      <section className="wr-hero">
        <div className="hero__term">
          <span className="hero__term-path">{writingPage.terminalPath}</span>
          <span>$</span>
          <span>{writingPage.terminalCmd}</span>
        </div>
        <h1 className="wr-title">
          {writingPage.title}
          <span className="hero__cursor" />
        </h1>
        <p className="wr-subtitle">{writingPage.subtitle}</p>
      </section>

      <section className="section section--writing">
        <SectionHead title="// WRITING_ARCHIVE" meta={`${writingItems.length} selected`} />
        {isEmpty ? (
          <div className="wr-empty">
            <div className="wr-empty-heading">{writingPage.empty.heading}</div>
            <p className="wr-empty-body">{writingPage.empty.body}</p>
            <a
              href={writingPage.empty.ctaHref}
              className="plink plink--primary"
              target="_blank"
              rel="noreferrer"
            >
              {writingPage.empty.ctaLabel}
            </a>
          </div>
        ) : (
          <div className="wr-grid">
            <div className="wr-list">
              {writingItems.map((item) => (
                <WritingItemRow key={item.index} item={item} />
              ))}
            </div>
            <FeaturedPaper />
          </div>
        )}
      </section>
    </>
  )
}
