import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'

export default function UeberUns() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <div className="label label--light">Wer wir sind</div>
            <h1 className="page-hero__title">
              Zwei Leute.<br /><em>Ein Anspruch.</em>
            </h1>
          </div>
        </div>
      </section>

      <section className="ueber-intro">
        <div className="container">
          <div className="ueber-intro__inner">
            <div className="ueber-text">
              <div className="label">Die Geschichte</div>
              <h2 className="section-title">VIVO Haus &amp; Service</h2>
              <div className="gold-line" />
              <p>
                Anis Chaffar und Amin Malaihi haben VIVO gegründet, weil sie selbst
                erlebt haben, wie schwer es ist, einen Handwerker zu finden, der
                pünktlich kommt, sauber arbeitet und danach nicht verschwunden ist.
              </p>
              <p>
                Also haben sie es selbst gemacht. Kein großes Büro, keine Subunternehmer,
                keine versteckten Kosten. Nur zwei Leute die ihr Handwerk ernst nehmen
                und sich für das Ergebnis verantwortlich fühlen.
              </p>
              <div className="ueber-quote">
                <p>„Wenn wir eine Fläche reinigen, reinigen wir sie so, als wäre es unsere eigene."</p>
              </div>
              <p>
                Schwerpunkt liegt auf Hochdruckreinigung, Dachreinigung und Imprägnierung —
                Bereiche, in denen schlechte Arbeit richtig teuer werden kann.
                Deshalb machen wir es richtig.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <Link to="/kontakt" className="btn-gold">Kontakt aufnehmen</Link>
              </div>
            </div>

            <div className="ueber-visual">
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Logo dark size={160} />
                <div className="ueber-visual__line" />
                <div className="ueber-team">
                  <div className="team-card">
                    <div className="team-card__init">AC</div>
                    <div>
                      <div className="team-card__name">Anis Chaffar</div>
                      <div className="team-card__role">Inhaber &amp; Geschäftsführer</div>
                    </div>
                  </div>
                  <div className="team-card">
                    <div className="team-card__init">AM</div>
                    <div>
                      <div className="team-card__name">Amin Malaihi</div>
                      <div className="team-card__role">Inhaber &amp; Geschäftsführer</div>
                    </div>
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
