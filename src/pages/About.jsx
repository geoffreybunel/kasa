import Collapse from "../components/Collapse"
import Banner from "../components/Banner"
import data from '../data/collapse.json'

function About() {
    return (
        <>
            <Banner className = "Banner__About" text=""/>
            {data.map(item => (
                <Collapse key={item.title} title={item.title} description={item.description} />
            ))}
        </>
    )
}
export default About