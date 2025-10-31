import './Footer.scss'
import LogoBlanc from '../assets/LOGO-blanc.png'

function Footer() {
    return (
        <div className='footer'>
            <img src={LogoBlanc} alt="Logo Kasa blanc" />
            <span>© 2020 Kasa. All rights reserved</span>
        </div>
    )
}
export default Footer