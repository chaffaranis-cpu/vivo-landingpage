import React from 'react'

const points = [
  { n: '01', title: 'Alles aus einer Hand', desc: 'Von der Reinigung bis zur Renovierung — ein Ansprechpartner für alle Aufgaben rund um Ihre Immobilie.' },
  { n: '02', title: '24/7 Notfallbereitschaft', desc: 'Im Notfall sind wir für Sie da. Rund um die Uhr, 365 Tage im Jahr — zuverlässig und schnell.' },
  { n: '03', title: 'Persönlicher Service', desc: 'Kein Callcenter, keine langen Wartezeiten. Sie sprechen direkt mit den Inhabern — immer.' },
  { n: '04', title: 'Feste Preise', desc: 'Transparente Angebote ohne versteckte Kosten. Was wir Ihnen anbieten, ist das, was Sie bezahlen.' },
  { n: '05', title: 'Lokal verwurzelt', desc: 'Wir kennen Karlsruhe und die Region. Kurze Wege, schnelle Reaktionszeiten — immer in Ihrer Nähe.' },
  { n: '06', title: 'Erfahrung & Qualität', desc: 'Professionelle Handwerksqualität, sorgfältige Ausführung und ein Auge fürs Detail bei jedem Auftrag.' },
]

export default function USP() {
  return (
    <section className="usp" id="vorteile">
      <div className="container">
        <div className="section-label">Warum VIVO</div>
        <h2 className="section-title">Was uns auszeichnet</h2>
        <p className="section-subtitle">
          Wir sind mehr als ein Dienstleister — wir sind Ihr verlässlicher Partner für ein gepflegtes Zuhause.
        </p>
        <div className="usp__grid">
          {points.map((p) => (
            <div className="usp-item" key={p.n}>
              <div className="usp-item__number">{p.n}</div>
              <h3 className="usp-item__title">{p.title}</h3>
              <p className="usp-item__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
