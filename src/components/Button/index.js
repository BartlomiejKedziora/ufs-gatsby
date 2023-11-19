import "./styles.scss"

import React from "react"
import { navigate } from "gatsby"
import classNames from "classnames"

import IconCircle from "../Icons/IconCircle"

const Button = ({
  className,
  type = "button",
  onClick,
  disabled,
  to,
  children,
  is_external_link,
}) => {
  return is_external_link ? (
    <a
      href={to}
      target="_blank"
      rel="noreferrer"
      className={classNames("button", {
        [className]: !!className,
      })}
    >
      <span>{children}</span>
      <div className="button__icon">
        <IconCircle />
      </div>
    </a>
  ) : (
    <button
      type={type}
      className={classNames("button", {
        [className]: !!className,
        disabled: !!disabled,
      })}
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
