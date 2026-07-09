import { writingCallout } from '../data/writing'

// Compact homepage pointer to the separate /writing archive.
export function WritingCallout({ navigate }: { navigate: (to: string) => void }) {
  return (
    <section className="section section--callout">
      <div className="wr-callout">
        <div className="wr-callout-label">{writingCallout.label}</div>
        <div className="wr-callout-title">{writingCallout.title}</div>
        <p className="wr-callout-body">{writingCallout.body}</p>
        <a
          href="/writing"
          className="plink plink--primary"
          onClick={(e) => {
            e.preventDefault()
            navigate('/writing')
          }}
        >
          {writingCallout.ctaLabel}
        </a>
      </div>
    </section>
  )
}
