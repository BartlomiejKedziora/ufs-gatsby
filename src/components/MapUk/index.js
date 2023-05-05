import "./styles.scss"

import React from "react"

const MapUk = () => {
  return (
    <div className="map-uk">
      <img src={require("assets/images/home/map-sm.jpg").default} alt="" />
      <span className="map-uk__decor map-uk__decor--1"></span>
      <span className="map-uk__decor map-uk__decor--2"></span>
    </div>
  )
}

export default MapUk
