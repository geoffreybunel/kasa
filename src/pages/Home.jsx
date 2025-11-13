import Hero from "../components/Hero"
import Cards from "../components/Cards"

function Home() {
    return (
        <>
            <Hero className = "Hero__Home" text="Chez vous, partout et ailleurs"/>
            <Cards />
        </>
    )
}
export default Home