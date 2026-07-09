// Hand-built mock preview per the design handoff — stands in for a real
// screenshot of the voice → workflow pipeline.

const waveHeights = [
  { h: 35, dim: true },
  { h: 70, dim: false },
  { h: 50, dim: false },
  { h: 90, dim: false },
  { h: 45, dim: true },
  { h: 75, dim: false },
  { h: 30, dim: true },
  { h: 60, dim: false },
  { h: 40, dim: true },
]

export function FluxPreview() {
  return (
    <>
      <div className="fx-grid">
        <div className="fx-card">
          <div className="fx-label">voice_transcript · ray-ban</div>
          <div className="fx-quote">
            "send yesterday's demo clips to the team and block 30 minutes tomorrow morning"
          </div>
          <div className="fx-wave">
            {waveHeights.map((bar, i) => (
              <span
                key={i}
                className={bar.dim ? 'dim' : undefined}
                style={{ height: `${bar.h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="fx-json">
          <div>{'{'}</div>
          <div>
            &nbsp;&nbsp;<span className="k">"workflow"</span>: <span className="s">"share_demo"</span>,
          </div>
          <div>
            &nbsp;&nbsp;<span className="k">"steps"</span>: [
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="k">"app"</span>:{' '}
            <span className="s">"gmail"</span>, <span className="k">"action"</span>:{' '}
            <span className="s">"send"</span> {'},'}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="k">"app"</span>:{' '}
            <span className="s">"slack"</span>, <span className="k">"action"</span>:{' '}
            <span className="s">"post"</span> {'},'}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="k">"app"</span>:{' '}
            <span className="s">"calendar"</span>, <span className="k">"action"</span>:{' '}
            <span className="s">"block"</span> {'}'}
          </div>
          <div>&nbsp;&nbsp;],</div>
          <div>
            &nbsp;&nbsp;<span className="k">"params_valid"</span>: <span className="b">true</span>
          </div>
          <div>{'}'}</div>
        </div>
      </div>
      <div className="fx-status">
        <span className="ok">✓ validate</span>
        <span className="line">──</span>
        <span className="ok">✓ repair</span>
        <span className="line">──</span>
        <span className="pill">● ready — 3 steps</span>
      </div>
    </>
  )
}
