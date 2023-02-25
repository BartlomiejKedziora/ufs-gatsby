import "styles/pages/home.scss"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper"

import Layout from "components/Layout"

const Home = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination])

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
