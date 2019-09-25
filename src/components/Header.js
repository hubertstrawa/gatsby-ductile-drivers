import React from 'react'
import Navigation from './Navigation'
import headerStyles from './Header.module.scss'
import Logo from '../assets/logo.png'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton'

const Header = props => {
    return (
        <header className={headerStyles.header}>
            <img src={Logo} height="100px" style={{marginTop: '1.4rem'}} alt=""/>
            <Navigation />
            <DrawerToggleButton click={props.drawerClickHandler}/>
            <a className={headerStyles.signUp} href="https://www.ductiledrivers.com/">Sign Up</a>
        </header>
    )
}

export default Header
