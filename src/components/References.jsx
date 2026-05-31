import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    category: 'Reinigung',
    title: 'Terrassen- & Wegplatten-Reinigung',
    location: 'Karlsruhe',
    before: '/images/terrasse-vorher.jpg',
    after: '/images/terrasse-nachher.jpg',
  },
  {
    id: 2,
    category: 'Dachreinigung',
    title: 'Flachdach-Reinigung',
    location: 'Karlsruhe',
    before: '/images/dach-vorher.jpg',
    after: '/images/dach-nachher.jpg',
  },
  {
    id: 3,
    category: 'Renovierung',
    title: 'Bodenbelag & Malerarbeiten',
    location: 'Karlsruhe',
    before: '/images/sanierung-vorher.jpg',
    after: '/images/sanierung-nachher.jpg',
  },
]

function BeforeAfterCard({ project }) {
  const [showAfter, setShowAfter] = useState(false)

  return (
    <div className="ref-card">
      <div className="ref-card__images">
        <div className={`ref-card__img ref-card__img--before ${!showAfter ? 'active' : ''}`}>
          {project.before ? (
            <img src={project.before} alt={`${project.title} vorher`} />
          ) : (
            <div className="ref-card__placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Vorher-Foto</span>
            </div>
          )}
          <div className="ref-card__badge ref-card__badge--before">Vorher</div>
        </div>
        <div className={`ref-card__img ref-card__img--after ${showAfter ? 'active' : ''}`}>
          {project.after ? (
            <img src={project.after} alt={`${project.title} nachher`} />
          ) : (
            <div className="ref-card__placeholder ref-card__placeholder--after">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span>Nachher-Foto</span>
            </div>
          )}
          <div className="ref-card__badge ref-card__badge--after">Nachher</div>
        </div>
      </div>

      <div className="ref-card__toggle">
        <button
          className={`ref-toggle-btn ${!showAfter ? 'active' : ''}`}
          onClick={() => setShowAfter(false)}
        >Vorher</button>
        <button
          className={`ref-toggle-btn ${showAfter ? 'active' : ''}`}
          onClick={() => setShowAfter(true)}
        >Nachher</button>
      </div>

      <div className="ref-card__info">
        <span className="ref-card__category">{project.category}</span>
        <h3 className="ref-card__title">{project.title}</h3>
        <span className="ref-card__location">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {project.location}
        </span>
      </div>
    </div>
  )
}

export default function References() {
  return (
    <section className="references" id="referenzen">
      <div className="container">
        <div className="section-label">Unsere Arbeit</div>
        <h2 className="section-title">Referenzen</h2>
        <p className="section-subtitle">
          Bilder sagen mehr als Worte — hier sehen Sie, was wir für unsere Kunden geleistet haben.
        </p>

        <div className="ref-grid">
          {projects.map((p) => (
            <BeforeAfterCard key={p.id} project={p} />
          ))}
        </div>

        <div className="ref-cta">
          <p>Möchten Sie Ihr Projekt hier sehen? Wir freuen uns auf Ihren Auftrag.</p>
          <a href="#kontakt" className="btn-primary">Jetzt anfragen</a>
        </div>
      </div>
    </section>
  )
}
