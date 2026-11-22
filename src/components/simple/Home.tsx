import { site } from '../../data/site'
import { navItems } from '../../data/nav'
import { Link } from './Layout'
import type { Navigate } from './Layout'

// '/' — black page, name in small italics, one line on who I am, and a
// big serif list of sections. Layout follows "G — Simple black.pdf".
export function Home({ navigate }: { navigate: Navigate }) {
  return (
    <div className="sb-page">
      <main id="main-content" className="sb-wrap sb-home">
        <header className="sb-head">
          <h1 className="sb-name">{site.name}</h1>
          <p className="sb-line">{site.intro}</p>
        </header>
        <nav aria-label="Sections">
          <ul className="sb-menu">
            {navItems.map((it) => (
              <li key={it.label}>
                <Link href={it.href} navigate={navigate} external={it.external} className="sb-menu__link">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </div>
  )
}
