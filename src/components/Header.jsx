import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV = [
  { to: '/#hasznalat', label: 'Használat' },
  { to: '/#helyszin', label: 'Helyszín' },
  { to: '/hazirend', label: 'Házirend', page: true },
  { to: '/#gyik', label: 'Kérdések' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  // Oldalváltáskor a menü bezárul (a render közbeni állapotfrissítés React-ajánlás effekt helyett)
  const [lastLocation, setLastLocation] = useState(pathname + hash)
  if (lastLocation !== pathname + hash) {
    setLastLocation(pathname + hash)
    setOpen(false)
  }

  // Nyitott menünél: Esc bezárja, az oldal nem görget a panel mögött, asztali szélességen magától bezárul
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const wide = window.matchMedia('(min-width: 1024px)')
    const onWide = (e) => e.matches && setOpen(false)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    wide.addEventListener('change', onWide)
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
      wide.removeEventListener('change', onWide)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="brand" to="/">
          <img className="brand__mark" src="/img/cimer-96.png" width="50" height="48" alt="" />
          <span className="brand__text">
            <span className="brand__name">Törökbálint</span>
            <span className="brand__sub">Város Önkormányzata</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="fomenu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
          {open ? 'Bezárás' : 'Menü'}
        </button>

        <nav id="fomenu" className={`site-nav${open ? ' is-open' : ''}`} aria-label="Fő navigáció">
          {NAV.map((item) =>
            item.page ? (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ) : (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ),
          )}
          <NavLink className="site-nav__cta" to="/gyerekeknek" onClick={() => setOpen(false)}>
            Gyerekeknek
          </NavLink>
        </nav>
      </div>
      <button
        type="button"
        className={`nav-backdrop${open ? ' is-open' : ''}`}
        aria-hidden="true"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
    </header>
  )
}
