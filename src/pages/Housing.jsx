import { useParams } from 'react-router-dom'
import './Housing.scss'
import data from '../data/data.json'
import Slideshow from '../components/Slideshow';
import HousingTitle from '../components/HousingTitle';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Error from '../pages/Error'

function Housing() {
    const { id } = useParams();
    const housing = data.find(item => item.id === id);

    if (!housing) {
        return (
            <Error />
        )
    }

    const color = {
        grey: "#E3E3E3",
        red: "#FF6060"
    }
    const stars = Array(5).fill(0)

    return (
        <>
            <Slideshow pictures={housing.pictures} />
            <div className='housingInfos'>
                <div>
                    <HousingTitle title={housing.title} location={housing.location} />
                    <div className='housingInfos__tags'>
                        {housing.tags.map((tags, index) => (
                            <Tags key={index} tags={tags} />
                        ))}
                    </div>
                </div>
                <div className='housingInfos__Host__Rating'>
                    <div>
                        <Host name={housing.host.name} picture={housing.host.picture} />
                    </div>
                    <div className='housingInfos__rating'>
                        {stars.map((_,index) => {
                            return (
                                <Rating 
                                    key={index}
                                    color={(housing.rating) > index ? color.red : color.grey}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='housingDropdowns'>
                <div className='housingDropdowns__container'>
                    <Collapse title="Description" description={housing.description} className='housingDropdowns__container--1' />
                </div>
                <div className='housingDropdowns__container'>
                    <Collapse title="Équipements" description={housing.equipments} className='housingDropdowns__container--2' />
                </div>
            </div>
        </>
    )
}
export default Housing