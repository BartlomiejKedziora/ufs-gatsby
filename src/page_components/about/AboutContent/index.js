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
              <p className="section__subtitle">Pioneering Our Journey</p>
              <p className="section__text">
                The Ultimate Floor Sanding Company™ initiated its path in 2011
                with a visionary mission. We sought to unite exceptional
                individuals and businesses across the UK, blending local
                expertise with global knowledge to create a nationwide brand
                founded on unwavering commitment to quality and exceptional
                customer service.
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
              <p className="section__subtitle">A History of Dedication</p>
              <p className="section__text">
                Our historical timeline is etched with a steadfast focus on
                professional growth, driven by strict adherence to industry
                standards from organizations like the NWFA and Pallmann. This
                commitment ensures that our customers find unparalleled peace of
                mind in every project we undertake. Over time, we transformed
                into the largest Floor Sanding Network in the UK and Ireland.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-content__row odd">
            <div className="about-content__row-img">
              <img src={require("assets/images/Image.jpg").default} alt="" />
            </div>
            <div className="about-content__row-text">
              <h2 className="section-heading">A Decade of Triumph</h2>
              {/* <p className="section__subtitle">Pioneering Our Journey</p> */}
              <p className="section__text">
                In commemorating over a decade of success, our history tells a
                story of growth, innovation, and satisfied customers. The
                Ultimate Floor Sanding Company™ has become synonymous with
                expertise, quality, and trust, solidifying our position as a
                leading brand. Our success lies in the collaboration of local
                contractors, supported by a national brand, and partnered with
                an international manufacturer, delivering the ultimate assurance
                to our customers.
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
              <h2 className="section-heading">A Legacy of Excellence</h2>
              {/* <p className="section__subtitle">A History of Dedication</p> */}
              <p className="section__text">
                Our history is a living testament to the enduring support and
                trust of countless individuals who share our vision. Together,
                we've achieved something truly remarkable in the world of floor
                sanding. As we eagerly anticipate many more years of excellence,
                our legacy is a testament to the power of collaboration and
                unwavering dedication.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-content__row odd">
            <div className="about-content__row-img">
              <img src={require("assets/images/Image.jpg").default} alt="" />
            </div>
            <div className="about-content__row-text">
              <h2 className="section-heading">Our Mission in Motion</h2>
              {/* <p className="section__subtitle">Pioneering Our Journey</p> */}
              <p className="section__text">
                Our rich history is a testament to the commitment we hold dear,
                as outlined in our mission statement. The synergy of local
                contractors, bolstered by a national brand, and in partnership
                with an international manufacturer, is at the heart of our
                success. This mission remains the guiding force as we move
                forward, ensuring our customers continue to enjoy unwavering
                confidence and peace of mind with every project we undertake. We
                look ahead with the same dedication that has brought us this
                far, eager to shape the future of floor sanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutContent
