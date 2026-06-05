import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <Logo dark size={130} />
            <p className="footer__tagline">
              Handwerkliche Exzellenz, persönlich geliefert.
            </p>
          </div>

          <div className="footer__links">
            <Link to="/leistungen">Leistungen</Link>
            <Link to="/referenzen">Referenzen</Link>
            <Link to="/ueber-uns">Über uns</Link>
            <Link to="/kontakt">Kontakt</Link>
            <Link to="/impressum">Impressum</Link>
          </div>

          <div className="footer__contacts">
            <div className="footer__contact-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.79-1.79a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+4917656936883">+49 176 5693 6883</a>
            </div>
            <div className="footer__contact-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:vivohaus.service@gmail.com">vivohaus.service@gmail.com</a>
            </div>
            <div className="footer__contact-row">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Baden-Württemberg
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} VIVO Haus &amp; Service — Anis Chaffar &amp; Amin Malaihi.&nbsp;
          <Link to="/impressum" style={{ color: 'rgba(200,169,78,0.4)' }}>Impressum</Link>
        </div>
      </div>
    </footer>
  )
}
