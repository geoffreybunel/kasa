import './HousingTitle.scss'
import propTypes from 'prop-types'

function HousingTitle({title, location}) {
    return (
        <>
            <h1 className='housingTitle'>{title}</h1>
            <span className='housingLocation'>{location}</span>
        </>
    )
}

HousingTitle.propTypes = {
    title: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
}

export default HousingTitle