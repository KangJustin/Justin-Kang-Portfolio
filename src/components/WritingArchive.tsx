import { writingItems, writingPage } from '../data/writing'
import { SectionHead } from './SectionHead'
import { WritingItemRow } from './WritingItemRow'
import { FeaturedPaper } from './FeaturedPaper'

export function WritingArchive() {
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
        <div className="wr-grid">
          <div className="wr-list">
            {writingItems.map((item) => (
              <WritingItemRow key={item.index} item={item} />
            ))}
          </div>
          <FeaturedPaper />
        </div>
      </section>
    </>
  )
}
