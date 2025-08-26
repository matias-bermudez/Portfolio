import { Link } from 'react-router-dom'

function Notification( {notif} ) {
    return (
        <Link to={`/${notif.link}`}>
            <h1>{notif.title}</h1>
            <img src={notif.img}></img>
        </Link>
    )
}

export default Notification