import { projects } from './data/projects'
import { writingPage } from './data/writing'

export const SITE_URL = 'https://justin-kang.vercel.app'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const DEFAULT_TITLE = 'Justin Kang — Software & ML Engineering'
export const DEFAULT_DESCRIPTION =
  'Justin Kang — UC Berkeley Data Science student building full-stack AI tools, data products, and practical software systems.'

const CASE_STUDY_TITLES: Record<string, string> = {
  buzzbuddy: 'BuzzBuddy Case Study — Agentic iOS Prototype | Justin Kang',
  urbanpilot: 'UrbanPilot Case Study — Public-Data Planning Tool | Justin Kang',
  flux: 'Flux Case Study — Voice-First Workflow Automation | Justin Kang',
  skyline: 'Skyline Transport Case Study — Cleanroom Material Handling | Justin Kang',
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
  '/writing',
  ...projects.filter((p): p is typeof p & { caseStudy: string } => Boolean(p.caseStudy)).map((p) => p.caseStudy),
]

export function metaForPath(rawPath: string): RouteMeta {
  const clean = rawPath.replace(/\/+$/, '') || '/'

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
