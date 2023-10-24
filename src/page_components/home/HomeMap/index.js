import "./styles.scss"

import React from "react"

import Button from "components/Button"
import MapUk from "components/MapUk"

const HomeMap = ({ setIsModalQuoteOpen }) => {
  return (
    <section className="home-map">
      <div className="home-map__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="home-map__left">
                <p className="section__title">FIND LOCAL EXPERT</p>
                <h2 className="section-heading">
                  <span>Local Expert</span>
                </h2>
                <p className="section__subtitle">The Ultimate Floor Sanding</p>
                <p className="section__text">
                  Our commitment to excellence is amplified by our dedication to
                  finding and nurturing highly skilled local contractors. These
                  experts, armed with specialized training and certifications,
                  form the backbone of our nationwide network. When you choose
                  us, you're selecting the best in the business, right in your
                  local area.
                </p>
                <div className="home-map__buttons">
                  <Button to="/local-experts/">FIND OUT MORE</Button>
                  <Button
                    className="button-dark"
                    onClick={() => setIsModalQuoteOpen(true)}
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-map__right">
                <div className="row">
                  <div className="col-12 home-map__right--wrapper">
                    <MapUk />
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

export default HomeMap
