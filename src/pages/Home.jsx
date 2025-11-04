import Hero from "../components/Hero"
import HousingGallery from "../components/HousingGallery"

function Home() {
    return (
        <div>
            <Hero className = "Hero__Home" text="Chez vous, partout et ailleurs"/>
            <HousingGallery />
        </div>
    )
}
export default Home