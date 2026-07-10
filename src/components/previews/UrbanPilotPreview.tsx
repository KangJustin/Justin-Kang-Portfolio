import { urbanpilot as d } from '../../data/caseStudies'

// Designed recreation of the UrbanPilot scenario dashboard — used in the
// homepage project window and the case-study hero viewport.
export function UrbanPilotPreview() {
  return (
    <div className="up-dash">
      {/* header: identity + location + target year */}
      <div className="up-head">
        <div className="up-head-left">
          <span className="up-wordmark">
            Urban<span className="up-wordmark-acc">Pilot</span>
          </span>
          <span className="up-loc">Downtown Berkeley, CA</span>
        </div>
        <div className="up-years">
          <span>Current</span>
          <span className="active">2040</span>
          <span>2075</span>
        </div>
      </div>

      {/* planning goal + verified sources */}
      <div className="up-goal">
        <span className="up-goal-label">Goal</span>
        <span className="up-goal-text">Add housing near transit</span>
        <span className="up-goal-cursor" />
      </div>
      <div className="up-pills">
        <span className="up-pill">✓ Verified · Open-Meteo</span>
        <span className="up-pill">✓ Verified · Census ACS</span>
        <span className="up-pill">✓ Verified · FEMA</span>
      </div>

      {/* KPI row — 4 larger cards */}
      <div className="up-kpis">
        <div className="up-kpi">
          <span className="up-kpi-label">Climate</span>
          <span className="up-kpi-value">
            62<span className="up-kpi-unit">/100</span>
          </span>
        </div>
        <div className="up-kpi">
          <span className="up-kpi-label">Transit</span>
          <span className="up-kpi-value">
            66<span className="up-kpi-unit">/100</span>
          </span>
        </div>
        <div className="up-kpi">
          <span className="up-kpi-label">Median rent</span>
          <span className="up-kpi-value">$1,719</span>
        </div>
        <div className="up-kpi">
          <span className="up-kpi-label">Flood risk</span>
          <span className="up-kpi-value">Min.</span>
        </div>
      </div>

      {/* main: scenario table (focal) + map */}
      <div className="up-main">
        <div className="up-panel up-panel--focal">
          <div className="up-panel-title">Scenario performance</div>
          <table className="up-table">
            <thead>
              <tr>
                <th></th>
                <th>Current</th>
                <th className="hl">
                  <span className="up-th-chip">2040</span>
                </th>
                <th>2075</th>
              </tr>
            </thead>
            <tbody>
              {d.scenarioRows.map((row) => (
                <tr key={row.name} className={row.name === 'Overall' ? 'total' : undefined}>
                  <td>{row.name}</td>
                  <td className="num">{row.current}</td>
                  <td className="num hl">
                    {row.y2040}
                    <span className="up-delta">▲{row.y2040 - row.current}</span>
                  </td>
                  <td className="num">{row.y2075}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="up-map">
          <div className="up-panel-title up-map-title">Scenario area</div>
          <div className="up-map-box">
            <svg
              viewBox="0 0 220 170"
              preserveAspectRatio="xMidYMid slice"
              role="img"
              aria-label="Abstract street-grid map with the selected scenario area and location markers"
            >
              <rect width="220" height="170" fill="#F3F0E4" />
              <g stroke="#B4AC93" strokeWidth="1.5">
                <line x1="0" y1="36" x2="220" y2="32" />
                <line x1="0" y1="76" x2="220" y2="72" />
                <line x1="0" y1="118" x2="220" y2="116" />
                <line x1="0" y1="156" x2="220" y2="154" />
                <line x1="38" y1="0" x2="42" y2="170" />
                <line x1="132" y1="0" x2="132" y2="170" />
                <line x1="182" y1="0" x2="180" y2="170" />
              </g>
              <line x1="0" y1="160" x2="220" y2="22" stroke="#9E9781" strokeWidth="3" />
              <line
                x1="86"
                y1="0"
                x2="88"
                y2="170"
                stroke="#3E7A72"
                strokeWidth="2.5"
                strokeDasharray="7 4"
                opacity="0.75"
              />
              <rect
                x="62"
                y="46"
                width="60"
                height="52"
                fill="rgba(62,122,114,.16)"
                stroke="#3E7A72"
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
              <g>
                <circle cx="88" cy="72" r="14" fill="#3E7A72" opacity="0.18" />
                <circle cx="88" cy="72" r="9" fill="none" stroke="#3E7A72" strokeWidth="1.5" opacity="0.6" />
                <circle cx="88" cy="72" r="6" fill="#3E7A72" />
                <circle cx="46" cy="126" r="4.5" fill="#3E7A72" opacity="0.85" />
                <circle cx="160" cy="46" r="4.5" fill="#3E7A72" opacity="0.85" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* bottom: risks + recommendations */}
      <div className="up-bottom">
        <div className="up-panel">
          <div className="up-panel-title">Risks</div>
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
          <div className="up-panel-title">Recommendations</div>
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
