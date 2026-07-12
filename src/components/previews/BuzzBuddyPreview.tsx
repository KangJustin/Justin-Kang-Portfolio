// Hand-built mock preview standing in for a real screenshot — recreates the
// examiner's tool-calling trace and confidence readout from a check-in.

const baseline = [
  { label: 'Reaction', value: '412ms' },
  { label: 'Balance', value: '0.18g' },
  { label: 'Memory', value: '94%' },
]

const trace = [
  { mark: '✓', name: 'retrieve_baseline', note: 'loaded' },
  { mark: '✓', name: 'request_test → reaction', note: '599ms' },
  { mark: '✓', name: 'analyze_deviation', note: '+45%' },
  { mark: '✓', name: 'request_test → balance', note: '0.49g' },
  { mark: '↻', name: 'update_confidence', note: '81%' },
  { mark: '●', name: 'notify_contact', note: 'texted' },
]

export function BuzzBuddyPreview() {
  return (
    <div className="bb-dash">
      <div className="bb-head">
        <div className="bb-head-left">
          <span className="bb-wordmark">
            buzz<span className="bb-wordmark-acc">buddy</span>
          </span>
          <span className="bb-session">check_in · session_042</span>
        </div>
        <span className="bb-live">● examiner active</span>
      </div>

      <div className="bb-baseline">
        {baseline.map((s) => (
          <div key={s.label} className="bb-baseline-stat">
            <span className="bb-baseline-label">{s.label}</span>
            <span className="bb-baseline-value">{s.value}</span>
          </div>
        ))}
        <span className="bb-baseline-tag">sober baseline</span>
      </div>

      <ol className="bb-trace">
        {trace.map((t) => (
          <li
            key={t.name}
            className={`bb-trace-row${t.mark === '●' ? ' bb-trace-row--flag' : ''}`}
          >
            <span className="bb-trace-mark">{t.mark}</span>
            <span className="bb-trace-name">{t.name}</span>
            <span className="bb-trace-note">{t.note}</span>
          </li>
        ))}
      </ol>

      <div className="bb-verdict">
        <div className="bb-meter">
          <div className="bb-meter-fill" style={{ width: '81%' }} />
        </div>
        <div className="bb-verdict-row">
          <span className="bb-verdict-text">
            Deviation confidence · <strong>81%</strong>
          </span>
          <span className="bb-verdict-flag">designated driver texted</span>
        </div>
      </div>
    </div>
  )
}
