import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './styles.css'

import Popup    from './components/Popup'
import Nav      from './components/Nav'
import Footer   from './components/Footer'

import Home       from './pages/Home'
import Leistungen from './pages/Leistungen'
import Referenzen from './pages/Referenzen'
import UeberUns   from './pages/UeberUns'
import Kontakt    from './pages/Kontakt'
import Impressum  from './pages/Impressum'

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Popup />
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/ueber-uns"  element={<UeberUns />} />
          <Route path="/kontakt"    element={<Kontakt />} />
          <Route path="/impressum"  element={<Impressum />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
