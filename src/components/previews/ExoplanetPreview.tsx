// Hand-built mock preview — a stylized instrument readout standing in for
// a real light-curve plot: BLS periodogram peak on the left, phase-folded
// transit dip on the right, each in its own bordered panel.

export function ExoplanetPreview() {
  return (
    <>
      <div className="trn-sheet">
        <div className="trn-canvas">
          <svg
            className="trn-svg"
            viewBox="0 0 300 150"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label="BLS periodogram showing a dominant peak, next to a phase-folded light curve showing a transit dip"
          >
            {/* periodogram panel */}
            <rect x="6" y="10" width="130" height="100" className="trn-panel" />
            <line x1="6" y1="100" x2="136" y2="100" className="trn-axis" />
            <polyline
              className="trn-trace"
              points="12,88 24,84 36,86 48,80 58,84 68,66 74,24 80,68 90,86 100,92 112,94 124,96"
            />
            <line x1="74" y1="14" x2="74" y2="100" className="trn-peakline" strokeDasharray="2 2" />

            {/* phase-fold panel */}
            <rect x="164" y="10" width="130" height="100" className="trn-panel" />
            <line x1="164" y1="52" x2="294" y2="52" className="trn-axis" />
            <g className="trn-scatter">
              {[172, 182, 192, 202, 212, 262, 272, 282].map((x, i) => (
                <circle key={x} cx={x} cy={52 + [-3, 2, -2, 3, -3, 2, -3, 3][i]} r="1.6" />
              ))}
            </g>
            <g className="trn-dip">
              {[222, 232, 242, 252].map((x, i) => (
                <circle key={x} cx={x} cy={52 + [8, 16, 16, 8][i]} r="1.6" />
              ))}
            </g>
          </svg>
        </div>
      </div>
      <div className="trn-titleblock">
        <div className="trn-cell">
          <span className="trn-cell-label">TARGET</span>
          <span className="trn-cell-value">Kepler-8b</span>
        </div>
        <div className="trn-cell">
          <span className="trn-cell-label">PERIOD</span>
          <span className="trn-cell-value">3.52 d</span>
        </div>
        <div className="trn-cell">
          <span className="trn-cell-label">DEPTH</span>
          <span className="trn-cell-value is-accent">0.45%</span>
        </div>
      </div>
    </>
  )
}
