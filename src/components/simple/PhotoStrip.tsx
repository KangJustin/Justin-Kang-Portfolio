import { useRef } from 'react'

export interface Photo {
  src: string
  alt: string
  caption?: string
}

// A sideways-scrolling row of photos. Swipe or trackpad-scroll it; the
// arrow buttons are for mouse users, and the row itself takes keyboard
// focus so arrow keys scroll it too.
export function PhotoStrip({ photos }: { photos: Photo[] }) {
  const strip = useRef<HTMLUListElement>(null)

  const step = (dir: 1 | -1) => {
    const el = strip.current
    const card = el?.querySelector('li')
    if (!el || !card) return
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + 16), behavior: 'smooth' })
  }

  return (
    <div className="sb-strip-wrap">
      <ul ref={strip} className="sb-strip" tabIndex={0} aria-label="Photos">
        {photos.map((ph, i) => (
          <li key={ph.src}>
            <figure>
              <img src={ph.src} alt={ph.alt} loading={i < 2 ? 'eager' : 'lazy'} />
              {ph.caption && <figcaption>{ph.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>
      <div className="sb-strip-nav">
        <button type="button" onClick={() => step(-1)} aria-label="Previous photo">
          ←
        </button>
        <button type="button" onClick={() => step(1)} aria-label="Next photo">
          →
        </button>
      </div>
    </div>
  )
}
