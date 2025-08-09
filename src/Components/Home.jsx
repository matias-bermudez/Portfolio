import './Styles/Home.css'
import profilePhoto from '../assets/profilePhoto.jpg'
function Home() {
    return (
        <section className="home">
            <div className="text-home">
                <h1>Matias Bermudez</h1>
                <h2>Web Developper</h2>
            </div>
            <img src={profilePhoto} alt="profile photo" />
        </section>
    )
}

export default Home