import "./styles.scss"

import React from "react"

const ExpertQuote = ({ data }) => {
  const { quoteName, quoteRole, quoteImg, quoteText } = data?.acfExperts
  return (
    <div className="expert-quote">
      <div className="expert-quote__wrapper">
        <div className="container">
          <div className="expert-quote__tail">
            <div className="expert-quote__img">
              <img src={quoteImg?.sourceUrl} alt={quoteImg?.altText} />
            </div>
            <div className="expert-quote__content">
              <img
                className="expert-quote__quote expert-quote__quote--1"
                src={require("assets/images/quote_cut.png").default}
                alt=""
              />
              <img
                className="expert-quote__quote expert-quote__quote--2"
                src={require("assets/images/quote_cut.png").default}
                alt=""
              />
              <div
                className="expert-quote__text"
                dangerouslySetInnerHTML={{ __html: quoteText }}
              />
              <div className="expert-quote__details">
                <p className="expert-quote__name">{quoteName}</p>
                <span> - </span>
                <p className="expert-quote__role">{quoteRole}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertQuote
