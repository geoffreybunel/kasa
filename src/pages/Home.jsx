import Hero from "../components/Hero"
import Cards from "../components/Cards"

function Home() {
    return (
        <div>
            <Hero className = "Hero__Home" text="Chez vous, partout et ailleurs"/>
            <Cards />
        </div>
    )
}
export default Home