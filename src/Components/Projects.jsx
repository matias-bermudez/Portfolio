import Home from '../Components/Home.jsx'
import '../Components/Styles/Projects.css'
import catering from '../assets/catering.png'
import ecommerce from '../assets/ecommerce.png'
import truco from '../assets/truco.png'
import ufc from '../assets/ufc.png'
import './Styles/Certifications.css'
function Projects() {
    return (
        <section>
            <Home 
                title='My Projects'
                txt='Here are some projects where I applied my frontend skills to build responsive, user-friendly, and visually appealing applications.'
            />
            <div className='page'>
                <h2>My</h2>
                <div className='carrousel'>
                    <img src={ecommerce} alt="" />
                    <img src={truco} alt="" />
                    <img src={ufc} alt="" />
                    <img src={catering} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Projects