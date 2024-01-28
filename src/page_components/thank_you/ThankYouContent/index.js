import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const ThankYouContent = () => {
  return (
    <section className="thank-you">
      <div className="container">
        <div className="thank-you__content">
          <h1 className="section-heading">
            Thank You for <span>Contacting Us</span>
          </h1>
          <p className="section__subtitle">We will be in touch within 24h.</p>
          <Link to="/" className="thank-you__link">
            <span>Go to home page</span>
            <img src={require("assets/icons/arrow-sm.svg").default} alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ThankYouContent
