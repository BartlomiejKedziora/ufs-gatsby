// import "styles/pages/contact.scss"

import React from "react"

import Layout from "components/Layout"

const Contact = () => {
  return (
    <Layout
      seo={{
        title: "Contact",
        description: "",
      }}
    >
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-6">Contact UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
