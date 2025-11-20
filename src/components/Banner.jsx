import './Banner.scss'
import propTypes from 'prop-types'

function Banner({className, text}) {
    return (
        <div className={className == "Banner__Home" ? "Banner__Home" : "Banner__About" }>
            <span>{text}</span>
        </div>
    )
}

Banner.propTypes = {
    className: propTypes.string,
    text: propTypes.string,
}

export default Banner