import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Rules from './pages/Rules.jsx'
import Kids from './pages/Kids.jsx'
import Poster from './pages/Poster.jsx'
import NotFound from './pages/NotFound.jsx'

// Oldalváltáskor a lap tetejére ugrik, horgony (#helyszin) esetén a szakaszhoz görget.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()

  // A nyomtatható plakát fejléc és lábléc nélkül jelenik meg
  if (pathname === '/plakat') return <Poster />

  return (
    <>
      <a className="skip-link" href="#main">
        Ugrás a tartalomra
      </a>
      <ScrollManager />
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hazirend" element={<Rules />} />
          <Route path="/gyerekeknek" element={<Kids />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
