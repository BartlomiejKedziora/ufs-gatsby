import "./styles.scss"

import React from "react"

import Button from "components/Button"
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
                <form action="submit" className="home-contact__form">
                  <div className="home-contact__form--row">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="home-contact__form--row">
                    <input type="text" placeholder="Post code" />
                    <input type="text" placeholder="Phone" />
                  </div>
                  <textarea
                    className="home-contact__textarea"
                    rows="4"
                    placeholder="Write your message here"
                  />
                  <Button>Send</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionForm
