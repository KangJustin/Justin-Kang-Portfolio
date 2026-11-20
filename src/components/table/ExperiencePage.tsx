import { experience } from '../../data/experience'
import { experienceHands, prettyDates } from '../../data/table'
import { SectionHead, SectionPage } from './SectionPage'

function HoleCard({ card, tilt }: { card: string; tilt: boolean }) {
  const rank = card.slice(0, -1)
  const suit = card.slice(-1)
  const red = suit === '♥' || suit === '♦'
  return (
    <span className={`tb-hole${red ? ' is-red' : ''}${tilt ? ' is-tilt' : ''}`} aria-hidden="true">
      {rank}
      <br />
      {suit}
    </span>
  )
}

export function ExperiencePage({ navigate }: { navigate: (to: string) => void }) {
  const roles = experience.filter((e) => e.org in experienceHands)
  const total = roles.length

  return (
    <SectionPage id="experience" navigate={navigate}>
      <section className="tb-sheet">
        <SectionHead
          eyebrow="K♥ — 02 · EXPERIENCE"
          title="Hand history."
          aside="Every seat I've played, most recent first. The hand I'm in now is pulled forward."
        />
        <div className="tb-hands">
          {roles.map((role, i) => {
            const hand = experienceHands[role.org]
            const current = i === 0
            return (
              <article key={role.org} className={`tb-hand-card${current ? ' is-current' : ''}`}>
                <div className="tb-hand-card__top">
                  <span className="tb-hand-card__holes">
                    <HoleCard card={hand.cards[0]} tilt={false} />
                    <HoleCard card={hand.cards[1]} tilt />
                  </span>
                  {current && (
                    <span className="tb-live">
                      <span className="tb-live__dot" />
                      IN THIS HAND
                    </span>
                  )}
                </div>
                <span className="tb-hand-card__meta">
                  #{String(total - i).padStart(3, '0')} · {prettyDates(role.dates)} · {role.loc}
                </span>
                <h2 className="tb-hand-card__org">{role.org}</h2>
                <span className="tb-hand-card__role">{role.role}</span>
                <p className="tb-hand-card__body">{role.summary}</p>
                {hand.tags && (
                  <ul className="tb-tags">
                    {hand.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </SectionPage>
  )
}
