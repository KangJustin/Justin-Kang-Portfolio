import { buzzbuddy as d } from '../../data/caseStudies'
import { BuzzBuddyPreview } from '../previews/BuzzBuddyPreview'
import {
  CsLabelRow,
  CsTags,
  CsCta,
  CsViewport,
  CsSectionHead,
  CsSpecStrip,
  CsStageCards,
  CsFooter,
} from './CaseShared'

export function BuzzBuddyCase() {
  return (
    <div className="case-study">
      <section className="cs-wrap">
        <header className="cs-hero">
          <div className="cs-left">
            <CsLabelRow index={d.index} date={d.date} version={d.version} />
            <h1 className="cs-title">{d.title}</h1>
            <CsTags tags={d.tags} />
            <p className="cs-desc">{d.desc}</p>
            <p className="cs-detail">{d.detail}</p>
            <CsCta label="Code" href={d.codeUrl} />
          </div>
          <CsViewport title={d.viewportTitle} suffix="live">
            <BuzzBuddyPreview />
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} size="sm" />

        <section className="cs-section">
          <CsSectionHead title="How It Works" note="4 stages" />
          <CsStageCards stages={d.stages} />
        </section>

        <section className="cs-section">
          <CsSectionHead title="Technical Decisions" note="3 tradeoffs" />
          <div className="cs-decisions">
            {d.decisions.map((dec) => (
              <article key={dec.num} className="cs-decision">
                <span className="cs-decision-num">{dec.num}</span>
                <h3>{dec.title}</h3>
                <p>{dec.body}</p>
              </article>
            ))}
          </div>
        </section>

        <CsFooter left={d.footer[0]} right={d.footer[1]} />
      </section>
    </div>
  )
}
