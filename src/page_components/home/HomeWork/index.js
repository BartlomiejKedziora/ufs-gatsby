import "./styles.scss"

import React from "react"

import Button from "components/Button"

const HomeWork = ({ setIsModalQuoteOpen }) => {
  return (
    <section className="home-work">
      <div className="home-work__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="home-work__left">
                <h2 className="section-heading">
                  How <span>We Work</span>
                </h2>
                <p className="section__subtitle">The Ultimate Floor Sanding</p>
                <p className="section__text">
                  At The Ultimate Floor Sanding Company™, our approach is simple
                  yet effective. We've established a nationwide affiliates
                  program that collaborates with highly trained and certified
                  local contractors. This harmonious partnership ensures that
                  our customers benefit from unmatched expertise, quality, and
                  peace of mind in every project we undertake.
                </p>
                <div className="home-work__buttons">
                  {/* <Button>FIND OUT MORE</Button> */}
                  <Button
                    className="button-dark"
                    onClick={() => setIsModalQuoteOpen(true)}
                  >
                    GET A QUOTE
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
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
