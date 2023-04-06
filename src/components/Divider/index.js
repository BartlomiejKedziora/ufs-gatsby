import "./styles.scss"

import React from "react"

const Divider = ({ mt = 0, mb = 0, height = 3, background = "#fffee6" }) => {
  return (
    <div
      className="divider"
      style={{
        marginTop: `${mt}px`,
        marginBottom: `${mb}px`,
        height: `${height}px`,
        background: `${background}`,
      }}
    ></div>
  )
}

export default Divider
