import "styles/app.scss"

import React from "react"

import Seo from "./components/Seo"
import Header from "./components/Header"
import Footer from "./components/Footer"

const Layout = ({ children, seo = {} }) => {
  return (
    <div>
      <Seo {...seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
