import { site } from '../data/site'
import { navItems } from '../data/nav'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Page } from '../App'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'now']

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
          {navItems.map((item) => {
            const active = page === 'home' && spyActive === item.id
            return (
              <a
                key={item.num}
                href={page === 'home' ? `#${item.id}` : `/#${item.id}`}
                className={`sb-link${active ? ' is-active' : ''}`}
                aria-current={active ? 'true' : undefined}
              >
                <span className="sb-dot" />
                <span className="sb-num">{item.num}</span>
                <span className="sb-label">{item.label}</span>
              </a>
            )
          })}
          <div className="sb-nav-divider" />
          <a
            href="/writing"
            className={`sb-link sb-link--aux${page === 'writing' ? ' is-active' : ''}`}
            aria-current={page === 'writing' ? 'page' : undefined}
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
          justin&#8209;kang
          <wbr />
          @berkeley.edu
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
