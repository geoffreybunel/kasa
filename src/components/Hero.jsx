import './Hero.scss'
import propTypes from 'prop-types'

function Hero({className, text}) {
    return (
        <div className={className == "Hero__Home" ? "Hero__Home" : "Hero__About" }>
            <span>{text}</span>
        </div>
    )
}

Hero.propTypes = {
    className: propTypes.string,
    text: propTypes.string,
}

export default Hero