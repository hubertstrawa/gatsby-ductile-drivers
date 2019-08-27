import React from "react"
import Layout from "../components/Layout"
import contactStyles from "../styles/Contact.module.scss"

const ContactPage = () => {
  return (
    <Layout>
      <div className={contactStyles.box}>
        <div className={contactStyles.boxTop}>
          <p className={contactStyles.paragraph}>
            Get in touch with us at xxx@xxx.com or use the contact form
            below.
          </p>
        </div>
        <div className={contactStyles.boxBottom}>
            <form className={contactStyles.form} action="https://formspree.io/ductiledrivers@gmail.com" method="POST">
                <div className={contactStyles.formTop}>
                   <input className={contactStyles.input} id="name" type="text" placeholder="Your Name" required/>
                   <input className={contactStyles.input} id="email" type="email" placeholder="Your Email" required/>
                </div>
                <div className={contactStyles.formBottom}>
                    <textarea className={contactStyles.textarea} name="Message" cols="30" rows="5" placeholder="Message" required></textarea>
                    <button className={contactStyles.btn} type="submit">Send</button>
                </div>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
