import './Host.scss';
import propTypes from 'prop-types'

function Host({name, picture}) {
    return (
        <div className='hostContainer'>
            <span>
                {name.split(' ')[0]}<br />
                {name.split(' ')[1]}
            </span>
            <img src={picture} alt="Host's picture" />
        </div>
    )
}

Host.propTypes = {
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
}

export default Host