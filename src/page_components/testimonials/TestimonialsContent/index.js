import "./styles.scss"

import React, { useState } from "react"

import Button from "components/Button"

import IconStar from "components/Icons/IconStar"

const TestimonialsContent = ({ data }) => {
  console.log(data)
  const [fullList, setFullList] = useState(false)

  const short_list = data?.slice(0, 6)
  const current_list = fullList ? data : short_list
  return (
    <section className="testim-content">
      <div className="testim-content__wrapper">
        <div className="container">
          {current_list?.map(
            ({
              id,
              acfTestimonials: { name, role, review, rating, image },
            }) => {
              return (
                <div key={id} className="testim-content__tail">
                  <div className="testim-content__img">
                    <img src={image?.sourceUrl} alt={image?.altText} />
                  </div>
                  <div className="testim-content__content">
                    <img
                      className="testim-content__quote testim-content__quote--1"
                      src={require("assets/images/quote_cut.png").default}
                      alt=""
                    />
                    <img
                      className="testim-content__quote testim-content__quote--2"
                      src={require("assets/images/quote_cut.png").default}
                      alt=""
                    />
                    <p className="testim-content__name">{name}</p>
                    <p className="testim-content__role">{role}</p>
                    <p className="testim-content__review">{review}</p>
                    <div className="testim-content__rating">
                      {Array(rating)
                        .fill(null)
                        .map((item, index) => {
                          return <IconStar key={index} />
                        })}
                    </div>
                  </div>
                </div>
              )
            }
          )}
          {data.length > 6 && (
            <div className="testim-content__show-more">
              <Button
                className="button-dark"
                onClick={() => setFullList(!fullList)}
              >
                {fullList ? "Show less" : "Show more"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsContent
