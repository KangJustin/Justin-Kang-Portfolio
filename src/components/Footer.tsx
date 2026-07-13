import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-links">
        <a href={`mailto:${site.email}`} className="site-footer-link">
          {site.email}
        </a>
        <a href={site.links.resume} className="site-footer-link" target="_blank" rel="noreferrer">
          View résumé ↗
        </a>
        <a href={site.links.linkedin} className="site-footer-link" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={site.links.github} className="site-footer-link" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
      <div className="site-footer-copy">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  )
}
