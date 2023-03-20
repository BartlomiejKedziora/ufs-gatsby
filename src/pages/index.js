import "styles/pages/home.scss"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import React from "react"

import Layout from "components/Layout"
import { HomeMission, HeroSlider, HomeServices } from "../page_components/home"

const Home = () => {
  return (
    <Layout
      seo={{
        title: "Home",
        description: "",
      }}
    >
      <HeroSlider />
      <HomeMission />
      <HomeServices />
    </Layout>
  )
}

export default Home
