import "./styles.scss"

import React, { useState } from "react"

const Input = ({
  label,
  id,
  type,
  name,
  value,
  disabled,
  onChange,
  placeholder,
  required,
  rows,
}) => {
  const [filled, setFilled] = useState(false)

  const handleFocus = () => {
    setFilled(true)
  }

  const checkInput = ({ target: { value } }) => {
    if (value.length > 0) {
      setFilled(true)
    } else {
      setFilled(false)
    }
  }

  return (
    <div className={`input${filled ? " fill" : ""}`}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
          {required && <sup>*</sup>}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          className="input__input"
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={checkInput}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          rows={rows}
        />
      ) : (
        <input
          className="input__input"
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={checkInput}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  )
}

export default Input
