import React from "react"
import footerStyles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <a
        href="https://hubertstrawa.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        © 2019 hubertstrawa.io
      </a>
    </footer>
  )
}

export default Footer
