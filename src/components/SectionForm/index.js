import "./styles.scss"

import React from "react"

import ContactForm from "components/ContactForm"
import MapUk from "../MapUk"

const SectionForm = () => {
  return (
    <section className="home-contact">
      <div className="home-contact__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="home-contact__img">
                <MapUk />
              </div>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="home-contact__right">
                <h3 className="section-heading">
                  Get In <span>Touch</span>
                </h3>
                <div className="home-contact__info">
                  <img src={require("assets/icons/phone.svg").default} alt="" />
                  <a href="tel:03300272324">03300 272324</a>
                </div>
                <div className="home-contact__info">
                  <img src={require("assets/icons/mail.svg").default} alt="" />
                  <a href="mailto:info@ultimatefloorsanding.co.uk">
                    info@ultimatefloorsanding.co.uk
                  </a>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionForm
