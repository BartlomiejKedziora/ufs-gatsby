import "./styles.scss"

import React from "react"
import Select from "react-select"

const CategorySelect = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  categories = categories?.filter(category => category.name !== "Bez kategorii")

  const getSelectOptions = categories => {
    const options = []
    categories?.forEach(category => {
      options.push({
        value: category.name,
        label: category.name,
      })
    })
    return options
  }

  const options = getSelectOptions(categories)

  const handleChange = value => {
    setCurrentCategory(value)
  }

  const selectStyles = {
    input: provided => ({
      ...provided,
      color: "#000",
    }),
    container: provided => ({
      ...provided,
      width: "100%",
      background: "#f9a828",
      backgroundColor: "#f9a828",
      outline: "none",
      border: "1px solid #f9a828",
      borderRadius: "3px",
      padding: "1px 5px",
      fontSize: "18px",
      fontWeight: 500,
      color: "#BABABA",
    }),
    control: provided => ({
      ...provided,
      background: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
      color: "#000",
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: "#fffee6",
      right: 0,
      zIndex: 999,
    }),
    option: (provided, state) => ({
      ...provided,
      color: "#000",
      backgroundColor: state.isSelected ? "#f4f4f4" : "transparent",
      "&:hover": {
        color: "#212121",
        backgroundColor: "#f9a828",
      },
      zIndex: 999,
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
      fontSize: "18px",
      fontWeight: 500,
      color: "#212121",
    }),
    singleValue: provided => ({
      ...provided,
      color: "#000",
    }),
    dropdownIndicator: provided => ({
      ...provided,
      display: "block",
      color: "#000",
    }),
  }

  return (
    <div className="categories-select">
      <div className="container">
        <div className="categories-select__wrapper">
          <Select
            value={currentCategory}
            placeholder="Choose category"
            options={options}
            styles={selectStyles}
            onChange={e => handleChange(e.value)}
          />
          {currentCategory && (
            <div className="categories-select__choice">
              <span>{currentCategory}</span>
              <button type="button" onClick={() => setCurrentCategory(null)}>
                <img
                  src={require("assets/icons/close-round.svg").default}
                  alt=""
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CategorySelect
