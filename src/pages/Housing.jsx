import { useParams } from 'react-router-dom'
import './Housing.scss'
import data from '../data/data.json'

function Housing() {
    const { id } = useParams();
    const housing = data.find(item => item.id === id);

    if (!housing) {
        return <p>Logement introuvable 😕</p>;
    }

    return (
        <div>
            
        </div>
    )
}
export default Housing