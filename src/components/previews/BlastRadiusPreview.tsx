// Hand-built mock preview — a schematic call graph standing in for the
// real interactive SVG graph (target node at center, affected functions
// in hop rings), plus a title-block calling out the project's core bet:
// the graph is computed, the risk narrative is AI-generated.

export function BlastRadiusPreview() {
  return (
    <>
      <div className="br-sheet">
        <div className="br-canvas">
          <svg viewBox="0 0 200 160" className="br-svg" aria-hidden="true">
            <circle cx="100" cy="90" r="55" className="br-ring" />
            <circle cx="100" cy="90" r="88" className="br-ring" />

            <line x1="100" y1="90" x2="100" y2="32" className="br-edge br-edge--hop1" />
            <line x1="100" y1="90" x2="143" y2="113" className="br-edge br-edge--hop1" />
            <line x1="100" y1="90" x2="57" y2="113" className="br-edge br-edge--hop1" />
            <line x1="100" y1="32" x2="138" y2="10" className="br-edge br-edge--hop2" />
            <line x1="143" y1="113" x2="184" y2="103" className="br-edge br-edge--hop2" />

            <circle cx="138" cy="10" r="4" className="br-node br-node--hop2" />
            <circle cx="184" cy="103" r="4" className="br-node br-node--hop2" />
            <circle cx="100" cy="32" r="5" className="br-node br-node--hop1" />
            <circle cx="143" cy="113" r="5" className="br-node br-node--hop1" />
            <circle cx="57" cy="113" r="5" className="br-node br-node--hop1" />
            <circle cx="100" cy="90" r="7" className="br-node br-node--target" />
          </svg>
          <span className="br-canvas-label">target_fn()</span>
          <span className="br-canvas-badge">4 affected · high</span>
        </div>
      </div>
      <div className="br-titleblock">
        <div className="br-cell">
          <span className="br-cell-label">GRAPH</span>
          <span className="br-cell-value">computed</span>
        </div>
        <div className="br-cell">
          <span className="br-cell-label">RISK</span>
          <span className="br-cell-value">ai-generated</span>
        </div>
        <div className="br-cell">
          <span className="br-cell-label">SEVERITY</span>
          <span className="br-cell-value is-accent">high</span>
        </div>
      </div>
    </>
  )
}
