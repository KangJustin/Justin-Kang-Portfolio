import { urbanpilot as d } from '../../data/caseStudies'
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

export function UrbanPilotCase() {
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
          <CsViewport title={d.viewportTitle} suffix={d.viewportSuffix}>
            <div className="cs-viewimg">
              <img src="/projects/urbanpilot-dashboard.jpg" alt="UrbanPilot scenario dashboard" />
            </div>
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} />

        <section className="cs-section">
          <CsSectionHead title="How It Works" note="4 stages" />
          <CsStageCards stages={d.stages} />
        </section>

        <section className="cs-section">
          <CsSectionHead title="Why It Matters" />
          <div className="cs-why">
            <p className="cs-why-pull">{d.whyPull}</p>
            <p className="cs-why-body">{d.whyBody}</p>
          </div>
        </section>

        <CsFooter left={d.footer[0]} right={d.footer[1]} />
      </section>
    </div>
  )
}
