import './Styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import name from '../assets/name.png';

function Navbar() {
    return (

    <nav className='navbar'>
        <ul>
            <li>
                <img src={name} alt="" className='name-tit' />
            </li>
            <li>
                <NavLink 
                    to='/'
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
    </nav>
    )
}

export default Navbar