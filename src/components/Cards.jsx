import Card from './Card'
import data from '../data/data.json'
import './Cards.scss'
import { Link } from 'react-router-dom'

function Cards() {
    return (
        <div className="cards">
            {data.map((housing) => (
                <Link key={housing.id} to={`/housing/${housing.id}`}>
                    <Card
                        cover={housing.cover}
                        title={housing.title}
                    />
                </Link>
            ))}
        </div>
    )
}
export default Cards