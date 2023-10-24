import "./styles.scss"

import React from "react"

import Button from "components/Button"
import { Link } from "gatsby"

const HomeServices = ({ setIsModalQuoteOpen }) => {
  return (
    <section className="home-services">
      <div className="home-services__wrapper">
        <div className="container">
          <div className="container--narrow">
            <div className="home-services__content">
              <h2 className="section-heading">
                Our <span>Services</span>
              </h2>
              <p className="section__subtitle">The Ultimate Floor Sanding</p>
              <p className="section__text">
                The Ultimate Floor Sanding Company has a network of expert floor
                sanding professionals across the UK. We are the largest network
                of professional floor sanding contractors in the UK and Ireland.
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="home-services__left">
                  <Link to="/services/">
                    <div className="home-services__img">
                      <img
                        src={require("assets/images/home/image1.jpg").default}
                        alt=""
                      />
                      <div className="home-services__choice">domestic</div>
                    </div>
                  </Link>
                  <div className="home-services__buttons">
                    <Button to="/services/">FIND OUT MORE</Button>
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
                <div className="home-services__right">
                  <Link to="/commercial/">
                    <div className="home-services__img">
                      <img
                        src={require("assets/images/home/image2.jpg").default}
                        alt=""
                      />
                      <div className="home-services__choice">commercial</div>
                    </div>
                  </Link>
                  <div className="home-services__buttons">
                    <Button to="/commercial/">FIND OUT MORE</Button>
                    <Button
                      className="button-dark"
                      onClick={() => setIsModalQuoteOpen(true)}
                    >
                      GET A QUOTE
                    </Button>
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

export default HomeServices
