import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { submitContactForm } from '../api'
import { MailIcon, PhoneIcon, MapPinIcon, CopyIcon, CheckIcon, SendIcon } from './Icons'

const initialForm = { name: '', email: '', message: '' }

export default function Contact({ profile }) {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState(initialForm)
  const [fieldErrors, setFieldErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error', text }
  const [copied, setCopied] = useState(false)

  function updateField(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    setFieldErrors({})
    try {
      const result = await submitContactForm(form)
      setStatus({ type: 'success', text: result.message || 'Message sent successfully.' })
      setForm(initialForm)
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Could not send your message.' })
      if (err.fieldErrors) setFieldErrors(err.fieldErrors)
    } finally {
      setSubmitting(false)
    }
  }

  function copyEmail() {
    navigator.clipboard?.writeText(profile.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }

  return (
    <section id="contact" className="section">
      <div className="section-eyebrow">06</div>
      <h2 className="section-title">Get In Touch</h2>

      <div ref={ref} className={`contact-grid reveal ${visible ? 'visible' : ''}`}>
        <div>
          <div className="contact-info-line">
            <MailIcon />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="copy-btn" type="button" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </div>
          <div className="contact-info-line">
            <PhoneIcon />
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
          <div className="contact-info-line">
            <MapPinIcon />
            <span>{profile.location}</span>
          </div>
        </div>

        <form className="terminal" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="name">name</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="Jane Doe"
              required
            />
            {fieldErrors.name && <div className="field-error">{fieldErrors.name}</div>}
          </div>
          <div className="field">
            <label htmlFor="email">email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              placeholder="jane@company.com"
              required
            />
            {fieldErrors.email && <div className="field-error">{fieldErrors.email}</div>}
          </div>
          <div className="field">
            <label htmlFor="message">message</label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => updateField('message', e.target.value)}
              placeholder="Let's build something..."
              required
            />
            {fieldErrors.message && <div className="field-error">{fieldErrors.message}</div>}
          </div>

          <div className="submit-row">
            <button className="btn btn-primary" type="submit" disabled={submitting}>
              <SendIcon /> {submitting ? 'sending…' : './send_message.sh'}
            </button>
            {status && (
              <span className={`form-status ${status.type}`}>
                {status.type === 'success' ? '✓ ' : '✗ '}
                {status.text}
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
