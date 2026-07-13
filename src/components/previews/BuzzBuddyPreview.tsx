// Real device screenshots (dark mode), not a recreation — Start Test,
// the AI examiner's reasoning reveal, and the final verdict.

const screens = [
  { src: '/projects/buzzbuddy-start.jpg', label: 'start_test' },
  { src: '/projects/buzzbuddy-game.jpg', label: 'reaction_test' },
  { src: '/projects/buzzbuddy-reasoning.jpg', label: 'ai_reasoning' },
  { src: '/projects/buzzbuddy-verdict.jpg', label: 'verdict' },
]

export function BuzzBuddyPreview() {
  return (
    <div className="bb-screens">
      {screens.map((s) => (
        <figure key={s.label} className="bb-screen">
          <div className="bb-screen-frame">
            <img src={s.src} alt="" loading="lazy" />
          </div>
          <figcaption>{s.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
