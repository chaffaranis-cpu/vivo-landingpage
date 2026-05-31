import React from 'react'
import Logo from './Logo'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__tag">Karlsruhe · Baden-Württemberg</div>
            <h1 className="hero__title">
              Ihr Zuhause in<br />
              <span>besten Händen</span>
            </h1>
            <p className="hero__subtitle">
              „Vom ersten bis zum letzten Detail — professionell, zuverlässig, persönlich."
            </p>
            <p className="hero__text">
              VIVO Haus & Service ist Ihr Partner für alle Aufgaben rund um Haus und Immobilie.
              Wir übernehmen Hausmeisterdienste, Reinigung, Renovierung und vieles mehr —
              damit Sie sich um das Wesentliche kümmern können.
            </p>
            <div className="hero__actions">
              <a href="#kontakt" className="btn-primary">Kostenloses Erstgespräch</a>
              <a href="#leistungen" className="btn-ghost">Unsere Leistungen</a>
            </div>
          </div>

          <div className="hero__card">
            <div className="hero__card-inner">
              <div className="hero__card-logo">
                <Logo size={180} />
              </div>
              <div className="hero__card-divider" />
              <div className="hero__card-name">Anis Chaffar &amp; Amin Malaihi</div>
              <div className="hero__card-role">Inhaber &amp; Geschäftsführer</div>
              <div className="hero__contacts">
                <div className="hero__contact-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  vivohaus.service@gmail.com
                </div>
                <div className="hero__contact-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0176 5693 6883
                </div>
                <div className="hero__contact-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Karlsruhe, Baden-Württemberg
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
