import { now } from '../../data/now'
import { aboutBio, aboutChips, playerProfile } from '../../data/table'
import { site } from '../../data/site'
import { SectionHead, SectionPage } from './SectionPage'

const nowSuits = ['♠', '♥', '♦']

export function AboutPage({ navigate }: { navigate: (to: string) => void }) {
  return (
    <SectionPage id="about" navigate={navigate}>
      <section className="tb-sheet tb-about">
        <div className="tb-about__card-wrap">
          <div className="tb-player">
            <span className="tb-idx" aria-hidden="true">
              A<br />♠
            </span>
            <span className="tb-idx tb-idx--flip" aria-hidden="true">
              A<br />♠
            </span>
            <img className="tb-player__photo" src="/justin-kang.jpg" alt={`Portrait of ${site.name}`} width={600} height={700} />
            <div className="tb-player__name">
              <span>{site.name}</span>
              <span className="tb-player__role">PLAYER PROFILE</span>
            </div>
          </div>
        </div>

        <div className="tb-about__body">
          <SectionHead eyebrow="A♠ — 01 · ABOUT" title="Meet the player." />
          <p className="tb-lede">{aboutBio}</p>
          <dl className="tb-profile">
            {playerProfile.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="tb-chips" aria-label="Tools I use">
            {aboutChips.map((chip) => (
              <li key={chip}>{chip}</li>
            ))}
          </ul>
        </div>

        <div className="tb-about__now">
          <span className="tb-label">THIS HAND · OCT 2026</span>
          {now.blocks.slice(0, 3).map((block, i) => (
            <div key={block.label} className="tb-now-card" style={{ rotate: `${[-1, 1, -0.5][i]}deg` }}>
              <span className={`tb-now-card__k${i > 0 ? ' is-red' : ''}`}>
                {nowSuits[i]} {block.label.toUpperCase()}
              </span>
              <span className="tb-now-card__v">{block.body}</span>
            </div>
          ))}
        </div>
      </section>
    </SectionPage>
  )
}
