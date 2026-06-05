import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', telefon: '', leistung: '', nachricht: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form }),
    })
      .then(() => setSent(true))
      .catch(() => setError(true))
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <div className="label label--light">Kontakt</div>
            <h1 className="page-hero__title">
              Schreiben Sie uns.<br /><em>Wir melden uns.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="kontakt-page">
        <div className="container">
          <div className="kontakt-page__inner">
            {/* Info */}
            <div>
              <div className="label">Direkt erreichbar</div>
              <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>
                Keine Warteschleifen.
              </h2>
              <div className="gold-line" />
              <div className="kontakt-info">
                <div className="kinfo-item">
                  <div className="kinfo-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="kinfo-label">Telefon</div>
                    <div className="kinfo-value"><a href="tel:+4917656936883">+49 176 5693 6883</a></div>
                  </div>
                </div>
                <div className="kinfo-item">
                  <div className="kinfo-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <div className="kinfo-label">E-Mail</div>
                    <div className="kinfo-value"><a href="mailto:vivohaus.service@gmail.com">vivohaus.service@gmail.com</a></div>
                  </div>
                </div>
                <div className="kinfo-item">
                  <div className="kinfo-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="kinfo-label">Standort</div>
                    <div className="kinfo-value">Baden-Württemberg</div>
                  </div>
                </div>
                <div className="kinfo-item">
                  <div className="kinfo-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <div>
                    <div className="kinfo-label">Erreichbarkeit</div>
                    <div className="kinfo-value">Mo – Sa, 7:00 – 20:00 Uhr</div>
                  </div>
                </div>
              </div>
              <p style={{ marginTop: '2rem', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.7 }}>
                <Link to="/impressum" style={{ color: 'var(--gold)' }}>Impressum & Datenschutz</Link>
              </p>
            </div>

            {/* Form */}
            <div className="kontakt-form-wrap">
              {sent ? (
                <div className="form-success">
                  <div className="form-success__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Nachricht angekommen.</h3>
                  <p>Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
                </div>
              ) : (
                <>
                  <h3>Anfrage senden</h3>
                  <p>Kostenloses Erstgespräch — unverbindlich.</p>
                  {error && (
                    <p style={{ color: 'red', fontSize: '0.82rem', marginBottom: '1rem' }}>
                      Fehler beim Senden. Bitte rufen Sie uns direkt an.
                    </p>
                  )}
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden><label>Bot-Feld: <input name="bot-field" /></label></p>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Vorname *</label>
                        <input name="name" type="text" placeholder="Max Mustermann" required value={form.name} onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label>Telefon</label>
                        <input name="telefon" type="tel" placeholder="+49 ..." value={form.telefon} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>E-Mail *</label>
                      <input name="email" type="email" placeholder="max@beispiel.de" required value={form.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Leistung</label>
                      <select name="leistung" value={form.leistung} onChange={handleChange}>
                        <option value="">Bitte wählen…</option>
                        <option>Hochdruckreinigung</option>
                        <option>Dachreinigung</option>
                        <option>Imprägnierung</option>
                        <option>Hausmeister & Haustechnik</option>
                        <option>Garten & Winterdienst</option>
                        <option>Renovierung & Bodenbelag</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Nachricht *</label>
                      <textarea name="nachricht" placeholder="Beschreiben Sie kurz Ihr Anliegen — Adresse, Fläche, Wunschtermin…" required value={form.nachricht} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn-gold" style={{ width: '100%' }}>
                      Anfrage absenden
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
