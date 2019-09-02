import React from "react"
import Layout from '../components/Layout'
import '../styles/index.scss'
import indexStyles from '../styles/Index.module.scss'
import SocialIcons from '../components/SocialIcons'
import albumCover from '../assets/cover.png'

const IndexPage = () => {

    let arr = [];
    return (
        <Layout>
            <div className={indexStyles.wrapper}>
                <img className={indexStyles.album} src={albumCover} alt="Ductile Drivers album cover"/>
                <a className={indexStyles.btn} href="https://distrokid.com/hyperfollow/ductiledrivers/lack" target="_blank">Listen</a>
                <SocialIcons />
            </div>
        </Layout>
    )
}

export default IndexPage;