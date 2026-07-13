import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'
import { navItems } from '../data/nav'
import type { Page } from '../App'

interface MobileHeaderProps {
  page: Page
  navigate: (to: string) => void
}

// Compact sticky header shown only at <=900px (see .mobile-header /
// .sidebar media queries in styles.css) -- replaces the desktop sidebar,
// which stays visible unchanged above that width.
export function MobileHeader({ page, navigate }: MobileHeaderProps) {
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  // <dialog>.showModal() gives us a native focus trap, Escape-to-close,
  // and a clickable ::backdrop for free -- no hand-rolled a11y needed.
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = 'hidden'
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    // Fires on Escape and on backdrop click (via the close() call below),
    // so state stays in sync however the dialog was dismissed.
    const onClose = () => {
      setOpen(false)
      document.body.style.overflow = ''
      buttonRef.current?.focus()
    }
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [])

  const closeAndNavigate = (to: string) => {
    dialogRef.current?.close()
    navigate(to)
  }

  return (
    <header className="mobile-header">
      <a
        href="/"
        className="mh-wordmark"
        onClick={(e) => {
          e.preventDefault()
          closeAndNavigate('/')
        }}
      >
        {site.wordmark}
      </a>
      <button
        ref={buttonRef}
        type="button"
        className="mh-menu-btn"
        aria-expanded={open}
        aria-controls="mobile-nav-dialog"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="mh-menu-icon" aria-hidden="true">
          {open ? '✕' : '☰'}
        </span>
      </button>

      <dialog
        id="mobile-nav-dialog"
        ref={dialogRef}
        className="mh-dialog"
        aria-label="Site navigation"
        onClick={(e) => {
          // Clicking the ::backdrop area (the <dialog> element itself,
          // outside the inner nav) closes it.
          if (e.target === dialogRef.current) dialogRef.current?.close()
        }}
      >
        <nav className="mh-menu">
          {navItems.map((item) => {
            const href = page === 'home' ? `#${item.id}` : `/#${item.id}`
            return (
              <a
                key={item.num}
                href={href}
                className="mh-menu-link"
                onClick={() => dialogRef.current?.close()}
              >
                <span className="mh-menu-num">{item.num}</span>
                {item.label}
              </a>
            )
          })}
          <div className="mh-menu-divider" />
          <a
            href="/writing"
            className="mh-menu-link"
            onClick={(e) => {
              e.preventDefault()
              closeAndNavigate('/writing')
            }}
          >
            Writing ↗
          </a>
        </nav>
      </dialog>
    </header>
  )
}
