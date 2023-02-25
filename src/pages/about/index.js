// import "styles/pages/guarantee.scss"

import React from "react"

import Layout from "components/Layout"

const About = () => {
  return (
    <Layout
      seo={{
        title: "About",
        description: "",
      }}
    >
      <div className="about">
        <div className="site-container">
          <div className="row">
            <div className="col-6">About UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
