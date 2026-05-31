import React from 'react'
import './styles.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import About from './components/About'
import USP from './components/USP'
import References from './components/References'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <About />
      <USP />
      <References />
      <Contact />
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
              vivohaus.service@gmail.com
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
              0176 5693 6883
            </span>
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
              Karlsruhe, Baden-Württemberg
            </span>
          </div>
          <div className="footer__gold-line" />
          <div className="footer__copy">
            © {new Date().getFullYear()} VIVO Haus & Service — Anis Chaffar & Amin Malaihi. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  )
}
