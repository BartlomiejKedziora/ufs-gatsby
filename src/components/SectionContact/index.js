import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const SectionContact = () => {
  return (
    <section className="contact">
      <div className="container-fluid">
        <div className="contact__bckg">
          <div className="container">
            <div className="contact__wrapper">
              <div className="contact__content">
                <p className="section-heading">
                  <span>Contact Us</span> Today
                </p>
                <p className="section__subtitle">
                  Start Your Journey To Perfect Wooden Floors Now
                </p>
                <p className="section__text">
                  Fill in our form and we'll be in touch. Alternatively, call...
                </p>
              </div>
              <div className="contact__blocks">
                <div className="row">
                  <div className="col-4">
                    <Link to="/contact/">
                      <div className="contact__block">
                        <div className="contact__block-icon">
                          <img
                            src={require("assets/icons/pencil.svg").default}
                            alt=""
                          />
                        </div>
                        <p className="contact__block-title">Say Hello</p>
                        <p className="contact__block-cta">Fill our form</p>
                      </div>
                    </Link>
                  </div>
                  <div className="col-4">
                    <a href="tel:03300272324">
                      <div className="contact__block">
                        <div className="contact__block-icon">
                          <img
                            src={require("assets/icons/phone.svg").default}
                            alt=""
                          />
                        </div>
                        <p className="contact__block-title">Call us</p>
                        <p className="contact__block-cta">03300 272324</p>
                      </div>
                    </a>
                  </div>
                  <div className="col-4">
                    <Link to="/local-experts/">
                      <div className="contact__block">
                        <div className="contact__block-icon">
                          <img
                            src={
                              require("assets/icons/pin-contact.svg").default
                            }
                            alt=""
                          />
                        </div>
                        <p className="contact__block-title">Find local</p>
                        <p className="contact__block-cta">expert</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact
