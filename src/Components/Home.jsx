import './Styles/Home.css'
import background from '../assets/code.webp'
import CV from '../assets/CV-MatiasBermudez-ENG.pdf'
import Navbar from './Navbar'

function Home( {title, txt}) {
    return (
        <section className="home">
            <Navbar />
            <div className="text-home">
                <div className='sub-title'>
                    <h2 className='letter'>M</h2>
                    <p>PORTFOLIO</p>
                </div>
                <h1>{title}</h1>
                <p>{txt}</p>
                <div className='buttons'>
                    <a className='cv' href={CV} download='CV-MatiasBermudez-ENG.pdf'>
                        <button> 📋​​ Download CV</button>
                    </a>
                    <a className='contact' href="">
                        <button> ! Contact</button>
                    </a>
                </div>
            </div>
            <img src={background} alt="profile photo" className='background'/>

        </section>
    )
}

export default Home