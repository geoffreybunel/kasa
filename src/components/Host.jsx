import './Host.scss';

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
export default Host