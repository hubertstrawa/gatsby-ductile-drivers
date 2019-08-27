import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import SideDrawer from './SideDrawer/SideDrawer'

const Layout = (props) => {
    const [sideDrawerOpen, setDrawerOpen] = useState(false);

    const drawerToggleClickHandler = () => {
        setDrawerOpen(!sideDrawerOpen);
    }

    const backdropClickHandler = () => {
        setDrawerOpen(false);
    }

    return (
        <div>
            <SideDrawer show={sideDrawerOpen} backdropHandler={backdropClickHandler}/>
            {/* {sideDrawerOpen ? <SideDrawer show={sideDrawerOpen} backdropHandler={backdropClickHandler}/> : null} */}
            <Header drawerClickHandler={drawerToggleClickHandler} />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
