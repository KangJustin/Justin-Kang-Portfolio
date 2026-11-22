import { Home } from './Home'
import { AboutPage, ContactPage, ExperiencePage, ProjectsPage, WritingPage } from './Pages'
import { CasePage } from './CasePage'
import { caseSlugs } from '../../data/nav'
import type { Navigate } from './Layout'

const pages = {
  '/about': AboutPage,
  '/experience': ExperiencePage,
  '/projects': ProjectsPage,
  '/contact': ContactPage,
  '/writing': WritingPage,
} as const

// Shared by the client (App.tsx) and the build-time prerender, so both
// always agree on what each path renders. Unknown paths show home.
export function Router({ path, navigate }: { path: string; navigate: Navigate }) {
  const clean = path.replace(/\/+$/, '') || '/'
  const Page = pages[clean as keyof typeof pages]
  if (Page) return <Page navigate={navigate} />
  const slug = clean.match(/^\/projects\/([a-z-]+)$/)?.[1]
  if (slug && caseSlugs.includes(slug)) return <CasePage slug={slug} navigate={navigate} />
  return <Home navigate={navigate} />
}
