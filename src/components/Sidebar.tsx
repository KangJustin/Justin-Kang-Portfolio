import { site } from '../data/site'
import { experience } from '../data/experience'

function stripProtocol(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '')
}

export function Sidebar() {
  // "Experience & Involvement" only appears once real entries exist.
  const items = [
    { label: 'About', href: '#about', active: true },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    ...(experience.length > 0
      ? [{ label: 'Experience & Involvement', href: '#experience' }]
      : []),
    { label: 'Now', href: '#now' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar__inner">
        <div className="sidebar__wordmark">{site.wordmark}</div>

        <nav className="sidebar__nav">
          {items.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`sidebar__link${item.active ? ' sidebar__link--active' : ''}`}
            >
              {item.active && <span className="sidebar__bullet" />}
              <span className="sidebar__link-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sidebar__link-label">{item.label}</span>
            </a>
          ))}
          <div className="sidebar__nav-divider" />
          <a href={site.links.resume} className="sidebar__link" target="_blank" rel="noreferrer">
            <span className="sidebar__link-num">
              {String(items.length + 1).padStart(2, '0')}
            </span>
            <span className="sidebar__link-label">Resume</span>
          </a>
        </nav>

        <div className="sidebar__contact">
          <a href={`mailto:${site.email}`} className="sidebar__contact-link">
            <span className="sidebar__contact-glyph">✉</span>
            <span className="sidebar__contact-text">{site.email}</span>
          </a>
          <a
            href={site.links.linkedin}
            className="sidebar__contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sidebar__contact-glyph sidebar__contact-glyph--mono">in</span>
            <span className="sidebar__contact-text">{stripProtocol(site.links.linkedin)}</span>
          </a>
          <a
            href={site.links.github}
            className="sidebar__contact-link"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sidebar__contact-glyph">○</span>
            <span className="sidebar__contact-text">{stripProtocol(site.links.github)}</span>
          </a>
        </div>

        <div className="sidebar__copyright">
          © {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </aside>
  )
}
