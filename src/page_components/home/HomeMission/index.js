import "./styles.scss"

import React from "react"

import Button from "components/Button"

const HomeMission = ({ setIsModalQuoteOpen }) => {
  return (
    <section className="home-mission">
      <div className="home-mission__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="home-mission__left">
                <p className="section__title">COMPANY MISSION STATEMENT</p>
                <h2 className="section-heading">
                  Our <span>Mission</span>
                </h2>
                <p className="section__text">
                  At The Ultimate Floor Sanding Company, our mission revolves
                  around the belief in the synergistic harmony of local
                  contractors, bolstered by a national brand, and in partnership
                  with an international manufacturer. This synergy provides our
                  customers with unwavering confidence and peace of mind. Our
                  journey since 2011 is a testament to the broad consensus that
                  this approach is a resounding success.
                </p>
                <div className="home-mission__buttons">
                  <Button to="/about/">FIND OUT MORE</Button>
                  <Button
                    className="button-dark"
                    onClick={() => setIsModalQuoteOpen(true)}
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div className="home-mission__right">
                <div className="row">
                  <div className="col-7">
                    <div className="home-mission__img">
                      <img
                        src={
                          require("assets/images/home/home-mission1.jpg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="home-mission__img">
                      <img
                        src={
                          require("assets/images/home/home-mission3.jpg")
                            .default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="home-mission__img">
                      <img
                        src={
                          require("assets/images/home/home-mission2.jpg")
                            .default
                        }
                        alt=""
                      />
                    </div>
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

export default HomeMission
