import {useState, useEffect} from 'react'
import Notification from './Notification'

function NotificationsList( {onClose} ) {
    const arrNotifications = [
        {id: 1, title: 'New Projects', img: '', link: 'projects'},
        {id: 2, title: 'Latest Certifications', img: '', link: 'certifications'}
    ]

    

    return (
        <div>
            <h3>Notifications</h3>
            {
                arrNotifications.map((n) => (
                    <Notification key={n.id} notif={n}/>
                ))
            }
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default NotificationsList