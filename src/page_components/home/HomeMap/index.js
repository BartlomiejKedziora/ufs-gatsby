import "./styles.scss"

import React from "react"

import Button from "components/Button"

const HomeMap = () => {
  return (
    <section className="home-map">
      <div className="home-map__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="home-map__left">
                <p className="home-map__title">FIND LOCAL EXPERT</p>
                <h2 className="section-heading">
                  <span>Local Expert</span>
                </h2>
                <p className="section__subtitle">The Ultimate Floor Sanding</p>
                <p className="home-map__text">
                  Neque porro quisquam est, qui dolorem ipsum quia anumquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
                <div className="home-map__buttons">
                  <Button>FIND OUT MORE</Button>
                  <Button className="button-dark">GET A QUOTE</Button>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-map__right">
                <div className="row">
                  <div className="col-12">
                    <div className="home-map__img">
                      <img
                        src={require("assets/images/home/mapa.jpg").default}
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

export default HomeMap
