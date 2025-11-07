import './HousingTitle.scss'

function HousingTitle({title, location}) {
    return (
        <div className='housingTitleContainer'>
            <h1 className='housingTitleContainer__title'>{title}</h1>
            <span className='housingTitleContainer__location'>{location}</span>
        </div>
    )
}
export default HousingTitle