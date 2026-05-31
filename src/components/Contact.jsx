import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="kontakt">
      <div className="container">
        <div className="section-label">Kontakt</div>
        <h2 className="section-title">Sprechen wir miteinander</h2>
        <p className="section-subtitle">
          Kostenloses Erstgespräch — kein Auftrag ohne Ihr Einverständnis.
        </p>

        <div className="contact__inner">
          <div className="contact__info">
            <div className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact__label">Telefon</div>
                <div className="contact__value">0176 5693 6883</div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact__label">E-Mail</div>
                <div className="contact__value">vivohaus.service@gmail.com</div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact__label">Standort</div>
                <div className="contact__value">Karlsruhe, Baden-Württemberg</div>
              </div>
            </div>

            <div className="contact__item">
              <div className="contact__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="contact__label">Erreichbarkeit</div>
                <div className="contact__value">Mo – Sa, 7:00 – 20:00 Uhr</div>
              </div>
            </div>
          </div>

          <div className="contact__form">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--navy)', marginBottom: '0.5rem' }}>Vielen Dank!</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <>
                <h3>Nachricht senden</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Vorname</label>
                      <input type="text" placeholder="Max" required />
                    </div>
                    <div className="form-group">
                      <label>Nachname</label>
                      <input type="text" placeholder="Mustermann" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>E-Mail</label>
                    <input type="email" placeholder="max@beispiel.de" required />
                  </div>
                  <div className="form-group">
                    <label>Leistung</label>
                    <select>
                      <option value="">Bitte wählen…</option>
                      <option>Dachreinigung & Imprägnierung</option>
                      <option>Hausmeister & Haustechnik</option>
                      <option>Reinigung & Gartenpflege</option>
                      <option>Renovierung & Sanierung</option>
                      <option>Umzug & Entrümpelung</option>
                      <option>Immobilienverwaltung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Nachricht</label>
                    <textarea placeholder="Beschreiben Sie kurz Ihr Anliegen…" required />
                  </div>
                  <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>
                    Anfrage senden
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
