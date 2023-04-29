import "./styles.scss"

import React from "react"

import Button from "components/Button"
import IconFive from "components/Icons/IconFive"

const HomeGuarant = ({ setIsModalQuoteOpen }) => {
  return (
    <section className="home-guarant">
      <div className="home-guarant__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="home-guarant__left">
                <div className="row">
                  <div className="col-12">
                    <div className="home-guarant__img">
                      <img
                        src={
                          require("assets/images/home/guarantee.jpg").default
                        }
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="home-guarant__right--wrapper">
                <div className="home-guarant__right">
                  <p className="section__title">OUR UNIQUE SELLING POINTS</p>
                  <h2 className="section-heading">Ultimate Guarantees</h2>
                  <p className="section__subtitle">
                    The Ultimate Floor Sanding
                  </p>
                  <p className="section__text">
                    The Ultimate Floor Sanding Company™ is a highly professional
                    organisation, which focuses on giving our customers complete
                    peace of mind – every time! Providing “The Ultimate”
                    customer service is so important to us that we give ALL our
                    floor sanding customers the peace of mind of the Unique 5
                    Point Ultimate Guarantee.
                  </p>
                  <div className="home-guarant__buttons">
                    <Button>FIND OUT MORE</Button>
                    <Button
                      className="button-dark"
                      onClick={() => setIsModalQuoteOpen(true)}
                    >
                      GET A QUOTE
                    </Button>
                  </div>
                </div>
                <div className="home-guarant__five">
                  <IconFive />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeGuarant
