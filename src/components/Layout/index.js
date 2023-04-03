import "styles/app.scss"

import React from "react"
import { CookiesProvider } from "react-cookie"

import {
  Seo,
  Header,
  Footer,
  SocialsBar,
  ScrollToTop,
  // CookieBanner,
} from "./components"

const Layout = ({ children, seo = {} }) => {
  return (
    <CookiesProvider>
      <Seo {...seo} />
      <Header />
      <SocialsBar />
      <main>{children}</main>
      <ScrollToTop />
      <Footer />
      {/* <CookieBanner /> */}
    </CookiesProvider>
  )
}

export default Layout
