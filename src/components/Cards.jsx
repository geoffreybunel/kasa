import Card from './Card'
import data from '../data/data.json'
import './Cards.scss'

function Cards() {
    return (
        <div className="cards">
            {data.map((housing, index) => (
                <Card 
                    key={`${housing.title}-${index}`}
                    cover={housing.cover}
                    title={housing.title}
                />
            ))}
        </div>
    )
}
export default Cards