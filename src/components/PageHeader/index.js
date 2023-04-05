import "./styles.scss"

import React from "react"

const PageHeader = ({ title, img }) => {
  return (
    <section className="page-header">
      <div className="container-fluid">
        <div className="page-header__wrapper">
          <img src={img} alt="" />
          <h1 className="page-header__title">{title}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
