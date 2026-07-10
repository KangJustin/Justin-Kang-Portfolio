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

function DashboardMock() {
  return (
    <div className="up-dash">
      <div className="up-topbar">
        <span className="up-wordmark">
          Urban<span className="up-wordmark-acc">Pilot</span>
        </span>
        <span className="up-loc">Downtown Berkeley, CA</span>
        <span className="up-search">⌕ Search address, landmark, city…</span>
      </div>
      <div className="up-pills">
        <span className="up-pill">✓ Verified · Open-Meteo</span>
        <span className="up-pill">✓ Verified · Census ACS</span>
        <span className="up-pill">✓ Verified · FEMA</span>
      </div>

      <div className="up-goal">
        <span className="up-goal-label">Planning goal</span>
        <span className="up-goal-text">Add housing near transit</span>
        <span className="up-goal-cursor" />
      </div>

      <div className="up-metrics">
        <div className="up-metric">
          <span className="up-metric-label">Climate</span>
          <span className="up-metric-value">
            62<span className="up-metric-unit">/100</span>
          </span>
        </div>
        <div className="up-metric">
          <span className="up-metric-label">Transit</span>
          <span className="up-metric-value">
            66<span className="up-metric-unit">/100</span>
          </span>
        </div>
        <div className="up-metric">
          <span className="up-metric-label">Med. rent</span>
          <span className="up-metric-value">$1,719</span>
        </div>
        <div className="up-metric">
          <span className="up-metric-label">Flood risk</span>
          <span className="up-metric-value">Min.</span>
        </div>
        <div className="up-metric">
          <span className="up-metric-label">Air qual.</span>
          <span className="up-metric-value">
            26 <span className="up-metric-unit">AQI</span>
          </span>
        </div>
      </div>

      <div className="up-main">
        <div className="up-panel">
          <div className="up-panel-label">Scenario performance</div>
          <table className="up-table">
            <thead>
              <tr>
                <th></th>
                <th>Current</th>
                <th className="hl">2040</th>
                <th>2075</th>
              </tr>
            </thead>
            <tbody>
              {d.scenarioRows.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td className="num">{row.current}</td>
                  <td className="num hl">{row.y2040}</td>
                  <td className="num">{row.y2075}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="up-map">
          <div className="up-panel-label up-map-label">Scenario area</div>
          <div className="up-map-box">
            <svg
              viewBox="0 0 220 160"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Abstract street-grid map of the scenario area with location markers"
            >
              <rect width="220" height="160" fill="#F6F3EA" />
              <g stroke="#C9C2AE" strokeWidth="1.5">
                <line x1="0" y1="34" x2="220" y2="30" />
                <line x1="0" y1="72" x2="220" y2="68" />
                <line x1="0" y1="112" x2="220" y2="110" />
                <line x1="0" y1="148" x2="220" y2="146" />
                <line x1="36" y1="0" x2="40" y2="160" />
                <line x1="84" y1="0" x2="86" y2="160" />
                <line x1="132" y1="0" x2="132" y2="160" />
                <line x1="180" y1="0" x2="178" y2="160" />
              </g>
              <line x1="0" y1="150" x2="220" y2="20" stroke="#B4AC93" strokeWidth="2.5" />
              <rect
                x="140"
                y="76"
                width="34"
                height="30"
                fill="rgba(62,122,114,.14)"
                stroke="#3E7A72"
                strokeWidth="1"
                strokeDasharray="3 2"
              />
              <line
                x1="84"
                y1="0"
                x2="86"
                y2="160"
                stroke="#3E7A72"
                strokeWidth="2"
                strokeDasharray="6 3"
                opacity="0.6"
              />
              <g>
                <circle cx="86" cy="70" r="5" fill="#3E7A72" />
                <circle cx="86" cy="70" r="9" fill="none" stroke="#3E7A72" strokeWidth="1" opacity="0.5" />
                <circle cx="46" cy="118" r="4" fill="#3E7A72" opacity="0.8" />
                <circle cx="156" cy="44" r="4" fill="#3E7A72" opacity="0.8" />
              </g>
              <line x1="12" y1="150" x2="44" y2="150" stroke="#43402F" strokeWidth="1.5" />
              <text x="12" y="144" fontFamily="IBM Plex Mono, monospace" fontSize="7" fill="#6B6656">
                400 m
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="up-main">
        <div className="up-panel">
          <div className="up-panel-label">Risks · 4 found</div>
          <ul className="up-risks">
            {d.risks.map((risk) => (
              <li key={risk.name} className="up-risk">
                <span className="up-risk-name">{risk.name}</span>
                <span
                  className="up-badge"
                  style={{ borderColor: risk.badgeColor, color: risk.badgeColor }}
                >
                  {risk.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="up-panel">
          <div className="up-panel-label">Interventions</div>
          <div className="up-chips">
            {d.interventions.map((chip) => (
              <span key={chip} className="up-chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
            <DashboardMock />
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
