import { Link } from 'react-router-dom'
import KasaLogo from '../assets/LOGO-3.png'
import './Header.scss'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={KasaLogo} alt="Logo Kasa" />
            </Link>
            <div className="nav">
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </div>
        </div>
    )
}
export default Header