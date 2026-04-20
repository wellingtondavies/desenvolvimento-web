import './Header.css'
import Navigation from './Navigation'

function Header({ tituloBlog }) {
  return (
    <header className="header-card">
      <h1>{tituloBlog}</h1>
      <Navigation />
    </header>
  )
}

export default Header