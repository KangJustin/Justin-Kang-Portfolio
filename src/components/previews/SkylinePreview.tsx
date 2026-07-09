// Hand-built mock preview per the design handoff — an assembly-drawing
// sheet standing in for a real CAD render.

export function SkylinePreview() {
  return (
    <>
      <div className="sky-sheet">
        <div className="sky-canvas">
          <div className="sky-rail" />
          <div className="sky-mount" style={{ left: '4%' }} />
          <div className="sky-mount" style={{ right: '4%' }} />
          <div className="sky-hanger" style={{ left: '22%' }} />
          <div className="sky-cart sky-cart--a" style={{ left: '22%' }}>
            cart_a
          </div>
          <div className="sky-hanger" style={{ left: '63%' }} />
          <div className="sky-cart sky-cart--b" style={{ left: '63%' }}>
            cart_b
          </div>
          <div className="sky-dim" />
          <div className="sky-dim-label">rail_span · modular 1.5 m sections</div>
        </div>
      </div>
      <div className="sky-titleblock">
        <div className="sky-cell">
          <span className="sky-cell-label">SPEC</span>
          <span className="sky-cell-value">ISO 14644 cleanroom</span>
        </div>
        <div className="sky-cell">
          <span className="sky-cell-label">BOM</span>
          <span className="sky-cell-value">$2,300 constraint</span>
        </div>
        <div className="sky-cell">
          <span className="sky-cell-label">AWARD</span>
          <span className="sky-cell-value is-accent">2nd · ASME CADathon '25</span>
        </div>
      </div>
    </>
  )
}
