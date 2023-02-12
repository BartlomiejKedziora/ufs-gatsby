import "styles/app.scss"

import React from "react"
import { CookiesProvider } from "react-cookie"

import Seo from "./components/Seo"
import Header from "./components/Header"
import SocialsBar from "./components/SocialsBar"
import Footer from "./components/Footer"
// import CookieBanner from "./components/CookieBanner"

const Layout = ({ children, seo = {} }) => {
  return (
    <CookiesProvider>
      <Seo {...seo} />
      <Header />
      <SocialsBar />
      <main>{children}</main>
      <Footer />
      {/* <CookieBanner /> */}
    </CookiesProvider>
  )
}

export default Layout
