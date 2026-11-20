import { experience } from '../../data/experience'
import { isRedSuit, leadership, prettyDates } from '../../data/table'
import { ChipStack } from './PlayingCard'
import { SectionHead, SectionPage } from './SectionPage'

export function LeadershipPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <SectionPage id="leadership" navigate={navigate}>
      <section className="tb-sheet">
        <SectionHead
          eyebrow="J♣ — 04 · LEADERSHIP & COMMUNITY"
          title="Chips back in the pot."
          aside="The work I've done for other people: mentoring students and helping run national summits."
        />
        <div className="tb-lead-grid">
          {leadership.map((entry) => {
            const dates = experience.find((e) => e.org === entry.org)?.dates ?? ''
            return (
              <article key={entry.org} className="tb-lead">
                <span className="tb-idx" style={{ color: isRedSuit(entry.suit) ? '#c0392b' : '#1b1b1b' }} aria-hidden="true">
                  {entry.rank}
                  <br />
                  {entry.suit}
                </span>
                <span className="tb-lead__meta">{prettyDates(dates)}</span>
                <h2 className="tb-lead__org">{entry.org.replace(' (eBay Store)', '')}</h2>
                <span className="tb-lead__role">{entry.role}</span>
                <p className="tb-lead__body">{entry.summary}</p>
                <div className={`tb-callout${entry.callout.dark ? ' is-dark' : ''}`}>
                  <span className="tb-callout__k">{entry.callout.label}</span>
                  <span className="tb-callout__v">{entry.callout.text}</span>
                </div>
                <div className="tb-lead__stats">
                  {entry.stats.map((s) => (
                    <div key={s.label} className="tb-stat">
                      <ChipStack count={s.chips} color={s.color} />
                      <span className="tb-stat__text">
                        <b>{s.value}</b>
                        <span>{s.label}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </SectionPage>
  )
}
