import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import NotificationsList from './NotificationsList.jsx'
import name from '../assets/name.png';
import bell from '../assets/bell.png'
import search from '../assets/search.png'
import { useState, useEffect } from 'react';

function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [notifState, setNotif] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])
    return (

    <nav className={`navbar ${scroll ? 'navbar-scrolled' : ''}`}>
        <ul>
            <li>
                <img src={name} alt="" className='name-tit' />
            </li>
            <li>
                <NavLink 
                    to='/home'
                    className={({ isActive }) => isActive ? 'active' : ''}
                > 
                    Home
                </NavLink> 
            </li>
            <li>
                <NavLink 
                    to='/AboutMe'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    About Me
                </NavLink>
            </li>

            <li><NavLink 
                    to='/projects'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Projects
                </NavLink>
            </li>

            <li>
                <NavLink 
                    to='/certifications'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Certifications
                </NavLink>
            </li>

            <li>
                <NavLink 
                    to='/contact'
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Contact
                </NavLink>
            </li>
        </ul>

        <div>
            <button>
                <img src={search} alt="" />
            </button>
            <button onClick={() => setNotif(actState => !actState)}>
                <img src={bell} alt="" />
            </button>
            {
                notifState && ( <NotificationsList onClose={() => setNotif(false)} /> )
            }
        </div>
    </nav>
    )
}

export default Navbar