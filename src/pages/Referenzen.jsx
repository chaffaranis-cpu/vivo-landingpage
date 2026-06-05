import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1, category: 'Hochdruckreinigung', title: 'Terrassen- & Wegplatten-Reinigung',
    result: 'Jahre­langer Grünbelag entfernt',
    before: '/images/terrasse-vorher.jpg', after: '/images/terrasse-nachher.jpg',
  },
  {
    id: 2, category: 'Dachreinigung', title: 'Flachdach-Reinigung',
    result: 'Moos & Algen vollständig gelöst',
    before: '/images/dach-vorher.jpg', after: '/images/dach-nachher.jpg',
  },
  {
    id: 3, category: 'Renovierung', title: 'Bodenbelag & Malerarbeiten',
    result: 'Rohbau zur bezugsfertigen Wohnung',
    before: '/images/sanierung-vorher.jpg', after: '/images/sanierung-nachher.jpg',
  },
]

function RefCard({ project }) {
  const [after, setAfter] = useState(false)
  return (
    <div className="ref-card2">
      <div className="ref-card2__imgs">
        <div className={`ref-card2__img ${!after ? 'active' : ''}`}>
          {project.before
            ? <img src={project.before} alt="Vorher" />
            : <div className="ref-card2__placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Vorher-Foto
              </div>
          }
          <div className="ref-badge ref-badge--vor">Vorher</div>
        </div>
        <div className={`ref-card2__img ${after ? 'active' : ''}`}>
          {project.after
            ? <img src={project.after} alt="Nachher" />
            : <div className="ref-card2__placeholder">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                Nachher-Foto
              </div>
          }
          <div className="ref-badge ref-badge--nach">Nachher</div>
        </div>
      </div>
      <div className="ref-card2__toggle">
        <button className={`ref-btn ${!after ? 'active' : ''}`} onClick={() => setAfter(false)}>Vorher</button>
        <button className={`ref-btn ${after ? 'active' : ''}`} onClick={() => setAfter(true)}>Nachher</button>
      </div>
      <div className="ref-card2__info">
        <div className="ref-cat">{project.category}</div>
        <div className="ref-title">{project.title}</div>
        <div className="ref-loc">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          {project.result}
        </div>
      </div>
    </div>
  )
}

export default function Referenzen() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <div className="label label--light">Unsere Arbeit</div>
            <h1 className="page-hero__title">
              Vorher. <em>Nachher.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="ref-page">
        <div className="container">
          <p className="section-sub" style={{ marginBottom: '0' }}>
            Keine Stock-Fotos. Keine gestellten Bilder. Nur echte Projekte, echte Ergebnisse.
          </p>
          <div className="ref-page__grid">
            {projects.map(p => <RefCard key={p.id} project={p} />)}
          </div>

          <div style={{ marginTop: '4rem', background: 'var(--cream)', borderRadius: '12px', padding: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--italic)', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--navy)', margin: 0 }}>
              Ihr Projekt könnte als nächstes hier stehen.
            </p>
            <Link to="/kontakt" className="btn-gold">Jetzt anfragen</Link>
          </div>
        </div>
      </section>
    </>
  )
}
