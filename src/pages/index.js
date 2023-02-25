import "styles/pages/home.scss"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import React from "react"
import { graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper"

import Layout from "components/Layout"

const Home = ({ data }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination])

  const home_data = data.allWpService.nodes[0]
  console.log(home_data)

  const testimonialsSliderSettings = {
    loop: false,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 2,
    centeredSlides: false,
    speed: 700,
    scrollbar: {
      draggable: true,
    },
    spaceBetween: 30,
    pagination: {
      clickable: true,
      bulletClass: `home-testimonials__slider-bullets`,
    },
    navigation: {
      nextEl: ".home-testimonials__slider-arrow--next",
      prevEl: ".home-testimonials__slider-arrow--prev",
    },
  }

  return (
    <Layout
      seo={{
        title: "Home",
        description: "",
      }}
    >
      <div className="home" style={{ height: "1000px" }}>
        <div className="site-container">
          <h1>{home_data?.title}</h1>
          <div className="row">
            <div className="col-6">Hello UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpService {
      nodes {
        title
      }
    }
  }
`

export default Home
