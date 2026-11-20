import type { CSSProperties } from 'react'
import { isRedSuit } from '../../data/table'
import type { SectionCard } from '../../data/table'

// Corner index: rank stacked over suit, as on a real card.
function Index({ rank, suit, flip = false }: { rank: string; suit: string; flip?: boolean }) {
  return (
    <span className={`tb-idx${flip ? ' tb-idx--flip' : ''}`} aria-hidden="true">
      {rank}
      <br />
      {suit}
    </span>
  )
}

// The detailed face shown on the dealt home page.
export function CardFace({ card, withPeek = false }: { card: SectionCard; withPeek?: boolean }) {
  return (
    <span className="tb-face" style={{ color: isRedSuit(card.suit) ? '#c0392b' : '#1b1b1b' }}>
      <Index rank={card.rank} suit={card.suit} />
      <span className="tb-face__ghost" aria-hidden="true">
        {card.suit}
      </span>
      <span className="tb-face__title">{card.title}</span>
      <span className="tb-face__sub" style={{ color: card.subColor }}>
        {card.sub}
      </span>
      <Index rank={card.rank} suit={card.suit} flip />
      {withPeek && (
        <span className="tb-face__peek">
          <span className="tb-face__peek-k">INSIDE</span>
          <span className="tb-face__peek-v">{card.peek}</span>
          <span className="tb-face__peek-go">open {card.path} →</span>
        </span>
      )}
    </span>
  )
}

// The simpler face used while the card spins in the intro ring: one big
// suit and a label, readable at a distance and at an angle.
export function SimpleFace({ card }: { card: SectionCard }) {
  return (
    <span className="tb-simple" style={{ color: isRedSuit(card.suit) ? '#c0392b' : '#1b1b1b' }} aria-hidden="true">
      <Index rank={card.rank} suit={card.suit} />
      <span className="tb-simple__suit">{card.suit}</span>
      <span className="tb-simple__label">{card.title.toUpperCase()}</span>
      <Index rank={card.rank} suit={card.suit} flip />
    </span>
  )
}

export function JkFace() {
  return (
    <span className="tb-face tb-face--jk" aria-hidden="true">
      <span className="tb-jk__mono">JK</span>
      <span className="tb-jk__suits">♠♥♦♣</span>
    </span>
  )
}

export function CardBack({ style }: { style?: CSSProperties }) {
  return <span className="tb-back" style={style} aria-hidden="true" />
}

export function JkChip({ size = 64 }: { size?: number }) {
  return (
    <svg className="tb-chip" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="29" fill="#1b1b1b" stroke="#d4af37" strokeWidth="2" />
      <circle cx="32" cy="32" r="29" fill="none" stroke="#f8f5ec" strokeWidth="3" strokeDasharray="6 6" />
      <circle cx="32" cy="32" r="16" fill="none" stroke="#d4af37" strokeWidth="2" />
      <text x="32" y="38" textAnchor="middle" fontFamily="'Playfair Display', serif" fontSize="16" fill="#d4af37" fontWeight="900">
        JK
      </text>
    </svg>
  )
}

export function ChipStack({ count, color }: { count: number; color: string }) {
  return (
    <span className="tb-stack" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="tb-stack__chip" style={{ background: color, borderColor: color === '#d4af37' ? '#1b1b1b' : '#fbf8ef' }} />
      ))}
    </span>
  )
}
