import { site } from '../data/site'

export function Hero() {
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
        <div className="hero__ctas">
          <a href="#projects" className="btn-dark">
            View projects <span>→</span>
          </a>
          <a href={site.links.resume} className="link-underline" target="_blank" rel="noreferrer">
            Resume ↓
          </a>
          <a href={site.links.github} className="link-underline" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  )
}
