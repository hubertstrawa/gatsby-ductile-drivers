import React from "react"
import facebookIcon from "../assets/icons/facebook.svg"
import twitterIcon from "../assets/icons/twitter.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import spotifyIcon from "../assets/icons/spotify.svg"
import youtubeIcon from "../assets/icons/youtube.svg"
import appleincIcon from "../assets/icons/appleinc.svg"
import socialStyles from "./SocialIcons.module.scss"

const SocialIcons = () => {
  return (
    <div className={socialStyles.wrapper}>
      <a href="https://www.facebook.com/ductiledrivers/" target="_blank">
        <img className={socialStyles.icon} src={facebookIcon} />
      </a>
      <img className={socialStyles.icon} src={twitterIcon} />
      <a href="https://www.instagram.com/ductiledrivers/" target="_blank">
        <img className={socialStyles.icon} src={instagramIcon} />
      </a>
      <img className={socialStyles.icon} src={youtubeIcon} />
      <a
        href="https://open.spotify.com/artist/0jO5u6hVZiwr0GKu3H4ywQ/"
        target="_blank"
      >
        <img className={socialStyles.icon} src={spotifyIcon} />
      </a>
      <img className={socialStyles.icon} src={appleincIcon} />
    </div>
  )
}

export default SocialIcons
