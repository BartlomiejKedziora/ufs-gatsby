import "./styles.scss"

import React from "react"

import Button from "components/Button"

const HomeWork = () => {
  return (
    <section className="home-work">
      <div className="home-work__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="home-work__left">
                <p className="hsection__title">COMPANY INSTRUCTIONAL VIDEO</p>
                <h2 className="section-heading">
                  How <span>We Work</span>
                </h2>
                <p className="section__subtitle">The Ultimate Floor Sanding</p>
                <p className="section__text">
                  Neque porro quisquam est, qui dolorem ipsum quia anumquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
                <div className="home-work__buttons">
                  <Button>FIND OUT MORE</Button>
                  <Button className="button-dark">GET A QUOTE</Button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-work__right">
                <div className="row">
                  <div className="col-12">
                    <div className="home-work__img">
                      <img
                        src={require("assets/images/home/video.jpg").default}
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

export default HomeWork
