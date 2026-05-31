import React from 'react'
import Logo from './Logo'

export default function About() {
  return (
    <section className="about" id="ueber-uns">
      <div className="container">
        <div className="about__inner">
          <div className="about__text">
            <div className="section-label">Wer wir sind</div>
            <h2 className="section-title">Persönlich. Zuverlässig. Kompetent.</h2>
            <p>
              VIVO Haus & Service wurde von Anis Chaffar und Amin Malaihi gegründet — zwei Profis
              mit dem gemeinsamen Ziel, Hausbesitzern und Immobilieneigentümern in Karlsruhe
              einen echten Rundum-Service zu bieten.
            </p>
            <p>
              Was uns auszeichnet: Wir sind kein anonymes Unternehmen, sondern Ihr persönlicher
              Ansprechpartner vor Ort. Wir kennen die Region, wir kennen unsere Kunden — und wir
              wissen, worauf es ankommt.
            </p>
            <div className="about__quote">
              <p>„Ihr Zuhause verdient die gleiche Sorgfalt, die Sie selbst hineinstecken würden."</p>
            </div>
            <p>
              Vom kleinen Reparaturauftrag bis zur vollständigen Sanierung — wir bringen
              Handwerksqualität, Verlässlichkeit und echten Einsatz mit. Vereinbaren Sie noch heute
              ein kostenloses Erstgespräch.
            </p>
          </div>

          <div className="about__visual">
            <div className="about__visual-logo">
              <Logo dark size={160} />
            </div>
            <div className="about__visual-line" />
            <div className="about__team">
              <div className="team-member">
                <div className="team-member__initials">AC</div>
                <div>
                  <div className="team-member__name">Anis Chaffar</div>
                  <div className="team-member__role">Inhaber & Geschäftsführer</div>
                </div>
              </div>
              <div className="team-member">
                <div className="team-member__initials">AM</div>
                <div>
                  <div className="team-member__name">Amin Malaihi</div>
                  <div className="team-member__role">Inhaber & Geschäftsführer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
