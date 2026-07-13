import type { ReactNode } from 'react'
import type { CsSpec, CsStage } from '../../data/caseStudies'

export function CsLabelRow({
  index,
  date,
  version,
}: {
  index: string
  date: string
  version: string
}) {
  return (
    <div className="cs-label">
      <span className="cs-label-idx">{index}</span>
      <span>·</span>
      <span>{date}</span>
      <span className="cs-label-leader" />
      <span>{version}</span>
    </div>
  )
}

export function CsTags({ tags }: { tags: string[] }) {
  return (
    <ul className="cs-tags">
      {tags.map((tag) => (
        <li key={tag} className="cs-tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export function CsCta({ label, href }: { label: string; href: string }) {
  const external = href.startsWith('http')
  return (
    <div className="cs-cta-row">
      <a
        href={href}
        className="cs-cta"
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {label} <span className="cs-cta-arrow">↗</span>
      </a>
    </div>
  )
}

export function CsViewport({
  title,
  suffix,
  dark,
  children,
}: {
  title: string
  suffix?: ReactNode
  dark?: boolean
  children: ReactNode
}) {
  return (
    <figure className="cs-viewport">
      <figcaption className={`cs-viewbar${dark ? ' cs-viewbar--dark' : ''}`}>
        <span className="cs-viewbar-glyph" />
        <span className="cs-viewbar-title">{title}</span>
        <span className="cs-viewbar-suffix">{suffix}</span>
      </figcaption>
      {children}
    </figure>
  )
}

export function CsSectionHead({ title, note }: { title: string; note?: string }) {
  return (
    <div className="cs-sechead">
      <h2>{title}</h2>
      <span className="cs-sechead-rule" />
      {note && <span className="cs-sechead-note">{note}</span>}
    </div>
  )
}

export function CsSpecStrip({
  specs,
  size,
}: {
  specs: CsSpec[]
  size?: 'sm' | 'lg'
}) {
  return (
    <section aria-label="Key specifications" className="cs-specs">
      {specs.map((spec) => (
        <div key={spec.label} className="cs-spec">
          <span className="cs-spec-label">{spec.label}</span>
          <span className={`cs-spec-value${size ? ` cs-spec-value--${size}` : ''}`}>
            {spec.value}
          </span>
        </div>
      ))}
    </section>
  )
}

export function CsStageCards({ stages }: { stages: CsStage[] }) {
  return (
    <div className="cs-cards">
      {stages.map((stage) => (
        <article key={stage.num} className="cs-card">
          <div className="cs-card-top">
            <span className="cs-card-num">{stage.num}</span>
            <span className="cs-card-tag">{stage.tag}</span>
          </div>
          <h3>{stage.title}</h3>
          <p>{stage.body}</p>
        </article>
      ))}
    </div>
  )
}

// Verified project metadata + safety framing, rendered immediately below
// title/tags. Every field is optional -- only fields with real, verified
// values are ever passed in, and each is rendered independently so an
// unset field is simply absent (no bracketed placeholders).
export interface CsProofData {
  safetyNote?: string
  role?: string
}

export function CsProof({ data }: { data: CsProofData }) {
  const fields = [{ label: 'Role', value: data.role }].filter(
    (f): f is { label: string; value: string } => Boolean(f.value)
  )

  if (!data.safetyNote && fields.length === 0) return null

  return (
    <div className="cs-proof">
      {data.safetyNote && <p className="cs-proof-safety">{data.safetyNote}</p>}
      {fields.length > 0 && (
        <dl className="cs-proof-meta">
          {fields.map((f) => (
            <div key={f.label} className="cs-proof-meta-item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}

// Generic labeled bullet list -- reused for Contributions / Evidence /
// Limitations / Next Steps. Renders nothing if there's no real content,
// so a case study missing one of these sections just skips it.
export function CsListSection({
  title,
  note,
  items,
}: {
  title: string
  note?: string
  items?: string[]
}) {
  if (!items || items.length === 0) return null
  return (
    <section className="cs-section">
      <CsSectionHead title={title} note={note} />
      <ul className="cs-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export function CsFooter({ left, right }: { left: string; right: string }) {
  return (
    <footer className="cs-footer">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  )
}
