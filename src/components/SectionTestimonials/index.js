import "./styles.scss"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper"
import { useStaticQuery, graphql } from "gatsby"

import IconStar from "../Icons/IconStar"
import SliderArrow from "../Icons/SliderArrow"

const SectionTestimonials = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination])

  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allWpTestimonial(limit: 10, sort: { date: DESC }) {
        nodes {
          id
          acfTestimonials {
            name
            rating
            review
            role
            image {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const testimonialsSliderSettings = {
    loop: false,
    // autoplay: {
    //   delay: 5000,
    // },
    slidesPerView: 1,
    centeredSlides: false,
    speed: 700,
    scrollbar: {
      draggable: true,
    },
    spaceBetween: 10,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
    pagination: {
      clickable: true,
      bulletClass: `testimonials__slider-bullets`,
    },
    navigation: {
      nextEl: ".testimonials__nav-arrow--next",
      prevEl: ".testimonials__nav-arrow--prev",
    },
  }

  return (
    <section className="testimonials">
      <div className="testimonials__wrapper">
        <div className="container">
          <div className="testimonials__top">
            <p className="section__title">OUR TESTIMONIALS</p>
            <h2 className="section-heading">
              What <span>Clients Say</span>
            </h2>
            <p className="section__subtitle">The Ultimate Floor Sanding</p>
          </div>
        </div>
        <div className="testimonials__slider">
          <div className="container">
            <Swiper {...testimonialsSliderSettings}>
              {data.allWpTestimonial.nodes.map(
                ({
                  id,
                  acfTestimonials: { image, name, role, review, rating },
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <div className="testimonials__slide">
                        <div className="testimonials__slide-img">
                          <img src={image.sourceUrl} alt={image.altText} />
                        </div>
                        <div className="testimonials__slide-content">
                          <img
                            className="testimonials__slide-quote testimonials__slide-quote--1"
                            src={require("assets/images/quote_cut.png").default}
                            alt=""
                          />
                          <img
                            className="testimonials__slide-quote testimonials__slide-quote--2"
                            src={require("assets/images/quote_cut.png").default}
                            alt=""
                          />
                          <p className="testimonials__slide-name">{name}</p>
                          <p className="testimonials__slide-role">{role}</p>
                          <p className="testimonials__slide-review">{review}</p>
                          <div className="testimonials__slide-rating">
                            {Array(rating)
                              .fill(null)
                              .map((item, index) => {
                                return <IconStar key={index} />
                              })}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                }
              )}
            </Swiper>
            <div className="testimonials__nav">
              <div className="testimonials__nav-arrows">
                <div className="testimonials__nav-arrow testimonials__nav-arrow--prev">
                  <SliderArrow />
                </div>
                <div className="testimonials__nav-arrow testimonials__nav-arrow--next">
                  <SliderArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTestimonials
