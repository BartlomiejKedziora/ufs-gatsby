import "./styles.scss"

import React from "react"

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
                    <h2 className="section-heading">The Unmatched Pledge</h2>
                    <p className="section__subtitle">
                      Lorem Ipsum Dolor Sit Amet
                    </p>
                    <p className="section__text">
                      What makes our guarantee truly "Ultimate"? The answer lies
                      in the fact that all our endorsed floor sanding experts
                      carry the prestigious Pallmann ParkettProfi certification.
                    </p>
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
                      Deciphering ParkettProfi Certification
                    </h2>
                    <p className="section__subtitle">
                      Lorem Ipsum Dolor Sit Amet
                    </p>
                    <p className="section__text">
                      ParkettProfi Certified means adherence to Pallmann, a
                      renowned German manufacturer specializing in top-tier wood
                      floor treatment and maintenance products. With a
                      remarkable history spanning over 120 years, Pallmann
                      excels in product development and innovation. They offer
                      unparalleled support and training to their certified
                      contractors.
                    </p>
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
        <div className="guarantee-content__row--wrapper">
          <div className="guarantee-content__row odd">
            <div className="container">
              <div className="guarantee-content__row-img">
                <img src={require("assets/images/photo2.jpg").default} alt="" />
              </div>
              <div className="guarantee-content__row-text">
                <div className="container">
                  <div className="guarantee-content__row-content">
                    <h2 className="section-heading">The Advantage for You</h2>
                    <p className="section__subtitle">
                      Lorem Ipsum Dolor Sit Amet
                    </p>
                    <p className="section__text">
                      Why does this matter to you? Because all our recommended
                      floor sanding professionals are rigorously trained and
                      closely supervised Pallmann Parkett Profi contractors,
                      Pallmann confidently backs our work for 2 years. This
                      means not only do we employ the finest quality products
                      and the most skilled contractors, thanks to their Parkett
                      Profi training, but we also offer The Ultimate Guarantee,
                      providing you with the ultimate peace of mind. <br></br>{" "}
                      The Ultimate Guarantee is applicable exclusively when
                      Pallmann products are utilized. To learn more about the
                      Pallmann Guarantee and Parkett Profi certified
                      contractors, visit the Pallmann Website.
                    </p>
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
