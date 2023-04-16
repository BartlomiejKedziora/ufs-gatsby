import "./styles.scss"

import React from "react"

const AboutContent = () => {
  return (
    <section className="about-content">
      <div className="about-content__wrapper">
        <div className="container">
          <div className="about-content__row odd">
            <div className="about-content__row-img">
              <img src={require("assets/images/Image.jpg").default} alt="" />
            </div>
            <div className="about-content__row-text">
              <h2 className="section-heading">Our story</h2>
              <p className="section__subtitle">Lorem Ipsum Dolor Sit Amet</p>
              <p className="section__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-content__row">
            <div className="about-content__row-img">
              <img src={require("assets/images/Image.jpg").default} alt="" />
            </div>
            <div className="about-content__row-text">
              <h2 className="section-heading">Our Mission</h2>
              <p className="section__subtitle">Lorem Ipsum Dolor Sit Amet</p>
              <p className="section__text">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
