import "./styles.scss"

import React from "react"

import Button from "components/Button"

const ExpertsLocations = ({
  locations,
  currentLocation,
  setCurrentLocation,
}) => {
  return (
    <section className="experts-locations">
      <div className="experts-locations__wrapper">
        <div className="container">
          <h2 className="section-heading">
            Our <span>Locations</span>
          </h2>
          <p className="section__subtitle">Choose location from the list</p>
          <ul className="experts-locations__list">
            {locations.map(({ name, id, count }) => {
              return (
                count && (
                  <li key={id}>
                    <button
                      type="button"
                      className="experts-locations__item"
                      onClick={() => setCurrentLocation(name)}
                    >
                      <div className="experts-locations__item-icon">
                        <img
                          src={require("assets/icons/pin-contact.svg").default}
                          alt=""
                        />
                      </div>
                      <p className="experts-locations__item-name">
                        {name} ({count})
                      </p>
                    </button>
                  </li>
                )
              )
            })}
          </ul>
          {currentLocation !== "all" && (
            <div className="experts-locations__btn">
              <Button onClick={() => setCurrentLocation("all")}>
                Show all
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ExpertsLocations
