import React from 'react'

const stats = [
  { number: '3+', label: 'Jahre Erfahrung' },
  { number: '100%', label: 'Persönlicher Service' },
  { number: 'KA', label: 'Karlsruhe & Umgebung' },
  { number: '0€', label: 'Kostenloses Erstgespräch' },
]

export default function Stats() {
  return (
    <div className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat__number">{s.number}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
