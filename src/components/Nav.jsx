import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/',           label: 'Start' },
    { to: '/leistungen', label: 'Leistungen' },
    { to: '/referenzen', label: 'Referenzen' },
    { to: '/ueber-uns',  label: 'Über uns' },
    { to: '/kontakt',    label: 'Kontakt' },
  ]

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <NavLink to="/" className="nav__logo">
            <Logo dark size={130} />
          </NavLink>

          <ul className="nav__links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className="nav__burger"
            onClick={() => setOpen(o => !o)}
            aria-label="Menü"
          >
            <span /><span /><span />
          </div>
        </div>
      </div>

      <div className={`nav__mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
