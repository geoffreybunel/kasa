import './HousingTitle.scss'
import propTypes from 'prop-types'

function HousingTitle({title, location}) {
    return (
        <div className='housingTitleContainer'>
            <h1 className='housingTitleContainer__title'>{title}</h1>
            <span className='housingTitleContainer__location'>{location}</span>
        </div>
    )
}

HousingTitle.propTypes = {
    title: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
}

export default HousingTitle