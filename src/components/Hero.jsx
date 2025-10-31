import './Hero.scss'

function Hero({className, text}) {
    return (
        <div className={className == "Hero__Home" ? "Hero__Home" : "Hero__About" }>
            <span>{text}</span>
        </div>
    )
}
export default Hero