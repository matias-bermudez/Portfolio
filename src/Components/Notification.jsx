import { Link } from 'react-router-dom'
import './Styles/Notification.css'

function Notification( {notif} ) {
    return (
        <Link className='notification' to={`/${notif.link}`}>
            <span className='img-container'>
                <img src={notif.img}></img>
            </span>
            <h1>{notif.title}</h1>
        </Link>
    )
}

export default Notification