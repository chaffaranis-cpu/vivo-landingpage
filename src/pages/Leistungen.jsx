import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Hochdruckreinigung',
    text: 'Terrassen, Einfahrten, Gehwege, Fassaden, Pflasterflächen — wir reinigen unter hohem Druck, ohne Schäden an der Oberfläche. Professionelle Geräte, kein Rätselraten.',
    tags: ['Terrassen', 'Einfahrten', 'Fassaden', 'Pflaster', 'Gehwege'],
  },
  {
    title: 'Dachreinigung',
    text: 'Moos, Algen und biologischer Bewuchs setzen Dächern zu. Wir entfernen alles gründlich — von Ziegel bis Wellblech — und bereiten das Dach für die Imprägnierung vor.',
    tags: ['Ziegeldach', 'Flachdach', 'Wellblech', 'Carport', 'Garagen'],
  },
  {
    title: 'Imprägnierung',
    text: 'Direkt nach der Reinigung versiegeln wir die Fläche dauerhaft. Feuchtigkeit, Moos und Algen haben keine Chance mehr. Die Wirkung hält mehrere Jahre.',
    tags: ['Dachimprägnierung', 'Terrassenversiegelung', 'Langzeitschutz'],
  },
  {
    title: 'Hausmeister & Haustechnik',
    text: 'Wartung, Kleinreparaturen und Notfallbereitschaft. Wir sind Ihr erster Anruf wenn etwas nicht stimmt — unkompliziert, verlässlich und ohne Aufschlag für Selbstverständlichkeiten.',
    tags: ['Wartung', 'Kleinreparaturen', 'Notfall', 'Haustechnik'],
  },
  {
    title: 'Garten & Winterdienst',
    text: 'Rasenpflege, Heckenschnitt, Laubreinigung im Herbst und Räumdienst im Winter. Alles was Ihr Außenbereich braucht, ohne drei verschiedene Dienstleister.',
    tags: ['Rasenpflege', 'Heckenschnitt', 'Laubreinigung', 'Winterdienst', 'Streudienst'],
  },
  {
    title: 'Renovierung & Bodenbelag',
    text: 'Malerarbeiten, Laminat, Fliesen und Kleinumbauten — wir übernehmen Renovierungen die sich lohnen. Sauber abgeschlossen, pünktlich übergeben.',
    tags: ['Malerarbeiten', 'Laminat', 'Fliesen', 'Kleinumbauten'],
  },
]

export default function Leistungen() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <div className="label label--light">Was wir tun</div>
            <h1 className="page-hero__title">
              Leistungen, <em>die wirken.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="leistungen-grid">
        <div className="container">
          <p className="section-sub" style={{ marginBottom: '0' }}>
            Kein Fullservice-Versprechen ohne Substanz — wir machen was wir können,
            und das können wir gut.
          </p>
          <div className="lsvc-grid">
            {services.map((s, i) => (
              <div className="lsvc-item" key={s.title}>
                <div className="lsvc-num">0{i + 1}</div>
                <div>
                  <h3 className="lsvc-title">{s.title}</h3>
                  <p className="lsvc-text">{s.text}</p>
                  <div className="lsvc-tags">
                    {s.tags.map(t => (
                      <span className="lsvc-tag" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--italic)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Unsicher ob wir das richtige für Ihr Projekt sind?
            </p>
            <Link to="/kontakt" className="btn-gold">
              Kostenloses Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
