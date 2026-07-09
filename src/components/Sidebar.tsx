import { site } from '../data/site'
import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Page } from '../App'

const sectionIds = ['about', 'projects', 'experience', 'skills', 'resume']

type NavItem =
  | { num: string; label: string; kind: 'section'; id: string }
  | { num: string; label: string; kind: 'route'; to: string }

const navItems: NavItem[] = [
  { num: '01', label: 'About', kind: 'section', id: 'about' },
  { num: '02', label: 'Projects', kind: 'section', id: 'projects' },
  { num: '03', label: 'Writing', kind: 'route', to: '/writing' },
  { num: '04', label: 'Experience', kind: 'section', id: 'experience' },
  { num: '05', label: 'Skills', kind: 'section', id: 'skills' },
  { num: '06', label: 'Resume', kind: 'section', id: 'resume' },
]

interface SidebarProps {
  page: Page
  navigate: (to: string) => void
}

export function Sidebar({ page, navigate }: SidebarProps) {
  const spyActive = useScrollSpy(sectionIds)

  const isActive = (item: NavItem) =>
    item.kind === 'route' ? page === 'writing' : page === 'home' && spyActive === item.id

  const hrefFor = (item: NavItem) =>
    item.kind === 'route' ? item.to : page === 'home' ? `#${item.id}` : `/#${item.id}`

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
              href={hrefFor(item)}
              className={`sb-link${isActive(item) ? ' is-active' : ''}`}
              onClick={
                item.kind === 'route'
                  ? (e) => {
                      e.preventDefault()
                      navigate(item.to)
                    }
                  : undefined
              }
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
