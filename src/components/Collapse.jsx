import './Collapse.scss'
import { useState } from 'react';
import propTypes from 'prop-types'

function Collapse({title, description}) {
    const [dropdownToggled, setdropdownToggled] = useState(false);

    return (
        <>
            <div className='dropdown'>
                <h3>{title}</h3>
                <img 
                    src="../src/assets/arrow.png" 
                    alt="arrow" 
                    className={dropdownToggled ? 'rotated' : ''}
                    onClick={() => {setdropdownToggled(!dropdownToggled)}} />
            </div>

            <div className={`options ${dropdownToggled ? 'visible' : ''}`}>
                {Array.isArray(description) ? (
                    <ul>
                        {description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </>
    )
}

Collapse.propTypes = {
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
}

export default Collapse