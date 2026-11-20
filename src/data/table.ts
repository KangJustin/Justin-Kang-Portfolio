// Content and card metadata for the poker-table site: the carousel
// intro, the dealt home page, and the six section pages each card opens.
// Section copy is pulled from the existing data files where it exists
// (experience.ts, projects.ts, skills.ts, now.ts) so the two layouts
// can't drift apart.

export type Suit = '♠' | '♥' | '♦' | '♣'

export interface SectionCard {
  id: 'about' | 'experience' | 'projects' | 'leadership' | 'resume' | 'contact'
  path: string
  rank: string
  suit: Suit
  title: string
  sub: string // short label under the title, e.g. "07 CASE FILES →"
  peek: string // "what's inside" text revealed on hover
  accent: string // hover outline + sub-label color family
  subColor: string // darker variant that passes contrast on the cream card
}

export const sectionCards: SectionCard[] = [
  {
    id: 'about',
    path: '/about',
    rank: 'A',
    suit: '♠',
    title: 'About',
    sub: 'MEET THE PLAYER →',
    peek: 'Bio, the player profile, what I’m doing now, and my stack',
    accent: '#d4af37',
    subColor: '#8a6d12',
  },
  {
    id: 'experience',
    path: '/experience',
    rank: 'K',
    suit: '♥',
    title: 'Experience',
    sub: '3 ROLES, AMBI ROBOTICS →',
    peek: 'Ambi Robotics (now), Berkeley AI Research, LA Rams',
    accent: '#c0392b',
    subColor: '#c0392b',
  },
  {
    id: 'projects',
    path: '/projects',
    rank: 'Q',
    suit: '♦',
    title: 'Projects',
    sub: '07 CASE FILES →',
    peek: 'EXCA-Scan, BuzzBuddy, BlastRadius, UrbanPilot, Skyline + 2 more',
    accent: '#2563eb',
    subColor: '#1d4ed8',
  },
  {
    id: 'leadership',
    path: '/leadership',
    rank: 'J',
    suit: '♣',
    title: 'Leadership',
    sub: 'MENTORING · SUMMITS →',
    peek: 'Hispanic Scholarship Fund mentoring and Young Leaders Summits',
    accent: '#16a34a',
    subColor: '#15803d',
  },
  {
    id: 'resume',
    path: '/resume',
    rank: '10',
    suit: '♠',
    title: 'Résumé',
    sub: 'ONE-PAGE PDF →',
    peek: 'View or download, current as of Fall 2026',
    accent: '#d4af37',
    subColor: '#8a6d12',
  },
  {
    id: 'contact',
    path: '/contact',
    rank: '9',
    suit: '♥',
    title: 'Contact',
    sub: 'OPEN A CHANNEL →',
    peek: 'Email, LinkedIn, GitHub, or a quick message',
    accent: '#c0392b',
    subColor: '#c0392b',
  },
]

export const isRedSuit = (suit: Suit) => suit === '♥' || suit === '♦'

// 'fall_2026 — present' -> 'fall 2026 — now'
export const prettyDates = (dates: string) => dates.replace(/_/g, ' ').replace('present', 'now')

export const SECTION_PATHS = sectionCards.map((c) => c.path)

// Rank + suit shown on each project's card, keyed by project title.
export const projectRanks: Record<string, { rank: string; suit: Suit }> = {
  'EXCA-Scan': { rank: '9', suit: '♣' },
  BuzzBuddy: { rank: 'A', suit: '♥' },
  'Skyline Transport': { rank: 'J', suit: '♦' },
  BlastRadius: { rank: '7', suit: '♥' },
  UrbanPilot: { rank: '4', suit: '♠' },
  Flux: { rank: '5', suit: '♣' },
  'Exoplanet Transit': { rank: '8', suit: '♠' },
}

// About page: the "player profile" rows.
export const playerProfile = [
  { label: 'TABLE', value: 'UC Berkeley' },
  { label: 'GAME', value: 'Data Science + IEOR' },
  { label: 'CASHES OUT', value: 'Expected May 2028' },
  { label: 'SEEKING', value: '2027 robotics test & AI internships' },
]

export const aboutBio =
  "I like problems where software has to survive contact with real hardware. Lately, that's meant testing pick-and-place robotics systems at Ambi Robotics, an award-winning agentic iOS safety app, and a multi-agent urban planning system built on six public datasets."

export const aboutChips = ['Python', 'Policy eval', 'Grafana', 'ESP32', 'FastAPI', 'SwiftUI', 'Claude · Gemini']

// Experience page: which roles appear, and the hole cards dealt to each.
export const experienceHands: Record<string, { cards: [string, string]; tags?: string[] }> = {
  'Ambi Robotics': { cards: ['A♠', 'K♠'], tags: ['Grafana', 'Jira · Asana', 'System logs'] },
  'Berkeley AI Research — Robotic AI & Learning Lab': { cards: ['Q♥', 'Q♦'] },
  'Los Angeles Rams (NFL)': { cards: ['J♣', '10♣'] },
}

// Leadership page.
export interface LeadershipEntry {
  org: string // matches Experience.org in experience.ts
  rank: string
  suit: Suit
  role: string
  summary: string
  callout: { label: string; text: string; dark: boolean }
  stats: { value: string; label: string; chips: number; color: string }[]
}

export const leadership: LeadershipEntry[] = [
  {
    org: 'Hispanic Scholarship Fund',
    rank: 'J',
    suit: '♣',
    role: 'YLS Scholar Squad Leader · College Consultant',
    summary:
      'Mentored high school seniors one-on-one across two application cycles; facilitated the 2024 USC and 2025 Princeton Young Leaders Summits.',
    callout: {
      label: 'WHERE MENTEES LANDED',
      text: 'Yale, Columbia, Brown, Tufts, USC, WashU, and UC Berkeley, including a Gates Scholar.',
      dark: false,
    },
    stats: [
      { value: '15+', label: 'MENTEES', chips: 4, color: '#c0392b' },
      { value: '2', label: 'NATIONAL SUMMITS', chips: 2, color: '#0b5a40' },
      { value: '1', label: 'GATES SCHOLAR', chips: 1, color: '#d4af37' },
    ],
  },
]

// Résumé page quick facts.
export const resumeFacts = [
  { value: '7', label: 'PROJECTS' },
  { value: '2', label: 'PODIUMS' },
  { value: '2028', label: 'EXPECTED GRAD' },
]

export const RESUME_UPDATED = 'oct_2026'
