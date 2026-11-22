import { projects } from './data/projects'
import { writingPage } from './data/writing'

export const SITE_URL = 'https://justin-kang.vercel.app'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const DEFAULT_TITLE = 'Justin Kang — Robotics Test & AI Engineering'
export const DEFAULT_DESCRIPTION =
  'Justin Kang — UC Berkeley Data Science student testing and building real robots: robotics QA at Ambi Robotics, robot learning research at Berkeley AI Research, and an RC excavator under learned control.'

const CASE_STUDY_TITLES: Record<string, string> = {
  excascan: 'EXCA-Scan Case Study — RC Excavator Under Learned Control | Justin Kang',
  buzzbuddy: 'BuzzBuddy Case Study — Agentic iOS Prototype | Justin Kang',
  urbanpilot: 'UrbanPilot Case Study — Public-Data Planning Tool | Justin Kang',
  flux: 'Flux Case Study — Voice-First Workflow Automation | Justin Kang',
  skyline: 'Skyline Transport Case Study — Cleanroom Material Handling | Justin Kang',
  blastradius: 'BlastRadius Case Study — Agentic Code-Risk Analysis | Justin Kang',
  exoplanet: 'Exoplanet Transit Case Study — Kepler Photometry Pipeline | Justin Kang',
}

// The section pages linked from the home page.
const SECTION_META: Record<string, { title: string; description: string }> = {
  '/about': {
    title: 'About | Justin Kang',
    description:
      'Justin Kang studies Data Science and Industrial Engineering at UC Berkeley, tests AI pick-and-place robots at Ambi Robotics, and builds agentic tools at hackathons.',
  },
  '/experience': {
    title: 'Experience | Justin Kang',
    description:
      'Robotics QA at Ambi Robotics, undergraduate research at Berkeley AI Research (RAIL), and football operations with the Los Angeles Rams.',
  },
  '/projects': {
    title: 'Projects | Justin Kang',
    description:
      'Seven projects across robotics hardware, agentic AI, and CAD: EXCA-Scan, BuzzBuddy, BlastRadius, UrbanPilot, Flux, Exoplanet Transit, and Skyline Transport.',
  },
  '/contact': {
    title: 'Contact | Justin Kang',
    description: 'Reach Justin Kang about robotics test, validation, and AI roles: email, LinkedIn, and GitHub.',
  },
}

export interface RouteMeta {
  path: string
  title: string
  description: string
}

// Every public route that needs its own prerendered HTML + metadata.
// Kept as a plain list (not derived by crawling the router) so the
// prerender script and sitemap generator share one source of truth.
export const ALL_ROUTES: string[] = [
  '/',
  ...Object.keys(SECTION_META),
  '/writing',
  ...projects.filter((p): p is typeof p & { caseStudy: string } => Boolean(p.caseStudy)).map((p) => p.caseStudy),
]

export function metaForPath(rawPath: string): RouteMeta {
  const clean = rawPath.replace(/\/+$/, '') || '/'

  const section = SECTION_META[clean]
  if (section) return { path: clean, ...section }

  if (clean === '/writing') {
    return { path: '/writing', title: 'Research & Essays | Justin Kang', description: writingPage.subtitle }
  }

  const slug = clean.match(/^\/projects\/([a-z-]+)$/)?.[1]
  const project = slug ? projects.find((p) => p.caseStudy === `/projects/${slug}`) : undefined
  if (project && slug) {
    return {
      path: project.caseStudy!,
      title: CASE_STUDY_TITLES[slug] ?? `${project.title} Case Study | Justin Kang`,
      description: project.desc,
    }
  }

  return { path: '/', title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION }
}
