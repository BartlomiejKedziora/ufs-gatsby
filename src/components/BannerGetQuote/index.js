import "./styles.scss"

import React from "react"

const BannerGetQuote = ({ padding, setIsModalQuoteOpen }) => {
  return (
    <section className="banner-quote" style={{ padding: `${padding}` }}>
      <button
        type="button"
        onClick={() => setIsModalQuoteOpen(true)}
        className="banner-quote__wrapper"
      >
        <div className="container">
          <div className="banner-quote__btn--wrapper">
            <p className="banner-quote__btn section-heading">
              Get a FREE Quote
            </p>
          </div>
        </div>
      </button>
    </section>
  )
}

export default BannerGetQuote
