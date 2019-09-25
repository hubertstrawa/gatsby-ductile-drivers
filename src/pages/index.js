import React from "react"
import Layout from "../components/Layout"
import "../styles/index.scss"
import indexStyles from "../styles/Index.module.scss"
import SocialIcons from "../components/SocialIcons"
import albumCover from "../assets/cover.png"
import { Helmet } from "react-helmet"
import favicon from '../assets/favicon.png'

const IndexPage = () => {
  return (
    <Layout>
      <Helmet
        title="Ductile Drivers"
        meta={[
          {
            name: "description",
            content:
              'Ductile Drivers to polski zespół grający szeroko pojętą muzykę rockową Grupa zadebiutowała singlem The Man Who Stole My Ice'
          },
          {
            name: "keywords",
            content:
              'ductile drivers, ductile drivers jaroslaw, ductile drivers band',
          },
        ]}
        link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
      />
      <div className={indexStyles.wrapper}>
        <img
          className={indexStyles.album}
          src={albumCover}
          alt="Ductile Drivers album cover"
        />
        <a
          className={indexStyles.btn}
          href="https://distrokid.com/hyperfollow/ductiledrivers/lack"
          target="_blank"
          rel="noopener noreferrer"
        >
          Listen
        </a>
        <SocialIcons />
      </div>
    </Layout>
  )
}

export default IndexPage
