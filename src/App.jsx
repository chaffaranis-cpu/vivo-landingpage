import React from 'react'
import Hero from './components/Hero'

export default function App() {
  return (
    <div>
      <Hero />
      <section className="features">
        <div className="container">
          <h2>Features</h2>
          <p>Kurze Beschreibung der wichtigsten Funktionen.</p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Vivo</div>
      </footer>
    </div>
  )
}
