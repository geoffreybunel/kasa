import { useParams } from 'react-router-dom'
import './Housing.scss'
import data from '../data/data.json'
import Slideshow from '../components/Slideshow';

function Housing() {
    const { id } = useParams();
    const housing = data.find(item => item.id === id);

    if (!housing) {
        return <p>Logement introuvable 😕</p>;
    }

    return (
        <div className='housing__container'>
            <Slideshow pictures={housing.pictures} />
        </div>
    )
}
export default Housing