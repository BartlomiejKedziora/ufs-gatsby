import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ breadcrumbs_data, dark }) => {
  return (
    <section className={`breadcrumbs${dark ? " dark" : ""}`}>
      <div className="container">
        <div className="breadcrumbs__wrapper">
          <Link to="/">Home</Link>
          {breadcrumbs_data?.map((item, index) => {
            if (breadcrumbs_data.length === index + 1) {
              return <span key={index}>{item.name}</span>
            } else {
              return (
                <Link key={index} to={item.href}>
                  {item.name}
                </Link>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs
