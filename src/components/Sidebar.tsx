import { site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'now', 'resume']

const navItems = [
  { num: '01', label: 'About', id: 'about' },
  { num: '02', label: 'Projects', id: 'projects' },
  { num: '03', label: 'Experience', id: 'experience' },
  { num: '04', label: 'Skills', id: 'skills' },
  { num: '05', label: 'Now', id: 'now' },
  { num: '06', label: 'Resume', id: 'resume' },
]

export function Sidebar() {
  const active = useScrollSpy(sectionIds)

  return (
    <nav className="sidebar">
      <div className="sb-top">
        <div className="sb-wordmark">{site.wordmark}</div>
        <div className="sb-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sb-link${active === item.id ? ' is-active' : ''}`}
            >
              <span className="sb-dot" />
              <span className="sb-num">{item.num}</span>
              <span className="sb-label">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="sb-bottom">
        <a href={`mailto:${site.email}`} className="sb-contact">
          {site.email}
        </a>
        <a href={site.links.linkedin} className="sb-contact" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
        <a href={site.links.github} className="sb-contact" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <div className="sb-copy">© {new Date().getFullYear()} {site.name}</div>
      </div>
    </nav>
  )
}
