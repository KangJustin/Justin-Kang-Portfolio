import { excascan as d } from '../../data/caseStudies'
import {
  CsLabelRow,
  CsTags,
  CsViewport,
  CsSectionHead,
  CsSpecStrip,
  CsProof,
  CsListSection,
  CsFooter,
} from './CaseShared'

const ACC = '#3E7A72'
const INK = '#23231F'
const PAPER = '#F6F3EA'
const MONO = 'IBM Plex Mono, monospace'

// Schematic of the control path: compute -> ESP32 -> stock transmitter ->
// excavator, with camera frames feeding back to the policy and the
// reconstruction step. Accent = the parts Justin built.
function ControlDiagram() {
  const box = (x: number, y: number, w: number, h: number, title: string, sub: string, mine: boolean) => (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill={mine ? 'rgba(62,122,114,.12)' : PAPER}
        stroke={mine ? ACC : INK}
        strokeWidth="2"
      />
      <text x={x + 10} y={y + 20} fontFamily={MONO} fontSize="12" fill={INK} fontWeight="600">
        {title}
      </text>
      <text x={x + 10} y={y + 38} fontFamily={MONO} fontSize="10" fill="#6B6656">
        {sub}
      </text>
    </g>
  )
  return (
    <div className="sk2-viewbox">
      <svg
        viewBox="0 0 640 500"
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label="Control path diagram: a fine-tuned policy on a laptop sends commands over serial to an ESP32, which drives digital potentiometers and MOSFET switches wired into the stock 2.4 GHz transmitter; the transmitter drives the excavator, whose bucket-mounted camera feeds frames back to the policy and to reconstruction."
      >
        <defs>
          <pattern id="exs-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke={INK} strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
          <marker id="exs-arr" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,1 L7,4 L0,7" fill="none" stroke={INK} strokeWidth="1.2" />
          </marker>
          <marker id="exs-arr-acc" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,1 L7,4 L0,7" fill="none" stroke={ACC} strokeWidth="1.2" />
          </marker>
        </defs>
        <rect x="0" y="0" width="640" height="500" fill="url(#exs-grid)" />

        <g fontFamily={MONO} fontSize="10" fill="#9E9781">
          <text x="40" y="44">COMPUTE</text>
          <text x="40" y="190">CONTROL HARDWARE</text>
          <text x="40" y="336">STOCK MACHINE</text>
        </g>
        <g stroke="#9E9781" strokeWidth="1" strokeDasharray="4 4">
          <line x1="40" y1="172" x2="600" y2="172" />
          <line x1="40" y1="318" x2="600" y2="318" />
        </g>

        {box(40, 56, 170, 56, 'policy', 'teleop fine-tune', true)}
        {box(244, 56, 150, 56, 'laptop_bridge', 'frames in · cmds out', false)}
        {box(428, 56, 172, 56, 'reconstruction', 'ArUco-scaled → CAD', false)}

        {box(40, 202, 170, 56, 'digital_pots', 'joystick wipers', true)}
        {box(244, 202, 150, 56, 'esp32', 'serial → pots / FETs', true)}
        {box(428, 202, 172, 56, 'mosfet_switches', 'button contacts', true)}

        {box(40, 348, 190, 56, 'stock_tx · 2.4 GHz', 'encoder + RF, untouched', false)}
        {box(290, 348, 310, 56, 'excavator', 'camera in place of bucket', false)}

        <g strokeWidth="1.5" fill="none">
          <line x1="210" y1="84" x2="242" y2="84" stroke={INK} markerEnd="url(#exs-arr)" />
          <line x1="319" y1="112" x2="319" y2="200" stroke={INK} markerEnd="url(#exs-arr)" />
          <line x1="244" y1="230" x2="212" y2="230" stroke={ACC} markerEnd="url(#exs-arr-acc)" />
          <line x1="394" y1="230" x2="426" y2="230" stroke={ACC} markerEnd="url(#exs-arr-acc)" />
          <line x1="125" y1="258" x2="125" y2="346" stroke={ACC} markerEnd="url(#exs-arr-acc)" />
          <path d="M 514 258 L 514 290 L 170 290 L 170 346" stroke={ACC} markerEnd="url(#exs-arr-acc)" />
          <line x1="230" y1="376" x2="288" y2="376" stroke={INK} markerEnd="url(#exs-arr)" />
          <path d="M 600 376 L 620 376 L 620 132 L 514 132 L 514 114" stroke={INK} strokeDasharray="5 4" markerEnd="url(#exs-arr)" />
          <path d="M 600 392 L 628 392 L 628 146 L 360 146 L 360 114" stroke={INK} strokeDasharray="5 4" markerEnd="url(#exs-arr)" />
        </g>
        <g fontFamily={MONO} fontSize="9.5" fill="#6B6656">
          <text x="246" y="370">RF</text>
          <text x="430" y="160">camera frames</text>
        </g>
        <g fontFamily={MONO} fontSize="9" fill="#6B6656">
          <text x="600" y="482" textAnchor="end">
            ACCENT = BUILT BY ME · DASHED = CAMERA FEEDBACK
          </text>
        </g>
      </svg>
    </div>
  )
}

export function ExcaScanCase() {
  return (
    <div className="case-study">
      <section className="cs-wrap">
        <header className="cs-hero">
          <div className="cs-left">
            <CsLabelRow index={d.index} date={d.date} version={d.version} />
            <h1 className="cs-title">EXCA-Scan</h1>
            <CsTags tags={d.tags} />
            <CsProof data={{ role: d.role }} />
            <p className="cs-desc">{d.desc}</p>
          </div>
          <CsViewport title={d.viewportTitle} suffix={d.viewportSuffix}>
            <ControlDiagram />
          </CsViewport>
        </header>

        <CsSpecStrip specs={d.specs} size="lg" />

        <section className="cs-section">
          <CsSectionHead title="System Breakdown" note="3 subsystems" />
          <div className="cs-cards cs-cards--wide">
            {d.breakdown.map((item) => (
              <article key={item.num} className="cs-card">
                <div className="cs-card-top cs-card-top--start">
                  <span className="cs-card-num">{item.num}</span>
                </div>
                <h3 className="cs-card-title--lg">{item.title}</h3>
                <p className="cs-card-body--lg">{item.body}</p>
                <span className="cs-card-footnote">{item.footnote}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="cs-section">
          <CsSectionHead title="Build Process" note="6 phases" />
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

        <CsListSection title="Constraints & Limitations" items={d.limitations} />

        <CsFooter left={d.footer[0]} right={d.footer[1]} />
      </section>
    </div>
  )
}
