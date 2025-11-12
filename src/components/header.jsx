import { Link, NavLink } from 'react-router-dom'
import KasaLogo from '../assets/LOGO-3.png'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={KasaLogo} alt="Logo Kasa" />
            </Link>
            <div className="nav">
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>À propos</NavLink>
            </div>
        </div>
    )
}
export default Header