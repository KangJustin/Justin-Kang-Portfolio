// Hand-built mock preview — a stylized instrument readout standing in for
// a real light-curve plot: BLS periodogram peak on the left, phase-folded
// transit dip on the right.

export function ExoplanetPreview() {
  return (
    <>
      <div className="trn-sheet">
        <div className="trn-canvas">
          <svg
            className="trn-svg"
            viewBox="0 0 300 150"
            preserveAspectRatio="none"
            role="img"
            aria-label="BLS periodogram showing a dominant peak, next to a phase-folded light curve showing a transit dip"
          >
            {/* periodogram */}
            <polyline
              className="trn-noise"
              points="4,116 16,110 28,114 40,106 52,112 64,100 76,92 84,60 90,20 96,54 104,88 112,104 122,112 132,108 140,114"
            />
            <line className="trn-peakline" x1="90" y1="10" x2="90" y2="120" strokeDasharray="2 2" />
            <line className="trn-axis" x1="2" y1="120" x2="140" y2="120" />

            {/* phase-fold */}
            <line className="trn-axis" x1="160" y1="120" x2="298" y2="120" />
            <g className="trn-scatter">
              {[164, 172, 180, 188, 196, 204, 252, 260, 268, 276, 284, 292].map((x) => (
                <circle key={x} cx={x} cy={62 + (x % 5)} r="1.4" />
              ))}
            </g>
            <g className="trn-dip">
              {[214, 220, 226, 232, 238, 244].map((x, i) => (
                <circle key={x} cx={x} cy={62 + [4, 10, 14, 14, 10, 4][i]} r="1.4" />
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
