import './Card.scss'
import propTypes from 'prop-types'

function Card({cover, title}) {
    return (
        <div className='card'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}

Card.propTypes = {
    cover: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
}

export default Card