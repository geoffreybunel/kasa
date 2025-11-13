import './Tags.scss';
import propTypes from 'prop-types';

function Tags({tags}) {
    return (
            <span className='tag'>{tags}</span>
    )
}

Tags.propTypes = {
    tags: propTypes.string
}

export default Tags