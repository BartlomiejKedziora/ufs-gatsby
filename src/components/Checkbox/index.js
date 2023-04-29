import "./styles.scss"

import React from "react"

const Checkbox = ({
  children,
  name,
  checked,
  onChange,
  required,
  className,
  type,
}) => {
  return (
    <div className={`checkbox${className ? ` ${className}` : ""}`}>
      <label className="checkbox__label">
        <input
          type={type ? type : "checkbox"}
          name={name}
          checked={checked}
          value={checked}
          onChange={onChange}
          required={required}
        />
        <span>
          {required && <sup>*</sup>} {children}
        </span>
      </label>
    </div>
  )
}

export default Checkbox
