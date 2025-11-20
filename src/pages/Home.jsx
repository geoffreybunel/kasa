import Banner from "../components/Banner"
import Cards from "../components/Cards"

function Home() {
    return (
        <>
            <Banner className = "Banner__Home" text="Chez vous, partout et ailleurs"/>
            <Cards />
        </>
    )
}
export default Home