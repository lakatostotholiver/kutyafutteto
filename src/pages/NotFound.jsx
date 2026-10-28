import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container page-narrow">
      <title>Az oldal nem található – Kutyafuttató – Törökbálint</title>
      <h1>Az oldal nem található</h1>
      <p className="hero__lead">A keresett oldal nem létezik, vagy megváltozott a címe.</p>
      <p>
        <Link className="button" to="/">
          Vissza a kezdőlapra
        </Link>
      </p>
    </div>
  )
}
