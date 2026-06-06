import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

export default function Home() {
  return (
    <>
      {/* ── HERO (fullscreen image) ── */}
      <section className="hero">
        <div className="hero__media">
          <img src="/images/terrasse-nachher.jpg" alt="Gepflegte Außenanlage" />
        </div>
        <div className="container">
          <div className="hero__content">
            <div className="hero__eyebrow">Frankfurt &amp; Rhein-Main</div>
            <h1 className="hero__h1">
              Ihre Immobilie.
              <em>Unser Anspruch.</em>
              Perfekt betreut.
            </h1>
            <p className="hero__sub">
              Objektbetreuung, Gartenpflege und Winterdienst
              für Eigentümer und Hausverwaltungen. Persönlich, zuverlässig, termintreu.
            </p>
            <div className="hero__actions">
              <Link to="/kontakt" className="btn-gold">Kostenloses Erstgespräch</Link>
              <Link to="/kontakt" className="btn-outline">Rückruf in 24 Stunden</Link>
            </div>
            <div className="trust-bar">
              {['100+ Objekte betreut', 'Frankfurt & Rhein-Main', '24h Reaktionszeit'].map(t => (
                <div className="trust-bar__item" key={t}><CheckIcon />{t}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          Scroll
        </div>
      </section>

      {/* ── BILD-SERVICES ── */}
      <div className="img-services">
        {[
          { img: '/images/terrasse-vorher.jpg', label: 'Reinigung', title: 'Hochdruck­reinigung' },
          { img: '/images/dach-nachher.jpg',    label: 'Pflege',    title: 'Dachreinigung' },
          { img: '/images/terrasse-nachher.jpg',label: 'Schutz',    title: 'Imprägnierung' },
        ].map(s => (
          <div className="img-svc" key={s.title}>
            <img src={s.img} alt={s.title} />
            <div className="img-svc__overlay">
              <div className="img-svc__label">{s.label}</div>
              <div className="img-svc__title">{s.title}</div>
            </div>
          </div>
        ))}
      </div>


      {/* ── SERVICES ── */}
      <section className="featured">
        <div className="container">
          <div className="featured__header">
            <div>
              <div className="label">Immobilienpflege aus einer Hand</div>
              <h2 className="section-title">Unsere Kernleistungen</h2>
              <p className="section-sub">
                Nicht jeder Dienstleister kommt pünktlich, arbeitet sauber und
                ist danach noch erreichbar. Wir schon.
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
                title: 'Objektbetreuung',
                text: 'Regelmäßige Kontrollen, Instandhaltung und vollständige Betreuung Ihrer Immobilie — damit Sie sich um nichts kümmern müssen.',
              },
              {
                n: '02',
                title: 'Gartenpflege',
                text: 'Ganzjährige Pflege von Grünanlagen und Außenbereichen. Vom Rasenmähen bis zur Heckenschnitt — professionell und verlässlich.',
              },
              {
                n: '03',
                title: 'Winterdienst',
                text: 'Pünktliche Schneeräumung und Streudienst nach gesetzlichen Vorgaben. Keine Ausreden, kein Zuspätkommen.',
              },
              {
                n: '04',
                title: 'Kleinreparaturen',
                text: 'Schnelle Lösungen für kleine Schäden, bevor größere Kosten entstehen. Wir kommen, bevor das Problem wächst.',
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

      {/* ── WARUM VIVO ── */}
      <section className="trust">
        <div className="container">
          <div className="trust__inner">
            <div>
              <div className="label label--light">Warum VIVO</div>
              <h2 className="section-title section-title--light">
                Kein Callcenter.<br />Kein Subunternehmer.
              </h2>
              <div className="gold-line" />
              <p className="section-sub section-sub--light" style={{ marginBottom: '2.5rem' }}>
                Bei VIVO Haus &amp; Service kümmern wir uns um Immobilien so, als wären
                es unsere eigenen. Unkomplizierte Zusammenarbeit, schnelle Erreichbarkeit
                und saubere Ausführung — das ist unser Anspruch.
              </p>
              <div className="trust__points">
                {[
                  {
                    title: 'Direkter Ansprechpartner',
                    text: 'Kein Weitervermitteln. Anis oder Amin nehmen ab — und kommen selbst.',
                  },
                  {
                    title: 'Transparente Preise',
                    text: 'Kein böses Erwachen auf der Rechnung. Was wir anbieten, das gilt.',
                  },
                  {
                    title: 'Sauber oder nochmal',
                    text: 'Wenn das Ergebnis nicht stimmt, kommen wir nochmal. Punkt.',
                  },
                ].map(p => (
                  <div className="trust__point" key={p.title}>
                    <div className="trust__icon">
                      <CheckIcon />
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
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    +49 176 5693 6883
                  </div>
                  <div className="trust__contact-row">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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

      {/* ── REGION ── */}
      <section className="region">
        <div className="container">
          <div className="region__inner">
            <div>
              <div className="label label--light">Unser Einzugsgebiet</div>
              <h2 className="section-title section-title--light">
                Zuhause im<br />
                <span style={{ color: 'var(--gold)' }}>Rhein-Main-Gebiet</span>
              </h2>
              <div className="gold-line" />
              <p className="section-sub section-sub--light" style={{ marginBottom: '2rem' }}>
                Als regionaler Dienstleister betreuen wir Immobilien in Frankfurt
                und der gesamten Rhein-Main-Region. Durch kurze Wege reagieren wir
                schnell und sind persönlich für unsere Kunden erreichbar.
              </p>
              <div className="region__cities">
                {['Frankfurt am Main', 'Karlsruhe', 'Mannheim', 'Heidelberg', 'Darmstadt'].map(c => (
                  <span className="region__city" key={c}>{c}</span>
                ))}
              </div>
            </div>
            <div className="region__visual">
              {[
                { num: '100+', label: 'Betreute Objekte' },
                { num: '24h', label: 'Reaktionszeit' },
                { num: '365', label: 'Tage im Jahr' },
                { num: '100%', label: 'Persönlich vor Ort' },
              ].map(s => (
                <div className="region__stat" key={s.label}>
                  <div className="region__stat-num">{s.num}</div>
                  <div className="region__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner__inner">
            <div>
              <h2 className="cta-banner__title">Kostenloses Erstgespräch</h2>
              <p className="cta-banner__sub">Unverbindlich. Persönlich. Innerhalb von 24 Stunden.</p>
            </div>
            <Link to="/kontakt" className="btn-gold">Jetzt anfragen</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials">
        <div className="container">
          <div className="label">Kundenstimmen</div>
          <h2 className="section-title">Von Eigentümern empfohlen</h2>
          <p className="section-sub">
            Vertrauen durch Qualität, Zuverlässigkeit und saubere Arbeit.
          </p>
          <div className="testimonials__grid">
            {[
              {
                text: 'Endlich ein Dienstleister, auf den man sich verlassen kann. Die Kommunikation ist schnell, die Arbeiten werden zuverlässig erledigt — und das Ergebnis stimmt.',
                name: 'Hausverwaltung Frankfurt',
                role: 'Gewerbekunde, Rhein-Main',
              },
              {
                text: 'Von der Gartenpflege bis zum Winterdienst läuft alles professionell und termingerecht. Keine Überraschungen auf der Rechnung, keine Ausreden.',
                name: 'Privatvermieter',
                role: 'Mehrfamilienhaus, Frankfurt Nordend',
              },
              {
                text: 'Ich betreue mehrere Objekte und brauche Partner, die verlässlich sind. VIVO kommt pünktlich, arbeitet sauber und meldet sich von sich aus, wenn etwas auffällt.',
                name: 'Immobilieneigentümer',
                role: 'Portfolio, Rhein-Main-Gebiet',
              },
            ].map((t, i) => (
              <div className="testi-card" key={i}>
                <p className="testi-text">{t.text}</p>
                <div className="testi-divider" />
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
