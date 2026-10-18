import { site } from '../data/site'

export function Hero({ navigate }: { navigate: (to: string) => void }) {
  const [first, last] = site.name.split(' ')
  return (
    <section id="about" className="hero">
      <div className="hero__inner">
        <div className="hero__term">
          <span className="hero__term-path">{site.terminalPath}</span>
          <span>$</span>
          <span>{site.terminalCmd}</span>
        </div>
        <h1 className="hero__name">
          {first}
          <br />
          {last}
          <span className="hero__cursor" />
        </h1>
        <div className="hero__tags">
          {site.statusTags.map((tag) => (
            <span key={tag.text} className={tag.accent ? 'is-accent' : undefined}>
              {tag.text}
            </span>
          ))}
        </div>
        <p className="hero__tagline">{site.tagline}</p>
        <p className="hero__body">{site.heroBody}</p>
        {site.gradInternshipLine && <p className="hero__grad">{site.gradInternshipLine}</p>}
        <div className="hero__ctas">
          <a href="#projects" className="btn-dark">
            View selected work <span>→</span>
          </a>
          <a href={`mailto:${site.email}`} className="link-underline">
            Email Justin
          </a>
          <a href={site.links.resume} className="link-underline" target="_blank" rel="noreferrer">
            View résumé ↗
          </a>
          <a href={site.links.github} className="link-underline" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a
            href="/writing"
            className="link-underline"
            onClick={(e) => {
              e.preventDefault()
              navigate('/writing')
            }}
          >
            Writing ↗
          </a>
        </div>
      </div>
    </section>
  )
}
