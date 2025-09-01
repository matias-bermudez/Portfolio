import js from '../assets/js.png'
import devweb from '../assets/webdev.png'
import react from '../assets/react.png'
import './Styles/Certifications.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'

function Certifications () {
    return (
        <section>
            <Navbar />
            <Home 
                title='My  achivments' 
                txt='These are some of the certifications I’ve earned along the way, showing my curiosity and dedication to keep learning new tools'
            />
            <div className='page'>
                <h2>My Certifications</h2>
                <div className='carrousel'>
                    <img src={devweb} alt="" />
                    <img src={js} alt="" />
                    <img src={react} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Certifications