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
            <div className="hero__eyebrow">Haus &amp; Service</div>
            <h1 className="hero__h1">
              Wir kümmern uns um Ihr Zuhause — <em>als wäre es unser eigenes.</em>
            </h1>
            <p className="hero__sub">
              Persönlich, zuverlässig und mit dem Blick fürs Detail. Hochdruckreinigung,
              Dachreinigung, Imprägnierung und vieles mehr — alles aus einer Hand.
            </p>
            <div className="hero__actions">
              <Link to="/kontakt" className="btn-gold">Kostenloses Erstgespräch</Link>
              <Link to="/kontakt" className="btn-outline">Rückruf in 24 Stunden</Link>
            </div>
            <div className="trust-bar">
              {['Persönlicher Ansprechpartner', 'Faire Festpreise', 'Sauber oder nochmal'].map(t => (
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
          { img: '/images/terrasse-vorher.jpg', label: 'Reinigung', title: 'Hochdruck­reinigung', to: '/leistungen' },
          { img: '/images/terrasse-nachher.jpg',label: 'Schutz',    title: 'Imprägnierung',     to: '/leistungen' },
          { img: '/images/dach-vorher.jpg',     label: 'Pflege',    title: 'Dachreinigung',     to: '/leistungen' },
        ].map(s => (
          <Link className="img-svc" key={s.title} to={s.to}>
            <img src={s.img} alt={s.title} />
            <div className="img-svc__overlay">
              <div className="img-svc__label">{s.label}</div>
              <div className="img-svc__title">{s.title}</div>
            </div>
          </Link>
        ))}
        {/* viel mehr Kachel */}
        <Link className="img-svc img-svc--more" to="/leistungen">
          <div className="img-svc--more__inner">
            <div className="img-svc__label">Und vieles mehr</div>
            <div className="img-svc--more__title">Alle Leistungen<br />entdecken</div>
            <div className="img-svc--more__arrow">
              <svg width="40" height="14" viewBox="0 0 40 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="0" y1="7" x2="37" y2="7" /><polyline points="31 1 38 7 31 13" />
              </svg>
            </div>
          </div>
        </Link>
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
                title: 'Hochdruckreinigung',
                text: 'Terrassen, Einfahrten, Fassaden und Pflasterflächen — gründlich gereinigt, ohne die Oberfläche zu beschädigen.',
              },
              {
                n: '02',
                title: 'Dachreinigung',
                text: 'Moos, Algen und Schmutz verkürzen die Lebensdauer Ihres Daches. Wir entfernen das Problem an der Wurzel.',
              },
              {
                n: '03',
                title: 'Imprägnierung',
                text: 'Nach der Reinigung kommt der Schutz. Wir versiegeln Dach und Oberflächen dauerhaft gegen Feuchtigkeit und Moos.',
              },
              {
                n: '04',
                title: 'Gartenpflege & Landschaftsbau',
                text: 'Ganzjährige Pflege von Grünanlagen, Rasen und Hecken — und auf Wunsch die Neugestaltung Ihres Außenbereichs von Grund auf.',
              },
              {
                n: '05',
                title: 'Winterdienst',
                text: 'Pünktliche Schneeräumung und Streudienst nach gesetzlichen Vorgaben. Keine Ausreden, kein Zuspätkommen.',
              },
              {
                n: '06',
                title: 'Hausmeisterservice',
                text: 'Regelmäßige Kontrollen, Instandhaltung und vollständige Betreuung Ihrer Immobilie — damit Sie sich um nichts kümmern müssen.',
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
              <div className="label label--light">Unser Versprechen</div>
              <h2 className="section-title section-title--light">
                Wir kümmern uns um<br />
                <span style={{ color: 'var(--gold)' }}>Ihr Anliegen.</span>
              </h2>
              <div className="gold-line" />
              <p className="section-sub section-sub--light" style={{ marginBottom: '2rem' }}>
                Sie melden sich — wir kümmern uns. Schnelle Erreichbarkeit, kurze Wege
                und ein persönlicher Ansprechpartner, der Ihre Immobilie behandelt,
                als wäre es seine eigene.
              </p>
              <Link to="/kontakt" className="btn-gold">Jetzt Kontakt aufnehmen</Link>
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
                name: 'M. Berger',
                role: 'Hausverwaltung',
              },
              {
                text: 'Die Terrasse sah aus wie neu. Man hat gemerkt, dass hier jemand mit dem Anspruch arbeitet, dass am Ende wirklich alles sauber ist. Keine Überraschungen auf der Rechnung.',
                name: 'S. Wagner',
                role: 'Privatkundin',
              },
              {
                text: 'Ich betreue mehrere Objekte und brauche Partner, die verlässlich sind. VIVO kommt pünktlich, arbeitet sauber und meldet sich von sich aus, wenn etwas auffällt.',
                name: 'T. Hoffmann',
                role: 'Immobilieneigentümer',
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

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/4917656936883"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp schreiben"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.535 5.874L0 24l6.29-1.512A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.805 9.805 0 01-5.032-1.388l-.36-.214-3.733.897.944-3.63-.235-.374A9.787 9.787 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
        </svg>
      </a>
    </>
  )
}
