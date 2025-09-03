import './Styles/Contact.css'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'

function Contact() {
    return (
        <section className='contact-page'>
            <Navbar />
            <Home title={`Let's work together`} txt={'Contact Me!'}/>
            
            <div className='page'>
                <h1>Contact options</h1> 
                <div className='carrousel'>
                    <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=matias.bermudez.munoz@gmail.com&su=Contacto&body=Hola, te escribimos de [] y nos gustaria conocerte!" target='_blank'>
                        <button>Contact by email</button>
                    </a>
                    <a href="https://wa.me/59891969322" target="_blank">
                        <button>Contact by Whatsapp</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact