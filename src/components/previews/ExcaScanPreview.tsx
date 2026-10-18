// Hand-built mock preview in the same assembly-sheet style as Skyline:
// the control path from ESP32 into the stock transmitter, driving the arm.

export function ExcaScanPreview() {
  return (
    <>
      <div className="sky-sheet">
        <svg
          viewBox="0 0 400 150"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Simplified sketch of an excavator arm with a camera in place of the bucket, controlled by an ESP32 through the stock transmitter"
        >
          <g fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#6B6656">
            <rect x="14" y="30" width="70" height="30" fill="rgba(62,122,114,.12)" stroke="#3E7A72" strokeWidth="1.5" />
            <text x="24" y="49">esp32</text>
            <rect x="14" y="92" width="70" height="30" fill="#F6F3EA" stroke="#23231F" strokeWidth="1.5" />
            <text x="22" y="111">stock_tx</text>
            <line x1="49" y1="60" x2="49" y2="90" stroke="#3E7A72" strokeWidth="1.5" />
            <line x1="84" y1="107" x2="150" y2="107" stroke="#23231F" strokeWidth="1" strokeDasharray="3 3" />
            <text x="104" y="101">RF</text>
          </g>
          {/* excavator body */}
          <g stroke="#23231F" strokeWidth="1.5" fill="#F6F3EA">
            <rect x="160" y="112" width="110" height="16" rx="8" />
            <rect x="172" y="88" width="70" height="24" />
            <line x1="236" y1="92" x2="292" y2="44" />
            <line x1="292" y1="44" x2="338" y2="76" />
            <rect x="330" y="76" width="24" height="16" fill="rgba(62,122,114,.12)" stroke="#3E7A72" />
            <circle cx="342" cy="84" r="4" fill="none" stroke="#3E7A72" />
          </g>
          <g fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#3E7A72">
            <text x="304" y="110">camera</text>
          </g>
          <g stroke="#9E9781" strokeWidth="1" fill="none" strokeDasharray="2 3">
            <path d="M 300 120 A 60 22 0 0 0 390 120" />
          </g>
          <g fill="#23231F">
            <rect x="372" y="128" width="6" height="6" />
            <rect x="296" y="132" width="6" height="6" />
          </g>
        </svg>
      </div>
      <div className="sky-titleblock">
        <div className="sky-cell">
          <span className="sky-cell-label">CONTROL</span>
          <span className="sky-cell-value">ESP32 → stock TX</span>
        </div>
        <div className="sky-cell">
          <span className="sky-cell-label">POLICY</span>
          <span className="sky-cell-value">teleop fine-tune</span>
        </div>
        <div className="sky-cell">
          <span className="sky-cell-label">OUTPUT</span>
          <span className="sky-cell-value is-accent">to-scale CAD</span>
        </div>
      </div>
    </>
  )
}
