import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="container">
          <div className="hero__content">
            <div className="hero__eyebrow">Reinigung &amp; Werterhalt</div>
            <h1 className="hero__h1">
              Sauber.
              <em>Gepflegt.</em>
              Gemacht.
            </h1>
            <p className="hero__sub">
              Wir reinigen, was andere liegen lassen. Hochdruckreinigung, Dachreinigung
              und Imprägnierung auf Profi-Niveau — ohne Schäden, ohne Kompromisse.
            </p>
            <div className="hero__actions">
              <Link to="/kontakt" className="btn-gold">Jetzt anfragen</Link>
              <Link to="/leistungen" className="btn-outline">Alle Leistungen</Link>
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          Scroll
        </div>
      </section>

      {/* STATS */}
      <div className="statsbar">
        <div className="container">
          <div className="statsbar__grid">
            <div className="statsbar__item">
              <div className="statsbar__num">★★★★★</div>
              <div className="statsbar__label">Kundenzufriedenheit</div>
            </div>
            <div className="statsbar__item">
              <div className="statsbar__num">100%</div>
              <div className="statsbar__label">Persönlicher Service</div>
            </div>
            <div className="statsbar__item">
              <div className="statsbar__num">3</div>
              <div className="statsbar__label">Kernleistungen</div>
            </div>
            <div className="statsbar__item">
              <div className="statsbar__num">0€</div>
              <div className="statsbar__label">Kostenloses Erstgespräch</div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED SERVICES */}
      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <div>
              <div className="label">Was wir machen</div>
              <h2 className="section-title">Unsere Kernleistungen</h2>
              <p className="section-sub">
                Drei Bereiche, in denen wir keine Abstriche machen.
              </p>
            </div>
            <Link to="/leistungen" className="btn-gold" style={{ whiteSpace: 'nowrap' }}>
              Alle Leistungen
            </Link>
          </div>
          <div className="featured__grid">
            {[
              {
                n: '01',
                title: 'Hochdruckreinigung',
                text: 'Terrassen, Einfahrten, Fassaden und Pflasterflächen — gründlich gereinigt, ohne die Oberfläche zu beschädigen. Professionelle Geräte, erfahrene Hände.',
              },
              {
                n: '02',
                title: 'Dachreinigung',
                text: 'Moos, Algen und Schmutz verkürzen die Lebensdauer Ihres Daches. Wir entfernen das Problem an der Wurzel — schonend und wirksam.',
              },
              {
                n: '03',
                title: 'Imprägnierung',
                text: 'Nach der Reinigung kommt der Schutz. Unsere Imprägnierung versiegelt Dach und Oberflächen dauerhaft gegen Feuchtigkeit, Moos und Algen.',
              },
            ].map(s => (
              <div className="svc-card" key={s.n}>
                <div className="svc-card__num">{s.n}</div>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="container">
          <div className="trust__inner">
            <div>
              <div className="label label--light">Warum VIVO</div>
              <h2 className="section-title section-title--light">
                Kein Callcenter.<br />Kein Subunternehmer.
              </h2>
              <div className="gold-line" />
              <p className="section-sub section-sub--light" style={{ marginBottom: '2rem' }}>
                Sie sprechen direkt mit den Inhabern — und die kommen auch selbst.
              </p>
              <div className="trust__points">
                {[
                  { title: 'Direkter Ansprechpartner', text: 'Kein Weitervermitteln. Anis oder Amin nehmen ab — und kommen selbst.' },
                  { title: 'Klare Preise vorher', text: 'Kein böses Erwachen auf der Rechnung. Was wir anbieten, gilt.' },
                  { title: 'Sauber oder nochmal', text: 'Wenn das Ergebnis nicht stimmt, kommen wir nochmal. Punkt.' },
                ].map(p => (
                  <div className="trust__point" key={p.title}>
                    <div className="trust__icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <div className="trust__point-title">{p.title}</div>
                      <div className="trust__point-text">{p.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="trust__visual">
              <div className="trust__card">
                <div className="trust__card-top" />
                <div className="trust__card-body">
                  <div className="trust__card-logo">
                    <Logo dark size={160} />
                  </div>
                  <div className="trust__divider" />
                  <div className="trust__card-name">Anis Chaffar &amp; Amin Malaihi</div>
                  <div className="trust__card-role">Inhaber &amp; Geschäftsführer</div>
                  <div className="trust__contact-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    +49 176 5693 6883
                  </div>
                  <div className="trust__contact-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    vivohaus.service@gmail.com
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <Link to="/kontakt" className="btn-gold" style={{ display: 'block', textAlign: 'center' }}>
                      Kostenloses Erstgespräch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
