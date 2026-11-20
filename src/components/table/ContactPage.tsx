import type { FormEvent } from 'react'
import { site } from '../../data/site'
import { SectionHead, SectionPage } from './SectionPage'

export function ContactPage({ navigate }: { navigate: (to: string) => void }) {
  // There's no backend: the form drafts an email in the visitor's own
  // mail app, addressed to Justin, with their message filled in.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const from = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const subject = name ? `Hello from ${name}` : 'Hello from your portfolio'
    const body = [message, '', name ? `— ${name}` : '', from].join('\n').trim()
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <SectionPage id="contact" navigate={navigate}>
      <section className="tb-sheet tb-contact">
        <div className="tb-contact__body">
          <div className="tb-contact__head">
            <SectionHead eyebrow="9♥ — 06 · CONTACT" title="Deal me in." />
            <span className="tb-dealer" aria-hidden="true">
              <b>D</b>
              <span>DEALER</span>
            </span>
          </div>
          <p className="tb-lede">
            Hiring for robotics test, validation, or AI roles, or building something at the edge of software and hardware? I'd like to hear about it.
          </p>
          <a href={`mailto:${site.email}`} className="tb-contact__mail">
            {site.email}
          </a>
          <div className="tb-btn-row">
            <a href={site.links.linkedin} className="tb-btn" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={site.links.github} className="tb-btn" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={site.links.resume} className="tb-btn" target="_blank" rel="noreferrer">
              Résumé ↗
            </a>
          </div>
        </div>

        <form className="tb-form" onSubmit={onSubmit}>
          <span className="tb-idx is-red" aria-hidden="true">
            9<br />♥
          </span>
          <span className="tb-idx tb-idx--flip is-red" aria-hidden="true">
            9<br />♥
          </span>
          <label htmlFor="cc-name">NAME</label>
          <input id="cc-name" name="name" type="text" placeholder="Your name" autoComplete="name" />
          <label htmlFor="cc-email">EMAIL</label>
          <input id="cc-email" name="email" type="email" placeholder="you@company.com" autoComplete="email" />
          <label htmlFor="cc-msg">MESSAGE</label>
          <textarea id="cc-msg" name="message" placeholder="What's the hand?" required />
          <button type="submit" className="tb-form__send">
            Deal the card <span aria-hidden="true">→</span>
          </button>
          <span className="tb-form__note">Opens a draft in your email app.</span>
        </form>
      </section>
    </SectionPage>
  )
}
