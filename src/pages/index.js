import "styles/pages/home.scss"

import React from "react"

import Layout from "../components/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6">Hello UFS!</div>
          <div className="col-6">Hello world!</div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
