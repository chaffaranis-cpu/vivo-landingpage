import React from 'react'
import Logo from './Logo'

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <a href="#home" className="nav__logo">
            <Logo dark size={120} />
          </a>
          <ul className="nav__links">
            <li><a href="#leistungen">Leistungen</a></li>
            <li><a href="#ueber-uns">Über uns</a></li>
            <li><a href="#vorteile">Vorteile</a></li>
            <li><a href="#referenzen">Referenzen</a></li>
            <li><a href="#kontakt" className="nav__cta">Kontakt</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
