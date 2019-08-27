import React from 'react'
import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import spotifyIcon from '../assets/icons/spotify.svg';
import youtubeIcon from '../assets/icons/youtube.svg';
import appleincIcon from '../assets/icons/appleinc.svg';
import socialStyles from './SocialIcons.module.scss'

const SocialIcons = () => {

  return (
    <div className={socialStyles.wrapper}>
      <img className={socialStyles.icon} src={facebookIcon} />
      <img className={socialStyles.icon} src={twitterIcon} />
      <img className={socialStyles.icon} src={instagramIcon} />
      <img className={socialStyles.icon} src={youtubeIcon} />
      <img className={socialStyles.icon} src={spotifyIcon} />
      <img className={socialStyles.icon} src={appleincIcon} />
    </div>
  );
};

export default SocialIcons;
