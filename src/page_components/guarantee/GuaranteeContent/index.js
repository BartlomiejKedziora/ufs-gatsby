import "./styles.scss"

import React from "react"

import Divider from "components/Divider"

import IconFive from "components/Icons/IconFive"

const GuaranteeContent = () => {
  const numbers = [
    {
      number: "1",
      text: "TREAT YOU COURTEOUSLY & PROFESSIONALLY",
    },
    {
      number: "2",
      text: "TURN UP WHEN WE SAY WE WILL",
    },
    {
      number: "3",
      text: "FINISH ON TIME",
    },
    {
      number: "4",
      text: "NOT CREATE OR LEAVE ANY MESS (DUST FREE SYSTEMS USED)",
    },
    {
      number: "5",
      text: "RETURN FREE OF CHARGE TO CORRECT ANY IMPERFECTIONS",
    },
  ]

  return (
    <section className="guarantee-content">
      <div className="guarantee-content__wrapper">
        <div className="container">
          <div className="guarantee-content__five">
            <div className="guarantee-content__five-left">
              <div className="container">
                <div className="guarantee-content__five-content">
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
                  <div className="guarantee-content__five-icon">
                    <IconFive />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="guarantee-content__five-right">
            <img src={require("assets/images/photo1.jpg").default} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="guarantee-content__numbers">
            {numbers.map((item, index) => {
              return (
                <div className="guarantee-content__number" key={index}>
                  <p className="guarantee-content__number-item">
                    {item.number}
                  </p>
                  <p className="guarantee-content__number-text">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="guarantee-content__row--wrapper">
          <div className="guarantee-content__row odd">
            <div className="container">
              <div className="guarantee-content__row-img">
                <img src={require("assets/images/photo2.jpg").default} alt="" />
              </div>
              <div className="guarantee-content__row-text">
                <div className="container">
                  <div className="guarantee-content__row-content">
                    <h2 className="section-heading">
                      What makes our guarantee The Ultimate?
                    </h2>
                    <p className="section__subtitle">
                      Lorem Ipsum Dolor Sit Amet
                    </p>
                    <p className="section__text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet.
                    </p>
                    <Divider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="guarantee-content__row--wrapper">
          <div className="guarantee-content__row">
            <div className="container">
              <div className="guarantee-content__row-text">
                <div className="container">
                  <div className="guarantee-content__row-content">
                    <h2 className="section-heading">
                      What makes our guarantee The Ultimate?
                    </h2>
                    <p className="section__subtitle">
                      Lorem Ipsum Dolor Sit Amet
                    </p>
                    <p className="section__text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                      accusam et justo duo dolores et ea rebum. Stet clita kasd
                      gubergren, no sea takimata sanctus est Lorem ipsum dolor
                      sit amet. Lorem ipsum dolor sit amet,
                    </p>
                    <Divider />
                  </div>
                </div>
              </div>
              <div className="guarantee-content__row-img">
                <div className="guarantee-content__row-images">
                  <div className="guarantee-content__row-img-sm">
                    <img
                      src={require("assets/images/photo2.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="guarantee-content__row-img-sm">
                    <img
                      src={require("assets/images/photo2.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="guarantee-content__row-img-sm">
                    <img
                      src={require("assets/images/photo2.jpg").default}
                      alt=""
                    />
                  </div>
                  <div className="guarantee-content__row-img-sm">
                    <img
                      src={require("assets/images/photo2.jpg").default}
                      alt=""
                    />
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

export default GuaranteeContent
