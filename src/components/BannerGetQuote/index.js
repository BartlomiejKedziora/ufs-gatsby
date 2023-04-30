import "./styles.scss"

import React from "react"

const BannerGetQuote = ({ padding, setIsModalQuoteOpen }) => {
  return (
    <section className="banner-quote" style={{ padding: `${padding}` }}>
      <div className="banner-quote__wrapper">
        <div className="container">
          <div className="banner-quote__btn--wrapper">
            <button
              type="button"
              onClick={() => setIsModalQuoteOpen(true)}
              className="banner-quote__btn section-heading"
            >
              Get a FREE Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerGetQuote
