import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const NotFoundContent = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found__content">
          <h1 className="not-found__title">404</h1>
          <p className="not-found__text">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link to="/" className="not-found__link">
            <span>Go to home page</span>
            <img src={require("assets/icons/arrow-sm.svg").default} alt="" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundContent
