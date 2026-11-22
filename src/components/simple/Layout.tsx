import type { MouseEvent, ReactNode } from 'react'
import { navItems } from '../../data/nav'

export type Navigate = (to: string) => void

// Internal link that routes client-side; external links open in a new tab.
export function Link({
  href,
  navigate,
  external,
  className,
  children,
}: {
  href: string
  navigate: Navigate
  external?: boolean
  className?: string
  children: ReactNode
}) {
  if (external || /^(https?:|mailto:)/.test(href) || href.endsWith('.pdf')) {
    const newTab = !href.startsWith('mailto:')
    return (
      <a href={href} className={className} {...(newTab ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {children}
      </a>
    )
  }
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    navigate(href)
  }
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

// Every page except home: a back link at the top, a big title,
// one text column, and the section links again at the bottom.
export function Layout({
  title,
  current,
  navigate,
  back,
  children,
}: {
  title: string
  current?: string
  navigate: Navigate
  back?: { label: string; href: string }
  children: ReactNode
}) {
  return (
    <div className="sb-page">
      <div className="sb-wrap">
        <header className="sb-top">
          {/* Back link: home from a section page, the project list from a case study. */}
          <Link href={back?.href ?? '/'} navigate={navigate} className="sb-back">
            <span aria-hidden="true">← </span>
            {back?.label ?? 'Home'}
          </Link>
        </header>
        <main id="main-content">
          <h1 className="sb-title">{title}</h1>
          {children}
        </main>
        <footer className="sb-foot">
          <nav aria-label="Sections">
            <ul>
              {navItems.map((it) => (
                <li key={it.label}>
                  <Link
                    href={it.href}
                    navigate={navigate}
                    external={it.external}
                    className={it.href === current ? 'is-current' : undefined}
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="sb-section">
      <h2 className="sb-h2">{title}</h2>
      {children}
    </section>
  )
}
