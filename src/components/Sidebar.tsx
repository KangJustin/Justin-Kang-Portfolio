import { site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Page } from '../App'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'now', 'resume']

const navItems = [
  { num: '01', label: 'About', id: 'about' },
  { num: '02', label: 'Projects', id: 'projects' },
  { num: '03', label: 'Experience', id: 'experience' },
  { num: '04', label: 'Skills', id: 'skills' },
  { num: '05', label: 'Now', id: 'now' },
  { num: '06', label: 'Resume', id: 'resume' },
]

interface SidebarProps {
  page: Page
  navigate: (to: string) => void
}

export function Sidebar({ page, navigate }: SidebarProps) {
  const spyActive = useScrollSpy(sectionIds)

  return (
    <nav className="sidebar">
      <div className="sb-top">
        <a
          href="/"
          className="sb-wordmark"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
        >
          {site.wordmark}
        </a>
        <div className="sb-nav">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={page === 'home' ? `#${item.id}` : `/#${item.id}`}
              className={`sb-link${
                page === 'home' && spyActive === item.id ? ' is-active' : ''
              }`}
            >
              <span className="sb-dot" />
              <span className="sb-num">{item.num}</span>
              <span className="sb-label">{item.label}</span>
            </a>
          ))}
          <div className="sb-nav-divider" />
          <a
            href="/writing"
            className={`sb-link sb-link--aux${page === 'writing' ? ' is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              navigate('/writing')
            }}
          >
            <span className="sb-dot" />
            <span className="sb-label">Writing ↗</span>
          </a>
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
