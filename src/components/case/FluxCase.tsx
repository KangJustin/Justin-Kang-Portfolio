import { flux as d } from '../../data/caseStudies'
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

function PipelineMock() {
  return (
    <>
      <div className="fx2-grid">
        <div className="fx2-panel">
          <div className="fx2-panel-label">voice_transcript · ray-ban</div>
          <div className="fx2-body">
            <p className="fx2-quote">{d.quote}</p>
            <div className="fx2-wavewrap">
              <div className="fx2-wave">
                {d.waveBars.map((bar, i) => (
                  <span
                    key={i}
                    className={bar.dim ? 'dim' : undefined}
                    style={{ height: `${bar.h}px` }}
                  />
                ))}
              </div>
              <span className="fx2-captured">● captured</span>
            </div>
          </div>
        </div>

        <div className="fx2-panel">
          <div className="fx2-panel-label">pipeline · gemini</div>
          <ol className="fx2-steps">
            {d.pipelineSteps.map((step) => (
              <li key={step.name} className={`fx2-step fx2-step--${step.kind}`}>
                <span className="fx2-step-mark">{step.mark}</span>
                <span className="fx2-step-name">{step.name}</span>
                <span className="fx2-step-note">{step.note}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="fx2-json">
          <div className="fx2-json-label">workflow.json · output</div>
          <pre>
            <code>
              {'{\n  '}
              <span className="k">"workflow"</span>: <span className="s">"share_demo"</span>
              {',\n  '}
              <span className="k">"trigger"</span>: <span className="s">"voice"</span>
              {',\n  '}
              <span className="k">"steps"</span>
              {': [\n    { '}
              <span className="k">"app"</span>: <span className="s">"gmail"</span>
              {',\n      '}
              <span className="k">"action"</span>: <span className="s">"send"</span>
              {',\n      '}
              <span className="k">"params_valid"</span>: <span className="b">true</span>
              {' },\n    { '}
              <span className="k">"app"</span>: <span className="s">"slack"</span>
              {',\n      '}
              <span className="k">"action"</span>: <span className="s">"post"</span>
              {',\n      '}
              <span className="k">"params_valid"</span>: <span className="b">true</span>
              {' },\n    { '}
              <span className="k">"app"</span>: <span className="s">"calendar"</span>
              {',\n      '}
              <span className="k">"action"</span>: <span className="s">"block"</span>
              {',\n      '}
              <span className="k">"params_valid"</span>: <span className="b">true</span>
              {' }\n  ],\n  '}
              <span className="k">"status"</span>: <span className="s">"ready"</span>
              {'\n}'}
            </code>
          </pre>
        </div>
      </div>

      <div className="fx2-exec">
        <span className="ok">✓ validate</span>
        <span className="arr">→</span>
        <span className="ok">✓ repair</span>
        <span className="arr">→</span>
        <span className="ready">● ready</span>
        <span className="right">3 steps · 12 integrations</span>
      </div>
    </>
  )
}

export function FluxCase() {
  return (
    <div className="case-study">
      <section className="cs-wrap cs-wrap--wide">
        <header className="cs-hero">
          <div className="cs-left">
            <CsLabelRow index={d.index} date={d.date} version={d.version} />
            <h1 className="cs-title">{d.title}</h1>
            <CsTags tags={d.tags} />
            <p className="cs-desc cs-desc--wide">{d.desc}</p>
            <p className="cs-detail">{d.detail}</p>
            <CsCta label="Code" href={d.codeUrl} />
          </div>
          <CsViewport title={d.viewportTitle} suffix={<span className="fx2-dot">●</span>} dark>
            <PipelineMock />
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
