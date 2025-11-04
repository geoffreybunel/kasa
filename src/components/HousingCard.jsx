import './HousingCard.scss'

function HousingCard({cover, title}) {
    return (
        <div className='card'>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </div>
    )
}
export default HousingCard