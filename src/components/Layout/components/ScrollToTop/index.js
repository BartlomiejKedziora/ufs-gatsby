import "./styles.scss"

import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

const ScrollToTop = () => {
  return (
    <button
      type="button"
      className="scroll-button"
      onClick={() => scrollTo("#top")}
    >
      <img src={require("assets/icons/arrow-up.svg").default} alt="" />
    </button>
  )
}

export default ScrollToTop
