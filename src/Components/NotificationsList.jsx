import {useState, useEffect} from 'react'
import './Styles/NotificationsList.css'
import Notification from './Notification'
import react from '../assets/react.png'
import ecommerce from '../assets/ecommerce.png'

function NotificationsList( {onClose} ) {
    const arrNotifications = [
        {id: 1, title: 'New Projects', img: ecommerce, link: 'projects'},
        {id: 2, title: 'Latest Certifications', img: react, link: 'certifications'}
    ]

    

    return (
        <section className='notifications-list'>
            {
                arrNotifications.map((n) => (
                    <Notification key={n.id} notif={n}/>
                ))
            }
        </section>
    )
}

export default NotificationsList