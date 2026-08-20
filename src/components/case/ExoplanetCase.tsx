import { exoplanet as d } from '../../data/caseStudies'
import {
  CsLabelRow,
  CsTags,
  CsCta,
  CsViewport,
  CsSectionHead,
  CsSpecStrip,
  CsFooter,
} from './CaseShared'

// Stylized instrument-readout diagram (not a literal plot of the real
// dataset) standing in for the pipeline's two key outputs: the BLS
// periodogram peak that finds the orbital period, and the phase-folded
// light curve that confirms a repeating transit. The bottom ruler
// visualizes the habitable-zone result from the case study's last stage.
function TransitDiagram() {
  return (
    <div className="sk2-viewbox">
      <svg
        viewBox="0 0 640 460"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Diagram of a BLS periodogram peak at 3.52 days, a phase-folded transit dip, and a habitable-zone ruler showing the planet orbiting well inside the too-hot zone"
      >
        <defs>
          <pattern id="exo-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--c-ink)" strokeOpacity="0.06" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="640" height="460" fill="url(#exo-grid)" />

        {/* 01 BLS periodogram */}
        <rect x="30" y="30" width="280" height="190" fill="var(--c-raised)" stroke="var(--c-ink)" strokeWidth="2" />
        <line x1="30" y1="210" x2="310" y2="210" className="exo-axis" />
        <polyline
          className="exo-trace"
          points="34,196 48,188 62,192 76,182 90,190 104,176 118,166 132,150 144,108 154,52 162,110 172,150 184,178 198,194 214,198 230,200 246,202 262,204 278,206 296,208 306,208"
        />
        <line x1="154" y1="20" x2="154" y2="210" className="exo-peakline" strokeDasharray="3 3" />
        <text x="154" y="16" textAnchor="middle" className="exo-label exo-label--acc">
          3.52 d
        </text>
        <text x="34" y="46" className="exo-label">
          POWER ≈570
        </text>

        {/* 02 phase-folded transit */}
        <rect x="330" y="30" width="280" height="190" fill="var(--c-raised)" stroke="var(--c-ink)" strokeWidth="2" />
        <line x1="330" y1="100" x2="610" y2="100" className="exo-axis" />
        <g className="exo-scatter">
          {[338, 350, 362, 374, 386, 398, 546, 558, 570, 582, 594, 604].map((x, i) => (
            <circle key={x} cx={x} cy={100 + [-3, 2, -4, 3, -2, 4, 4, -2, 3, -4, 2, -3][i]} r="1.8" />
          ))}
        </g>
        <g className="exo-dip">
          {[430, 444, 458, 472, 486, 500].map((x, i) => (
            <circle key={x} cx={x} cy={100 + [14, 28, 36, 36, 28, 14][i]} r="1.8" />
          ))}
        </g>
        <text x="464" y="164" textAnchor="middle" className="exo-label exo-label--acc">
          depth 0.45%
        </text>

        {/* leader callouts */}
        <g className="exo-leader-group">
          <line x1="154" y1="52" x2="154" y2="252" className="exo-leader" />
          <circle cx="154" cy="52" r="2" className="exo-leader-dot" />
          <text x="30" y="266" className="exo-label">
            <tspan className="exo-label--acc">01</tspan> bls_peak · period 3.52 d, power ≈570
          </text>

          <line x1="464" y1="136" x2="464" y2="290" className="exo-leader" />
          <circle cx="464" cy="136" r="2" className="exo-leader-dot" />
          <text x="330" y="304" className="exo-label">
            <tspan className="exo-label--acc">02</tspan> transit_dip · depth 0.45%, Rp ≈0.115 R☉
          </text>
        </g>

        {/* 03 habitable-zone ruler */}
        <text x="30" y="344" className="exo-label">
          <tspan className="exo-label--acc">03</tspan> habitable_zone
        </text>
        <line x1="30" y1="380" x2="610" y2="380" className="exo-ruler" />
        <rect x="359" y="368" width="139" height="24" className="exo-zone-band" />
        <circle cx="44" cy="380" r="5" className="exo-planet-dot" />
        <line x1="44" y1="368" x2="44" y2="392" className="exo-leader" strokeDasharray="2 2" />
        <text x="44" y="360" textAnchor="middle" className="exo-label exo-label--acc">
          0.048 AU
        </text>
        <text x="428" y="360" textAnchor="middle" className="exo-label">
          habitable zone
        </text>
        <text x="30" y="410" className="exo-axis-label">
          AU 0
        </text>
        <text x="600" y="410" textAnchor="end" className="exo-axis-label">
          AU 2.6
        </text>
        <text x="30" y="428" className="exo-label">
          8× closer than Mercury · equilibrium temp 1661.7 K · not habitable
        </text>

        <text x="610" y="452" textAnchor="end" className="exo-axis-label">
          TARGET KIC 6922244 · MISSION KEPLER · METHOD TRANSIT (BLS)
        </text>
      </svg>
    </div>
  )
}

function BreakdownGlyph({ kind }: { kind: 'curve' | 'periodogram' | 'orbit' | 'zone' }) {
  if (kind === 'curve') {
    return (
      <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
        <polyline
          points="2,16 10,14 16,16 20,26 24,16 30,12 34,15 42,13"
          fill="none"
          stroke="var(--c-ink)"
          strokeWidth="1.4"
        />
        <line x1="2" y1="24" x2="42" y2="24" stroke="var(--c-ink)" strokeWidth="1" opacity="0.4" />
      </svg>
    )
  }
  if (kind === 'periodogram') {
    return (
      <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
        <line x1="2" y1="28" x2="42" y2="28" stroke="var(--c-ink)" strokeWidth="1" opacity="0.5" />
        <rect x="6" y="22" width="3" height="6" fill="var(--c-ink)" opacity="0.5" />
        <rect x="13" y="18" width="3" height="10" fill="var(--c-ink)" opacity="0.5" />
        <rect x="20" y="4" width="3" height="24" fill="var(--c-acc)" />
        <rect x="27" y="16" width="3" height="12" fill="var(--c-ink)" opacity="0.5" />
        <rect x="34" y="22" width="3" height="6" fill="var(--c-ink)" opacity="0.5" />
      </svg>
    )
  }
  if (kind === 'orbit') {
    return (
      <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
        <circle cx="22" cy="16" r="3.5" fill="var(--c-ink)" />
        <ellipse cx="22" cy="16" rx="19" ry="10" fill="none" stroke="var(--c-ink)" strokeWidth="1.2" opacity="0.6" />
        <circle cx="41" cy="16" r="2" fill="var(--c-acc)" />
      </svg>
    )
  }
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
      <circle cx="22" cy="16" r="4" fill="var(--c-ink)" />
      <circle cx="22" cy="16" r="10" fill="none" stroke="var(--c-ink)" strokeWidth="1" opacity="0.5" />
      <circle cx="22" cy="16" r="15" fill="none" stroke="var(--c-acc)" strokeWidth="1.2" strokeDasharray="2 2" />
    </svg>
  )
}

export function ExoplanetCase() {
  return (
    <div className="case-study">
      <section className="cs-wrap">
        <header className="cs-hero">
          <div className="cs-left">
            <CsLabelRow index={d.index} date={d.date} version={d.version} />
            <h1 className="cs-title">Exoplanet Transit</h1>
            <p className="cs-desc">{d.desc}</p>
            <CsTags tags={d.tags} />
            <CsCta label="Writeup" href={d.writeupUrl} />
          </div>
          <CsViewport title={d.viewportTitle} suffix={d.viewportSuffix}>
            <TransitDiagram />
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} size="lg" />

        <section className="cs-section">
          <CsSectionHead title="Pipeline Breakdown" note="4 stages" />
          <div className="cs-cards cs-cards--wide">
            {d.breakdown.map((item) => (
              <article key={item.num} className="cs-card">
                <div className="cs-card-top cs-card-top--start">
                  <span className="cs-card-num">{item.num}</span>
                  <BreakdownGlyph kind={item.glyph} />
                </div>
                <h3 className="cs-card-title--lg">{item.title}</h3>
                <p className="cs-card-body--lg">{item.body}</p>
                <span className="cs-card-footnote">{item.footnote}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <CsSectionHead title="Process" note="6 phases" />
          <ol className="cs-phases">
            {d.phases.map((phase) => (
              <li key={phase.num}>
                <span className="cs-phase-square" />
                <span className="cs-phase-num">{phase.num}</span>
                <span className="cs-phase-name">{phase.name}</span>
                <span className="cs-phase-note">{phase.note}</span>
              </li>
            ))}
          </ol>
        </section>

        <CsFooter left={d.footer[0]} right={d.footer[1]} />
      </section>
    </div>
  )
}
