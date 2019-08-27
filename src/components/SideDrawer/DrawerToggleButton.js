import React from 'react'
import toggleStyles from './DrawerToggleButton.module.scss'

const DrawerToggleButton = props => {
    return (
        <div className={toggleStyles.visible}>
            <button className={toggleStyles.toggleButton} onClick={props.click}>
                <div className={toggleStyles.toggleButtonLine}></div>
                <div className={toggleStyles.toggleButtonLine}></div>
                <div className={toggleStyles.toggleButtonLine}></div>
            </button>
        </div>
    )
}

export default DrawerToggleButton
