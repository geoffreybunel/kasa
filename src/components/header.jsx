import { Link } from 'react-router-dom'
import KasaLogo from '../assets/LOGO-3.png'

function Header() {
    return (
        <div>
            <Link to="/">
                <img src={KasaLogo} alt="Logo Kasa" />
            </Link>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/about">À propos</Link>
            </div>
        </div>
    )
}
export default Header