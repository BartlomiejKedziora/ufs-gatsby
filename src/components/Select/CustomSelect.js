import "./styles.scss"

import React from "react"
import Select from "react-select"

const CustomSelect = ({
  className,
  label,
  placeholder,
  options = [],
  value,
  disabled,
  onChange,
  defaultValue,
}) => {
  const selectStyles = {
    input: provided => ({
      ...provided,
      color: "#fffee6",
    }),
    container: provided => ({
      ...provided,
      width: "100%",
      background: "#2f2f2f",
      backgroundColor: "#2f2f2f",
      outline: "none",
      border: "none",
      borderRadius: 15,
      padding: "4px 10px",
      fontWeight: 700,
      color: "#fffee6",
    }),
    control: provided => ({
      ...provided,
      background: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
      color: "#fffee6",
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: "#fffee6",
      right: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#212121",
      fontSize: 14,
      backgroundColor: state.isSelected ? "#f9a828" : "transparent",
      "&:hover": {
        backgroundColor: "#f9a828",
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorContainer: provided => ({
      ...provided,
      color: "#000",
    }),
    placeholder: provided => ({
      ...provided,
      color: "#fffee6",
      fontSize: 14,
      fontWeight: 400,
    }),
    singleValue: provided => ({
      ...provided,
      color: "#fffee6",
      fontSize: 14,
      fontWeight: 400,
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: "block",
      color: "#f9a828",
    }),
  }

  return (
    <div className={`select${className ? ` ${className}` : ""}`}>
      <Select
        defaultValue={defaultValue}
        onChange={onChange}
        className={className}
        label={label}
        placeholder={placeholder}
        options={options}
        value={value}
        disabled={disabled}
        styles={selectStyles}
      />
    </div>
  )
}

export default CustomSelect
