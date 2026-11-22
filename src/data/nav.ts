import { site } from './site'
import { projects } from './projects'

// The sections listed on the home page and in every page's footer.
export interface NavItem {
  label: string
  href: string
  external?: boolean
}

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Résumé', href: site.links.resume, external: true },
  { label: 'Contact', href: '/contact' },
]

// 'sep_2026' -> 'Sep 2026'; 'fall_2026 — present' -> 'Fall 2026 – Present'
export function fmtDate(raw: string) {
  return raw
    .replace(/_/g, ' ')
    .replace(/\s*—\s*/g, ' – ')
    .replace(/\b[a-z]/g, (c) => c.toUpperCase())
}

// 'excascan', 'buzzbuddy', ... in the order the Projects page lists them.
export const caseSlugs = projects.flatMap((p) => (p.caseStudy ? [p.caseStudy.replace('/projects/', '')] : []))
