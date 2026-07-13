// Real device screenshots (dark mode), not a recreation — Start Test,
// the AI examiner's reasoning reveal, and the final verdict.

const screens = [
  {
    src: '/projects/buzzbuddy-start.jpg',
    label: 'start_test',
    alt: 'BuzzBuddy check-in screen with a large "Start Test" button',
  },
  {
    src: '/projects/buzzbuddy-game.jpg',
    label: 'reaction_test',
    alt: 'BuzzBuddy reaction-time mini-game showing a green "TAP!" prompt',
  },
  {
    src: '/projects/buzzbuddy-reasoning.jpg',
    label: 'ai_reasoning',
    alt: 'BuzzBuddy AI examiner reasoning reveal, showing its evolving confidence in monospaced text',
  },
  {
    src: '/projects/buzzbuddy-verdict.jpg',
    label: 'verdict',
    alt: 'BuzzBuddy verdict screen reading "Severely Impaired" with 81% confidence, a plain-language summary, and a disclaimer that it does not estimate BAC or legal driving status',
  },
]

export function BuzzBuddyPreview() {
  return (
    <div className="bb-screens">
      {screens.map((s) => (
        <figure key={s.label} className="bb-screen">
          <div className="bb-screen-frame">
            <img src={s.src} alt={s.alt} loading="lazy" />
          </div>
          <figcaption>{s.label}</figcaption>
        </figure>
      ))}
    </div>
  )
}
