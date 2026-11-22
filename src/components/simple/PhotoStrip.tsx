import { useRef } from 'react'
import type { CSSProperties } from 'react'

export interface Photo {
  src: string
  alt: string
  caption?: string
  // Which part of the photo to keep when it's cropped to the strip's
  // shape, as a CSS object-position (e.g. '85% 50%'). Default: center.
  focus?: string
  // Width-to-height ratio for this photo's card. Default 0.8 (4:5, tall).
  // Use the photo's real ratio (e.g. 4 / 3) to show a wide photo whole;
  // it stays the same height as the others, just wider.
  ratio?: number
  // Optional link shown under the caption, e.g. a video of the event.
  link?: { label: string; href: string }
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
          <li key={ph.src} style={ph.ratio ? ({ '--ratio': ph.ratio } as CSSProperties) : undefined}>
            <figure>
              <img
                src={ph.src}
                alt={ph.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
                style={ph.focus ? { objectPosition: ph.focus } : undefined}
              />
              {(ph.caption || ph.link) && (
                <figcaption>
                  {ph.caption}
                  {ph.link && (
                    <>
                      {ph.caption && <br />}
                      <a href={ph.link.href} target="_blank" rel="noreferrer" className="sb-link-u">
                        {ph.link.label}
                      </a>
                    </>
                  )}
                </figcaption>
              )}
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
