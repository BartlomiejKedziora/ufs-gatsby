import "./styles.scss"

import React from "react"

const Divider = ({ mt = 0, mb = 0 }) => {
  return (
    <div
      className="divider"
      style={{ marginTop: `${mt}px`, marginBottom: `${mb}px` }}
    ></div>
  )
}

export default Divider
