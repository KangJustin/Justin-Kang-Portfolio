import { skyline as d } from '../../data/caseStudies'
import {
  CsLabelRow,
  CsTags,
  CsCta,
  CsViewport,
  CsSectionHead,
  CsSpecStrip,
  CsFooter,
} from './CaseShared'

const ACC = '#3E7A72'

function CadDiagram() {
  const ceilingHatch = [60, 100, 140, 180, 220, 260, 300, 340, 380, 420, 460, 500, 540, 580]
  const floorHatch = [70, 120, 170, 220, 270, 320, 370, 420, 470, 520, 570]
  return (
    <div className="sk2-viewbox">
      <svg
        viewBox="0 0 640 500"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Technical line diagram of the Skyline Transport system: overhead gantry rail, suspended locking head, pull-out tray holder, and motorized cart elevator below"
      >
        <defs>
          <pattern id="skx-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#23231F" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <marker id="skx-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,1 L7,4 L0,7" fill="none" stroke="#9E9781" strokeWidth="1" />
          </marker>
        </defs>

        <rect x="0" y="0" width="640" height="500" fill="url(#skx-grid)" />

        {/* ceiling with hatching */}
        <line x1="40" y1="48" x2="600" y2="48" stroke="#23231F" strokeWidth="2" />
        <g stroke="#23231F" strokeWidth="1" opacity="0.55">
          {ceilingHatch.map((x) => (
            <line key={x} x1={x} y1="48" x2={x - 12} y2="36" />
          ))}
        </g>

        {/* drop rods */}
        <g stroke="#23231F" strokeWidth="2">
          <line x1="120" y1="48" x2="120" y2="86" />
          <line x1="520" y1="48" x2="520" y2="86" />
        </g>
        <rect x="112" y="82" width="16" height="8" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <rect x="512" y="82" width="16" height="8" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />

        {/* 01 gantry rail (T-slot) */}
        <rect x="60" y="90" width="520" height="26" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <line x1="60" y1="103" x2="580" y2="103" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <g stroke="#23231F" strokeWidth="1" opacity="0.5">
          {[90, 150, 210, 430, 490, 550].map((x) => (
            <line key={x} x1={x} y1="90" x2={x} y2="116" />
          ))}
        </g>

        {/* trolley on rail */}
        <rect x="292" y="116" width="56" height="18" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <circle cx="304" cy="125" r="5" fill="none" stroke="#23231F" strokeWidth="1.5" />
        <circle cx="336" cy="125" r="5" fill="none" stroke="#23231F" strokeWidth="1.5" />

        {/* suspension shaft */}
        <line x1="320" y1="134" x2="320" y2="168" stroke="#23231F" strokeWidth="2" />

        {/* 02 locking head (rotary) */}
        <rect x="284" y="168" width="72" height="34" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <circle cx="320" cy="185" r="10" fill="rgba(62,122,114,.12)" stroke={ACC} strokeWidth="2" />
        <line x1="313" y1="178" x2="327" y2="192" stroke={ACC} strokeWidth="1.5" />
        <line x1="327" y1="178" x2="313" y2="192" stroke={ACC} strokeWidth="1.5" />
        <path d="M 338 175 A 20 20 0 0 1 338 195" fill="none" stroke="#9E9781" strokeWidth="1" markerEnd="url(#skx-arr)" />

        {/* 03 tray holder with pull-out tray */}
        <rect x="248" y="202" width="144" height="66" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <line x1="248" y1="224" x2="392" y2="224" stroke="#23231F" strokeWidth="1" opacity="0.6" />
        <line x1="248" y1="246" x2="392" y2="246" stroke="#23231F" strokeWidth="1" opacity="0.6" />
        <rect x="392" y="228" width="52" height="14" fill="rgba(62,122,114,.12)" stroke={ACC} strokeWidth="2" />
        <line x1="400" y1="235" x2="436" y2="235" stroke={ACC} strokeWidth="1" opacity="0.7" />
        <line x1="444" y1="235" x2="466" y2="235" stroke="#9E9781" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#skx-arr)" />

        {/* transfer gap (dashed alignment) */}
        <line x1="320" y1="268" x2="320" y2="316" stroke="#9E9781" strokeWidth="1" strokeDasharray="4 4" />

        {/* 04 motorized cart / elevator */}
        <rect x="262" y="316" width="116" height="10" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <g stroke={ACC} strokeWidth="2.5" fill="none">
          <line x1="272" y1="326" x2="368" y2="368" />
          <line x1="368" y1="326" x2="272" y2="368" />
        </g>
        <circle cx="320" cy="347" r="3" fill="none" stroke="#23231F" strokeWidth="1.5" />
        <rect x="252" y="368" width="136" height="44" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <rect x="264" y="378" width="30" height="24" fill="none" stroke="#23231F" strokeWidth="1" opacity="0.6" />
        <text x="279" y="394" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#43402F" textAnchor="middle">
          M
        </text>
        <line x1="306" y1="378" x2="376" y2="378" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <line x1="306" y1="390" x2="376" y2="390" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <circle cx="276" cy="422" r="10" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <circle cx="364" cy="422" r="10" fill="#F6F3EA" stroke="#23231F" strokeWidth="2" />
        <circle cx="276" cy="422" r="3" fill="none" stroke="#23231F" strokeWidth="1" />
        <circle cx="364" cy="422" r="3" fill="none" stroke="#23231F" strokeWidth="1" />

        {/* floor with hatching */}
        <line x1="40" y1="432" x2="600" y2="432" stroke="#23231F" strokeWidth="2" />
        <g stroke="#23231F" strokeWidth="1" opacity="0.55">
          {floorHatch.map((x) => (
            <line key={x} x1={x} y1="432" x2={x - 12} y2="444" />
          ))}
        </g>

        {/* dimension line: ceiling to floor */}
        <g stroke="#9E9781" strokeWidth="1">
          <line x1="72" y1="54" x2="72" y2="426" markerStart="url(#skx-arr)" markerEnd="url(#skx-arr)" />
        </g>
        <rect x="56" y="228" width="32" height="16" fill="#F6F3EA" />
        <text x="72" y="240" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fill="#6B6656" textAnchor="middle">
          2400
        </text>

        {/* annotation leaders */}
        <g fontFamily="IBM Plex Mono, monospace" fontSize="11.5" fill="#23231F">
          <line x1="490" y1="103" x2="530" y2="76" stroke="#23231F" strokeWidth="1" />
          <circle cx="490" cy="103" r="2" fill="#23231F" />
          <text x="534" y="74">
            <tspan fill={ACC}>01</tspan> gantry_rail
          </text>

          <line x1="356" y1="185" x2="446" y2="160" stroke="#23231F" strokeWidth="1" />
          <circle cx="356" cy="185" r="2" fill="#23231F" />
          <text x="450" y="158">
            <tspan fill={ACC}>02</tspan> locking_head
          </text>

          <line x1="248" y1="235" x2="176" y2="270" stroke="#23231F" strokeWidth="1" />
          <circle cx="248" cy="235" r="2" fill="#23231F" />
          <text x="60" y="284">
            <tspan fill={ACC}>03</tspan> tray_holder
          </text>

          <line x1="388" y1="390" x2="452" y2="366" stroke="#23231F" strokeWidth="1" />
          <circle cx="388" cy="390" r="2" fill="#23231F" />
          <text x="456" y="364">
            <tspan fill={ACC}>04</tspan> cart_elevator
          </text>
        </g>

        {/* title block corner */}
        <g fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B6656">
          <text x="600" y="482" textAnchor="end">
            SCALE 1:24 · UNITS mm · THIRD ANGLE
          </text>
        </g>
      </svg>
    </div>
  )
}

function BreakdownGlyph({ kind }: { kind: 'gantry' | 'lock' | 'cart' }) {
  if (kind === 'gantry') {
    return (
      <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
        <rect x="2" y="10" width="40" height="10" fill="none" stroke="#23231F" strokeWidth="1.5" />
        <line x1="2" y1="15" x2="42" y2="15" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <line x1="12" y1="10" x2="12" y2="20" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <line x1="32" y1="10" x2="32" y2="20" stroke="#23231F" strokeWidth="1" opacity="0.5" />
        <line x1="10" y1="2" x2="10" y2="10" stroke="#23231F" strokeWidth="1.5" />
        <line x1="34" y1="2" x2="34" y2="10" stroke="#23231F" strokeWidth="1.5" />
      </svg>
    )
  }
  if (kind === 'lock') {
    return (
      <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
        <line x1="22" y1="0" x2="22" y2="6" stroke="#23231F" strokeWidth="1.5" />
        <rect x="10" y="6" width="24" height="12" fill="none" stroke="#23231F" strokeWidth="1.5" />
        <circle cx="22" cy="12" r="4" fill="none" stroke="#23231F" strokeWidth="1.2" />
        <rect x="6" y="22" width="32" height="8" fill="none" stroke="#23231F" strokeWidth="1.5" />
        <line x1="22" y1="18" x2="22" y2="22" stroke="#23231F" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  }
  return (
    <svg width="44" height="32" viewBox="0 0 44 32" aria-hidden="true">
      <rect x="12" y="2" width="20" height="4" fill="none" stroke="#23231F" strokeWidth="1.5" />
      <line x1="14" y1="6" x2="30" y2="16" stroke="#23231F" strokeWidth="1.2" />
      <line x1="30" y1="6" x2="14" y2="16" stroke="#23231F" strokeWidth="1.2" />
      <rect x="8" y="16" width="28" height="10" fill="none" stroke="#23231F" strokeWidth="1.5" />
      <circle cx="14" cy="29" r="3" fill="none" stroke="#23231F" strokeWidth="1.2" />
      <circle cx="30" cy="29" r="3" fill="none" stroke="#23231F" strokeWidth="1.2" />
    </svg>
  )
}

export function SkylineCase() {
  return (
    <div className="case-study">
      <section className="cs-wrap">
        <header className="cs-hero">
          <div className="cs-left">
            <CsLabelRow index={d.index} date={d.date} version={d.version} />
            <h1 className="cs-title">
              Skyline
              <br />
              Transport
            </h1>
            <p className="cs-desc">{d.desc}</p>
            <CsTags tags={d.tags} />
            <CsCta label="Writeup" href={d.writeupUrl} />
          </div>
          <CsViewport title={d.viewportTitle} suffix={d.viewportSuffix}>
            <CadDiagram />
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} size="lg" />

        <section className="cs-section">
          <CsSectionHead title="System Breakdown" note="3 subassemblies" />
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
          <CsSectionHead title="Design Process" note="6 phases" />
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
