import { site } from '../../data/site'
import { now } from '../../data/now'
import { experience } from '../../data/experience'
import { projects } from '../../data/projects'
import { skillGroups } from '../../data/skills'
import { aboutBio, education, photos } from '../../data/about'
import { PhotoStrip } from './PhotoStrip'
import { writingItems, writingPage } from '../../data/writing'
import { fmtDate } from '../../data/nav'
import { Layout, Link, Section } from './Layout'
import type { Navigate } from './Layout'

// 'languages/' -> 'Languages', 'robotics_test/' -> 'Robotics test'
const groupName = (t: string) => {
  const s = t.replace(/\/$/, '').replace(/_/g, ' ')
  return (s.charAt(0).toUpperCase() + s.slice(1)).replace(/^Ai\b/, 'AI')
}

// '[ 001 ] · sep_2026' -> 'Sep 2026'
const projectDate = (index: string) => fmtDate((index.split('·')[1] ?? '').trim())

export function AboutPage({ navigate }: { navigate: Navigate }) {
  return (
    <Layout title="About" current="/about" navigate={navigate}>
      <PhotoStrip photos={[{ src: '/justin-kang.jpg', alt: `Portrait of ${site.name}` }, ...photos]} />
      <p className="sb-lede">{aboutBio}</p>

      <Section title="Now">
        <dl className="sb-dl">
          {now.blocks.map((b) => (
            <div key={b.label}>
              <dt>{b.label.charAt(0).toUpperCase() + b.label.slice(1)}</dt>
              <dd>{b.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <p className="sb-entry__head">{education.school}</p>
        <p className="sb-muted">{education.details.join(' · ')}</p>
      </Section>

      <Section title="Skills">
        <dl className="sb-dl">
          {skillGroups.map((g) => (
            <div key={g.title}>
              <dt>{groupName(g.title)}</dt>
              <dd>{g.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </Layout>
  )
}

export function ExperiencePage({ navigate }: { navigate: Navigate }) {
  return (
    <Layout title="Experience" current="/experience" navigate={navigate}>
      <ol className="sb-entries">
        {experience.map((e) => (
          <li key={e.org} className="sb-entry">
            <p className="sb-meta">
              {fmtDate(e.dates)} · {e.loc.replace(/\b[a-z]/g, (c) => c.toUpperCase()).replace(/, Ca$/, ', CA')}
            </p>
            <h2 className="sb-entry__head">{e.org}</h2>
            <p className="sb-entry__role">{e.role}</p>
            <p>{e.summary}</p>
            {e.image && (
              <img className="sb-figure" src={e.image.src} alt={e.image.alt} loading="lazy" />
            )}
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export function ProjectsPage({ navigate }: { navigate: Navigate }) {
  return (
    <Layout title="Projects" current="/projects" navigate={navigate}>
      <ol className="sb-entries">
        {projects.map((p) => (
          <li key={p.title} className="sb-entry">
            <p className="sb-meta">
              {projectDate(p.index)} · {p.tags.slice(0, 3).join(', ')}
            </p>
            <h2 className="sb-entry__head">
              {p.caseStudy ? (
                <Link href={p.caseStudy} navigate={navigate} className="sb-link-u">
                  {p.title}
                </Link>
              ) : (
                p.title
              )}
            </h2>
            <p>{p.desc}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export function ContactPage({ navigate }: { navigate: Navigate }) {
  const links = [
    { label: 'LinkedIn', href: site.links.linkedin },
    { label: 'GitHub', href: site.links.github },
    { label: 'Résumé', href: site.links.resume },
  ]
  return (
    <Layout title="Contact" current="/contact" navigate={navigate}>
      <p className="sb-lede">
        Hiring for robotics test, validation, or AI roles, or building something at the edge of software and hardware? I'd like to hear
        about it.
      </p>
      <p className="sb-big">
        <a href={`mailto:${site.email}`} className="sb-link-u">
          {site.email}
        </a>
      </p>
      <ul className="sb-plain">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} navigate={navigate} className="sb-link-u">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export function WritingPage({ navigate }: { navigate: Navigate }) {
  return (
    <Layout title="Writing" navigate={navigate}>
      <p className="sb-lede">{writingPage.subtitle}</p>
      <ol className="sb-entries">
        {writingItems.map((w) => (
          <li key={w.index} className="sb-entry">
            <p className="sb-meta">
              {fmtDate(w.date)} · {w.category.charAt(0).toUpperCase() + w.category.slice(1)}
            </p>
            <h2 className="sb-entry__head">
              {w.href ? (
                <Link href={w.href} navigate={navigate} className="sb-link-u">
                  {w.title}
                </Link>
              ) : (
                w.title
              )}
            </h2>
            <p>{w.summary}</p>
          </li>
        ))}
      </ol>
    </Layout>
  )
}
