import * as caseData from '../../data/caseStudies'
import { projects } from '../../data/projects'
import { caseSlugs, fmtDate } from '../../data/nav'
import { Layout, Link, Section } from './Layout'
import type { Navigate } from './Layout'

// One template for every case study. Each case's data object has a
// slightly different shape, so every block below is optional and only
// renders when that case has it.
interface Step {
  num?: string
  title?: string
  name?: string
  body?: string
  note?: string
  footnote?: string
}

interface CaseData {
  date: string
  tags: string[]
  desc: string
  image?: { src: string; alt: string }
  role?: string
  proof?: { role?: string; safetyNote?: string }
  quote?: string
  specs?: { label: string; value: string }[]
  contributions?: string[]
  stages?: Step[]
  breakdown?: Step[]
  phases?: Step[]
  decisions?: Step[]
  whyPull?: string
  whyBody?: string
  evidence?: string[]
  limitations?: string[]
  nextSteps?: string[]
  codeUrl?: string
  devpostUrl?: string
  writeupUrl?: string
}

const cases = caseData as unknown as Record<string, CaseData>

function Steps({ steps }: { steps: Step[] }) {
  return (
    <ol className="sb-steps">
      {steps.map((s, i) => (
        <li key={s.num ?? i}>
          <p className="sb-steps__title">{s.title ?? s.name}</p>
          {(s.body ?? s.note) && <p>{s.body ?? s.note}</p>}
          {s.footnote && <p className="sb-muted">{s.footnote}</p>}
        </li>
      ))}
    </ol>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="sb-list-dash">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )
}

export function CasePage({ slug, navigate }: { slug: string; navigate: Navigate }) {
  const d = cases[slug]
  const i = caseSlugs.indexOf(slug)
  const project = projects.find((p) => p.caseStudy === `/projects/${slug}`)
  if (!d || !project) return null
  const next = caseSlugs[(i + 1) % caseSlugs.length]
  const nextTitle = projects.find((p) => p.caseStudy === `/projects/${next}`)?.title
  const role = d.proof?.role ?? d.role
  const links = [
    d.codeUrl && { label: 'Code', href: d.codeUrl },
    d.devpostUrl && { label: 'Devpost', href: d.devpostUrl },
    d.writeupUrl && { label: 'Write-up (PDF)', href: d.writeupUrl },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <Layout title={project.title} navigate={navigate} back={{ label: 'Projects', href: '/projects' }}>
      <p className="sb-meta">
        {fmtDate(d.date)} · {d.tags.join(', ')}
      </p>
      <p className="sb-lede">{d.desc}</p>
      {d.image && (
        <img className="sb-figure" src={d.image.src} alt={d.image.alt} loading="lazy" />
      )}
      {d.quote && <blockquote className="sb-quote">{d.quote}</blockquote>}

      {(role || d.specs?.length) && (
        <dl className="sb-dl sb-dl--specs">
          {role && (
            <div>
              <dt>Role</dt>
              <dd>{role}</dd>
            </div>
          )}
          {d.specs?.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {d.proof?.safetyNote && <p className="sb-note">{d.proof.safetyNote}</p>}

      {d.contributions && (
        <Section title="What I did">
          <List items={d.contributions} />
        </Section>
      )}
      {d.stages && (
        <Section title="How it works">
          <Steps steps={d.stages} />
        </Section>
      )}
      {d.breakdown && (
        <Section title="How it works">
          <Steps steps={d.breakdown} />
        </Section>
      )}
      {d.phases && (
        <Section title="Process">
          <Steps steps={d.phases} />
        </Section>
      )}
      {d.decisions && (
        <Section title="Decisions">
          <Steps steps={d.decisions} />
        </Section>
      )}
      {d.whyBody && (
        <Section title="Why it matters">
          {d.whyPull && <p className="sb-entry__head">{d.whyPull}</p>}
          <p>{d.whyBody}</p>
        </Section>
      )}
      {d.evidence && (
        <Section title="Evidence">
          <List items={d.evidence} />
        </Section>
      )}
      {d.limitations && (
        <Section title="Limitations">
          <List items={d.limitations} />
        </Section>
      )}
      {d.nextSteps && (
        <Section title="Next">
          <List items={d.nextSteps} />
        </Section>
      )}
      {links.length > 0 && (
        <Section title="Links">
          <ul className="sb-plain">
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} navigate={navigate} className="sb-link-u">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {nextTitle && (
        <p className="sb-next">
          <span className="sb-muted">Next project</span>
          <Link href={`/projects/${next}`} navigate={navigate} className="sb-link-u">
            {nextTitle}
          </Link>
        </p>
      )}
    </Layout>
  )
}
