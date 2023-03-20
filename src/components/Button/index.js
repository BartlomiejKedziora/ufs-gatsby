import "./styles.scss"

import React from "react"
import { navigate } from "gatsby"

import IconCircle from "../Icons/IconCircle"

const Button = ({ className, type, onClick, disabled, to, children }) => {
  return (
    <button
      type={type}
      className={`button ${className ? className : ""}`}
      onClick={to ? () => navigate(to) : onClick}
      disabled={disabled}
    >
      <span>{children}</span>
      <div className="button__icon">
        <IconCircle />
      </div>
    </button>
  )
}

export default Button
