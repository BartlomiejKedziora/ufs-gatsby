import "styles/app.scss"

import React from "react"
import { navigate } from "gatsby"

const Button = ({ className, type, onClick, disabled, to, children }) => {
  return (
    <button
      type={type}
      className={`button ${className ? className : ""}`}
      onClick={to ? () => navigate(to) : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
