import './Collapse.scss'
import { useState } from 'react';

function Collapse({title, description}) {
    const [dropdownToggled, setdropdownToggled] = useState(false);

    // function openItem() {
    //     setDropdown(true);
    // }

    // function closeItem() {
    //     setDropdown(false);
    // }
    return (
        <div>
            <div className='dropdown'>
                <h3>{title}</h3>
                <img 
                    src="src/assets/arrow.png" 
                    alt="arrow" 
                    className={dropdownToggled ? 'rotated' : ''}
                    onClick={() => {setdropdownToggled(!dropdownToggled)}} />
            </div>
            <div className={`options ${dropdownToggled ? 'visible' : ''}`}>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Collapse