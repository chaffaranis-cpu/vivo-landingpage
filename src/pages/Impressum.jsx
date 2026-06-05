import React from 'react'

export default function Impressum() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container">
          <div className="page-hero__content">
            <div className="label label--light">Rechtliches</div>
            <h1 className="page-hero__title">Impressum</h1>
          </div>
        </div>
      </section>

      <section className="impressum">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="impressum__block">
            <h3>Angaben gemäß § 5 TMG</h3>
            <address>
              VIVO Haus &amp; Service<br />
              Anis Chaffar &amp; Amin Malaihi<br />
              Karlsruhe, Baden-Württemberg<br />
              Deutschland
            </address>
          </div>

          <div className="impressum__block">
            <h3>Kontakt</h3>
            <p>
              Telefon: <a href="tel:+4917656936883" style={{ color: 'var(--gold)' }}>+49 176 5693 6883</a><br />
              E-Mail: <a href="mailto:vivohaus.service@gmail.com" style={{ color: 'var(--gold)' }}>vivohaus.service@gmail.com</a>
            </p>
          </div>

          <div className="impressum__block">
            <h3>Verantwortlich für den Inhalt</h3>
            <p>Anis Chaffar &amp; Amin Malaihi</p>
          </div>

          <div className="impressum__block">
            <h3>Haftungsausschluss</h3>
            <p>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen
              wir jedoch keine Gewähr. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
              für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
          </div>

          <div className="impressum__block">
            <h3>Datenschutz</h3>
            <p>
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
              Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
              E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
          </div>

          <div className="impressum__block">
            <h3>Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              https://ec.europa.eu/consumers/odr. Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
