import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const Breadcrumbs = ({ breadcrumbs_data }) => {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="breadcrumbs__wrapper">
          <Link href="/">Strona główna</Link>
          {breadcrumbs_data?.map((item, index) => {
            if (breadcrumbs_data.length === index + 1) {
              return <span>{item.name}</span>
            } else {
              return <Link href={item.href}>{item.name}</Link>
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs
