import "./styles.scss"

import React from "react"

import ContactForm from "components/ContactForm"

const ContactContent = () => {
  return (
    <section className="contact-content">
      <div className="contact-content__wrapper">
        <div className="container">
          <h2 className="section-heading">
            Get In <span>Touch</span>
          </h2>
          <p className="section__subtitle">
            Contact us now for a no obligation quote we are happy to assist you
            with any qiestion that you may have
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactContent
