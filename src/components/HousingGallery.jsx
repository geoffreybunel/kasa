import HousingCard from './HousingCard'
import data from '../data/data.json'
import './HousingGallery.scss'

function HousingGallery() {
    return (
        <div className="gallery">
            {data.map((housing, index) => (
                <HousingCard 
                    key={`${housing.title}-${index}`}
                    cover={housing.cover}
                    title={housing.title}
                />
            ))}
        </div>
    )
}
export default HousingGallery