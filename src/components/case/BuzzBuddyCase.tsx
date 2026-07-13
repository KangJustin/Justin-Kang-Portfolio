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
  CsProof,
  CsListSection,
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
            <CsProof data={d.proof} />
            <p className="cs-desc">{d.desc}</p>
            <p className="cs-detail">{d.detail}</p>
          </div>
          <CsViewport title={d.viewportTitle} suffix="4 screens">
            <BuzzBuddyPreview />
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} size="sm" />

        <CsListSection title="What I Contributed" items={d.contributions} />

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

        <CsListSection title="Evaluation & Evidence" items={d.evidence} />
        <CsListSection title="Constraints & Limitations" items={d.limitations} />
        <CsListSection title="What I'd Improve Next" items={d.nextSteps} />

        <section className="cs-section">
          <CsSectionHead title="Demo, Code & Artifacts" />
          <div className="cs-artifact-links">
            <CsCta label="Code" href={d.codeUrl} />
            <CsCta label="Devpost" href={d.devpostUrl} />
          </div>
        </section>

        <CsFooter left={d.footer[0]} right={d.footer[1]} />
      </section>
    </div>
  )
}
