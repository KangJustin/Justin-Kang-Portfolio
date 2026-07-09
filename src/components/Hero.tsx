import { site } from '../data/site'

export function Hero() {
  const [first, last] = site.name.split(' ')
  return (
    <section id="about" className="hero">
      <div>
        <h1 className="hero__name" data-reveal>
          {first}
          <br />
          {last}
        </h1>
        <p className="hero__tagline" data-reveal>
          {site.tagline}
        </p>
        <p className="hero__body" data-reveal>
          {site.heroBody}
        </p>
        <div className="hero__ctas" data-reveal>
          <a href="#projects" className="btn-primary">
            View projects <span>→</span>
          </a>
          <a href={site.links.resume} className="link-cta" target="_blank" rel="noreferrer">
            Resume <span>↓</span>
          </a>
          <a href={site.links.github} className="link-cta" target="_blank" rel="noreferrer">
            GitHub <span>↗</span>
          </a>
        </div>
      </div>
      <div data-reveal>
        <div className="proof">
          <div className="proof__head">
            <span className="proof__title">Proof of Work</span>
            <span className="proof__dot" />
          </div>
          {site.proofOfWork.map((item) => (
            <div key={item.label} className="proof__row">
              <span className="proof__label">{item.label}</span>
              <span className="proof__count">{item.count ?? '—'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
