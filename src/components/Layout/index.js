import "styles/app.scss"

import React, { useEffect, useState } from "react"
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
  const [showArrowTop, setShowArrowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      const document_height = document.body.clientHeight
      if (offset > 0.5 * document_height) {
        setShowArrowTop(true)
      } else {
        setShowArrowTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
  }, [])

  return (
    <CookiesProvider>
      <Seo {...seo} />
      <Header />
      <SocialsBar />
      <main id="top" className="main-margin-top">
        {children}
      </main>
      {showArrowTop && <ScrollToTop />}
      <Footer />
      {/* <CookieBanner /> */}
    </CookiesProvider>
  )
}

export default Layout
