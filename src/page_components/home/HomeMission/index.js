import "./styles.scss"

import React from "react"

import Button from "components/Button"

const HomeMission = () => {
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
                <p className="section__subtitle">The Ultimate Floor Sanding</p>
                <p className="section__text">
                  Neque porro quisquam est, qui dolorem ipsum quia anumquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
                <div className="home-mission__buttons">
                  <Button>FIND OUT MORE</Button>
                  <Button className="button-dark">GET A QUOTE</Button>
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
