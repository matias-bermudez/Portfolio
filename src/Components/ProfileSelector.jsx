import './Styles/ProfileSelector.css'
import { useNavigate } from 'react-router-dom'
import profileRed from '../assets/profile-pic-red.jpg'
import { useState } from 'react'

function ProfileSelector () {
    const [animation , setAnimation] = useState(false)
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        setAnimation(true)
    }

    const handleAnimationEnd = () => {
        navigate('/home')
    }

    return (
        <section className='full-screen'>
            <h1>Who is there?</h1>
            <div className='profiles'>
                <button onClick={handleClick}>
                    <img src={profileRed} alt="Profile picture" />
                    <h3>Matias</h3>
                </button>
            </div>
            {
                animation && ( <div className='outro-animation' onAnimationEnd={handleAnimationEnd} ></div>)
            }
        </section>
    )
}

export default ProfileSelector