import Collapse from "../components/Collapse"
import Hero from "../components/Hero"
import data from '../data/collapse.json'

function About() {
    return (
        <div>
            <Hero className = "Hero__About" text=""/>
            {data.map(item => (
                <Collapse key={item.title} title={item.title} description={item.description} />
            ))}
        </div>
    )
}
export default About