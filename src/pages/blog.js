// import "styles/pages/blog.scss"

import React from "react"

import Layout from "components/Layout"
import Breadcrumbs from "../components/Breadcrumbs"

const Blog = () => {
  const breadcrumbs_data = [
    {
      name: "Strona",
      href: "/",
    },
    {
      name: "Historia",
      href: "/historia",
    },
  ]

  return (
    <Layout>
      <div className="blog">
        <div className="site-container">
          <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
          <div className="row">
            <div className="col-6">Blog UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blog
