import "styles/app.scss"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper"

import Button from "components/Button"

const HeroSlider = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination])

  const heroSliderSettings = {
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
    <section className="hero-slider">
      <h1>Hero Slider</h1>
    </section>
  )
}

export default HeroSlider
