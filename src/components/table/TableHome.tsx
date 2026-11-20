import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, MouseEvent } from 'react'
import { site } from '../../data/site'
import { now } from '../../data/now'
import { projects } from '../../data/projects'
import { experience } from '../../data/experience'
import { prettyDates, sectionCards } from '../../data/table'
import { CardBack, CardFace, JkChip, JkFace, SimpleFace } from './PlayingCard'

// '/' is two screens: a full-viewport 3D carousel of the section cards
// (the intro), and the dealt table they land on. Entering runs in beats:
//   gather - the ring stops and collects into one face-down deck behind JK
//   deal   - cards are tossed one at a time to the measured position of
//            their twin on the home page, flipping face-up mid-air, while
//            the felt spreads out from the deck
//   home   - the ring is removed and the real, focusable cards take over
export type TablePhase = 'spin' | 'gather' | 'deal' | 'home'

// Ring slot -> index into sectionCards (-1 is the JK card at the front).
// Left-side slots hold the left-hand home cards so nothing crosses mid-flight.
const RING_SLOTS = [-1, 3, 4, 5, 0, 1, 2]
const STEP = 360 / RING_SLOTS.length
const RING_RADIUS = 300
const RING_Y = 0.46 // ring centre, as a fraction of viewport height
const CARD_W = 200 // ring card width before scaling; matches .tb-ring-card
const GATHER_MS = 650
const DEAL_STAGGER = 0.11 // s between cards leaving the deck
const TOSS_S = 0.72 // matches the tb-toss animation duration
const OPEN_MS = 520
// Desktop fan for the six home cards: rotation (deg) and drop (px).
const FAN = [
  { r: -12, y: 26 },
  { r: -7, y: 8 },
  { r: -2, y: 0 },
  { r: 2, y: 0 },
  { r: 7, y: 8 },
  { r: 12, y: 26 },
]

// The intro plays once per page load: a reload replays it, but coming
// back to '/' from a section page goes straight to the dealt table.
let introShownThisLoad = false

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

function ringScale() {
  if (typeof window === 'undefined') return 1
  return Math.min(1.1, Math.max(0.42, Math.min(window.innerWidth / 1600, window.innerHeight / 900)))
}

interface Pose {
  x: number
  y: number
  z: number
  rotY: number
  depth: number // translateZ after rotateY: pushes ring cards out to the radius
  rotZ: number
  s: number
}

// Every card transform uses the same function list so the browser can
// interpolate between any two of them (ring -> deck -> mid-air -> table).
function poseToTransform(p: Pose) {
  return `translate3d(${p.x}px, ${p.y}px, ${p.z}px) rotateY(${p.rotY}deg) translateZ(${p.depth}px) rotateZ(${p.rotZ}deg) scale(${p.s})`
}

function ringPose(slot: number): Pose {
  return { x: 0, y: 0, z: 0, rotY: +(slot * STEP).toFixed(2), depth: RING_RADIUS, rotZ: 0, s: slot === 0 ? 0.74 : 0.68 }
}

// Face-down in a loose stack at the ring centre; JK stays face-up on top.
function deckPose(slot: number): Pose {
  if (slot === 0) return { x: 0, y: 0, z: 14, rotY: 0, depth: 0, rotZ: 0, s: 0.74 }
  const jitter = [0, -3, 2, -1.5, 3.5, -2.5, 1][slot]
  return { x: 0, y: -slot * 1.5, z: slot * 1.2, rotY: 180, depth: 0, rotZ: jitter, s: 0.7 }
}

interface Toss {
  t0: string
  t1: string
  t2: string
  delay: number
}

interface TableHomeProps {
  navigate: (to: string) => void
  initialPhase?: TablePhase // the prerender passes 'spin'; the client decides
}

export function TableHome({ navigate, initialPhase }: TableHomeProps) {
  const [phase, setPhase] = useState<TablePhase>(() => {
    if (initialPhase) return initialPhase
    if (typeof window === 'undefined') return 'spin'
    return introShownThisLoad || prefersReducedMotion() ? 'home' : 'spin'
  })
  const [landed, setLanded] = useState(false)
  const [instant, setInstant] = useState(true)
  const [k, setK] = useState(1)
  const [tosses, setTosses] = useState<Toss[] | null>(null)
  const [swayTf, setSwayTf] = useState<string | null>(null)
  const [viaIntro, setViaIntro] = useState(false)
  const [opening, setOpening] = useState<{ index: number; rect: DOMRect } | null>(null)
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const chipRef = useRef<HTMLButtonElement | null>(null)
  const swayRef = useRef<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLDivElement | null>(null)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const onResize = () => setK(ringScale())
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const pending = timers.current
    return () => pending.forEach(clearTimeout)
  }, [])

  // Spin the ring in: paint it at -1440deg with transitions off, then
  // turn transitions on and land it on 0deg (same angle, four turns later).
  useEffect(() => {
    if (phase !== 'spin' || landed) return
    introShownThisLoad = true
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        setInstant(false)
        setLanded(true)
      })
    })
    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [phase, landed])

  // The intro is a fixed overlay; keep the page under it from scrolling.
  useEffect(() => {
    if (phase === 'home') return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [phase])

  // The intro's buttons unmount once the deal lands; hand keyboard focus to
  // the table so it doesn't fall back to the top of the document.
  useEffect(() => {
    if (phase === 'home' && viaIntro && document.activeElement === document.body) {
      homeRef.current?.focus({ preventScroll: true })
    }
  }, [phase, viaIntro])

  const later = (ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms))
  }

  const enter = () => {
    if (phase !== 'spin') return

    // Measure where every card has to land before anything moves.
    const ox = window.innerWidth / 2
    const oy = window.innerHeight * RING_Y
    const target = (el: HTMLElement, rotY: number, rotZ: number): Pose => {
      const rect = el.getBoundingClientRect()
      return {
        x: (rect.left + rect.width / 2 - ox) / k,
        y: (rect.top + rect.height / 2 - oy) / k,
        z: 0,
        rotY,
        depth: 0,
        rotZ,
        s: el.offsetWidth / (CARD_W * k),
      }
    }
    // Deal left to right, JK last (it becomes the chip in the header).
    const dealOrder = (slot: number) => (RING_SLOTS[slot] === -1 ? sectionCards.length : RING_SLOTS[slot])
    const plans = RING_SLOTS.map((section, slot): Toss => {
      const from = deckPose(slot)
      let to: Pose
      if (section === -1) {
        // spins flat like a chip; flipping it would show its mirror image while it fades
        to = chipRef.current ? target(chipRef.current, 0, 360) : ringPose(slot)
      } else {
        const el = cardRefs.current[section]
        const rotZ = el ? parseFloat(getComputedStyle(el).getPropertyValue('--r')) || 0 : 0
        // right-hand cards unwind back through 90deg, left-hand ones on through 270deg
        to = el ? target(el, slot <= RING_SLOTS.length / 2 ? 0 : 360, rotZ) : ringPose(slot)
      }
      // mid-air: partway there, lifted up and toward the viewer, edge-on
      const mid: Pose = {
        x: to.x * 0.55,
        y: to.y * 0.55 - 90,
        z: 160,
        rotY: (from.rotY + to.rotY) / 2,
        depth: 0,
        rotZ: to.rotZ * 0.5,
        s: Math.max(from.s, to.s) * 1.08,
      }
      return { t0: poseToTransform(from), t1: poseToTransform(mid), t2: poseToTransform(to), delay: dealOrder(slot) * DEAL_STAGGER }
    })

    // Freeze the idle sway where it is, then ease it back to straight.
    const sway = swayRef.current ? getComputedStyle(swayRef.current).transform : 'none'
    setSwayTf(sway === 'none' ? null : sway)
    requestAnimationFrame(() => requestAnimationFrame(() => setSwayTf('none')))

    setTosses(plans)
    setViaIntro(false)
    setPhase('gather')
    later(GATHER_MS, () => {
      setViaIntro(true)
      setPhase('deal')
    })
    const lastLand = sectionCards.length * DEAL_STAGGER + TOSS_S
    later(GATHER_MS + lastLand * 1000 + 120, () => setPhase('home'))
  }

  const replay = () => {
    window.scrollTo(0, 0)
    setTosses(null)
    setSwayTf(null)
    setViaIntro(false)
    setInstant(true)
    setLanded(false)
    setPhase('spin')
  }

  const openCard = (index: number) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
    e.preventDefault()
    const path = sectionCards[index].path
    if (prefersReducedMotion()) {
      navigate(path)
      return
    }
    setOpening({ index, rect: e.currentTarget.getBoundingClientRect() })
    later(OPEN_MS, () => navigate(path))
  }

  const current = experience[0]
  const latest = projects[0]
  const latestDate = latest.index.split('·')[1]?.trim().replace('_', ' ') ?? ''
  const teaching = now.blocks.find((b) => b.icon === 'bulb')

  const spinning = phase === 'spin'
  const ringTf = spinning ? `rotateX(-10deg) rotateY(${landed ? 0 : -1440}deg)` : 'rotateX(0deg) rotateY(0deg)'
  const ringMotion = instant ? ' no-anim' : spinning ? ' is-spinning' : ' is-gathering'

  return (
    <div className={`tb tb-root is-${phase}${viaIntro ? ' via-intro' : ''}`}>
      {/* ---------- the dealt table (always rendered so the deal can measure it) ---------- */}
      <div className="tb-felt">
        <div ref={homeRef} id="main-content" className="tb-home" tabIndex={-1} aria-hidden={phase !== 'home'} inert={phase !== 'home'}>
          <header className="tb-home__header">
            <div className="tb-home__id">
              <h1 className="tb-home__name">{site.name}</h1>
              <p className="tb-home__intro">{site.tagline}</p>
            </div>
            <div className="tb-home__meta">
              <a href={site.links.github} className="tb-toplink" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={site.links.linkedin} className="tb-toplink" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <span className="tb-status">
                <span className="tb-status__dot" />
                open to 2027 roles
              </span>
              <button ref={chipRef} type="button" className="tb-chip-btn" onClick={replay} aria-label="Replay the intro">
                <JkChip />
              </button>
            </div>
          </header>

          <p className="tb-home__hint">PICK A CARD · EACH ONE OPENS A PAGE</p>

          <nav className="tb-hand" aria-label="Sections">
            {sectionCards.map((card, i) => (
              <a
                key={card.id}
                ref={(el) => {
                  cardRefs.current[i] = el
                }}
                href={card.path}
                className="tb-card"
                style={{ '--r': `${FAN[i].r}deg`, '--y': `${FAN[i].y}px`, '--hl': card.accent } as CSSProperties}
                onClick={openCard(i)}
              >
                <CardFace card={card} withPeek />
              </a>
            ))}
          </nav>

          <div className="tb-panels">
            <div className="tb-panel">
              <span className="tb-panel__k">♥ IN THIS HAND</span>
              <span className="tb-panel__v">
                {current.role} @ {current.org}
              </span>
              <span className="tb-panel__m">
                {prettyDates(current.dates)} · {current.loc}
              </span>
            </div>
            {latest.caseStudy && (
              <a
                href={latest.caseStudy}
                className="tb-panel"
                onClick={(e) => {
                  e.preventDefault()
                  navigate(latest.caseStudy!)
                }}
              >
                <span className="tb-panel__k">♦ LATEST HAND</span>
                <span className="tb-panel__v">{latest.title}</span>
                <span className="tb-panel__m">
                  {latestDate} · {latest.tags[0].toLowerCase()} · case study →
                </span>
              </a>
            )}
            {teaching && (
              <div className="tb-panel">
                <span className="tb-panel__k">♣ TEACHING MYSELF</span>
                <span className="tb-panel__v">{teaching.body}</span>
              </div>
            )}
          </div>

          <footer className="tb-rail">
            <span className="tb-rail__k">TABLE STAKES</span>
            <span className="tb-rail__chips" aria-hidden="true">
              <span style={{ background: '#d4af37' }} />
              <span style={{ background: '#c0392b' }} />
              <span style={{ background: '#2563eb' }} />
              <span style={{ background: '#16a34a' }} />
            </span>
            <a href={`mailto:${site.email}`} className="tb-rail__mail">
              {site.email}
            </a>
            <span className="tb-rail__url">{site.wordmark}</span>
          </footer>
        </div>
      </div>

      {/* ---------- the intro carousel ---------- */}
      {phase !== 'home' && (
        <div className="tb-intro" style={{ '--k': k } as CSSProperties}>
          <div className={`tb-intro__dress${spinning ? '' : ' is-cleared'}${phase === 'deal' ? ' is-reveal' : ''}`} aria-hidden="true">
            <div className="tb-intro__sweep" />
            <div className="tb-intro__vignette" />
            <div className="tb-intro__rail" />
            <div className="tb-intro__shadow" />
          </div>

          <div className="tb-intro__stage" aria-hidden="true">
            <div className="tb-ring-anchor" style={{ transform: `scale(${k})` }}>
              <div
                ref={swayRef}
                className={`tb-sway${spinning && !instant ? '' : ' is-still'}`}
                style={swayTf ? { transform: swayTf } : undefined}
              >
                <div className={`tb-ring${ringMotion}`} style={{ transform: ringTf }}>
                  {RING_SLOTS.map((section, slot) => {
                    const card = section >= 0 ? sectionCards[section] : null
                    const toss = phase === 'deal' && tosses ? tosses[slot] : null
                    const cls = [
                      'tb-ring-card',
                      instant ? 'no-anim' : '',
                      spinning ? 'is-ringed' : 'is-gathered',
                      spinning && !card ? 'is-front' : '',
                      toss ? (card ? 'is-tossing' : 'is-tossing is-jk-out') : '',
                    ]
                      .filter(Boolean)
                      .join(' ')
                    const style = toss
                      ? ({ '--t0': toss.t0, '--t1': toss.t1, '--t2': toss.t2, '--delay': `${toss.delay}s` } as CSSProperties)
                      : {
                          transform: poseToTransform(spinning ? ringPose(slot) : deckPose(slot)),
                          transitionDelay: spinning ? '0s' : `${slot * 0.03}s`,
                        }
                    return (
                      <button key={slot} type="button" tabIndex={-1} className={cls} style={style} onClick={enter}>
                        {card ? (
                          <>
                            <CardFace card={card} />
                            <SimpleFace card={card} />
                          </>
                        ) : (
                          <JkFace />
                        )}
                        <CardBack />
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className={`tb-intro__copy${spinning ? '' : ' is-gone'}`}>
            <button type="button" className="tb-skip" onClick={enter}>
              Skip intro →
            </button>
            <div className="tb-intro__top">
              <p className="tb-intro__eyebrow">SHUFFLING THE SECTIONS…</p>
              <p className="tb-intro__name">{site.name}</p>
            </div>
            <div className="tb-intro__bottom">
              <button type="button" className="tb-cta" onClick={enter}>
                Enter the table <span aria-hidden="true">→</span>
              </button>
              <span className="tb-intro__hint">or pick any card</span>
            </div>
          </div>
        </div>
      )}

      {/* ---------- a card opening into its page ---------- */}
      {opening && (
        <div
          className="tb-opening"
          aria-hidden="true"
          style={
            {
              '--ox': `${opening.rect.left}px`,
              '--oy': `${opening.rect.top}px`,
              '--ow': `${opening.rect.width}px`,
              '--oh': `${opening.rect.height}px`,
            } as CSSProperties
          }
        >
          <span className="tb-opening__suit" style={{ color: sectionCards[opening.index].accent }}>
            {sectionCards[opening.index].suit}
          </span>
        </div>
      )}
    </div>
  )
}
