import React from 'react'
import {Link} from 'gatsby'
import navigationStyles from './Navigation.module.scss'

const Navigation = () => {
    return (
            <ul className={navigationStyles.list}>
                <li><Link className={navigationStyles.link} to="/">Home</Link></li>
                <li><Link className={navigationStyles.link} to="/photos">Photos</Link></li>
                <li><Link className={navigationStyles.link} to="/biography">Biography</Link></li>
                <li><Link className={navigationStyles.link} to="/contact">Contact</Link></li>
            </ul>
    )
}

export default Navigation
