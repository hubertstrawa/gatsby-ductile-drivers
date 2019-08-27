import React from "react"
import { Link } from "gatsby"
import drawerStyles from "./SideDrawer.module.scss"
import SocialIcons from '../SocialIcons'

const SideDrawer = props => {
  let drawerClasses = [drawerStyles.sideDrawer]
  if (props.show) {
    drawerClasses = [drawerStyles.sideDrawer, drawerStyles.open]
  }

  return (
    <div>
      {props.show ? <div
        className={drawerStyles.backdrop}
        onClick={props.backdropHandler}
      ></div> : null}
      
      <nav className={drawerClasses.join(" ")}>
        <ul className={drawerStyles.list}>
          <li>
            <Link className={drawerStyles.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={drawerStyles.link} to="/photos">
              Photos
            </Link>
          </li>
          <li>
            <Link className={drawerStyles.link} to="/biography">
              Biography
            </Link>
          </li>
          <li>
            <Link className={drawerStyles.link} to="/contact">
              Contact
            </Link>
          </li>
          <li style={{marginTop: '2rem'}}>
            <Link className={drawerStyles.link} to="/contact">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default SideDrawer
