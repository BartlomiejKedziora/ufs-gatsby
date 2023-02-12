import "styles/pages/home.scss"

import React from "react"

import Layout from "components/Layout"

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="site-container">
          <div className="row" style={{ height: "1000px" }}>
            <div className="col-6">Hello UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
