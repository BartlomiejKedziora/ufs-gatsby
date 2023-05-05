import "./styles.scss"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/pagination"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay, Pagination } from "swiper"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SliderArrow from "../Icons/SliderArrow"

const SectionPortfolio = () => {
  SwiperCore.use([Autoplay, Navigation, Pagination])

  const data = useStaticQuery(graphql`
    query {
      allWpPortfolio(limit: 10, sort: { fields: date, order: DESC }) {
        nodes {
          slug
          id
          title
          acfPortfolio {
            heroImage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const portfolioSliderSettings = {
    loop: false,
    autoplay: {
      delay: 5000,
    },
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
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      clickable: true,
      bulletClass: `portfolio-slider__slider-bullets`,
    },
    navigation: {
      nextEl: ".portfolio-slider__nav-arrow--next",
      prevEl: ".portfolio-slider__nav-arrow--prev",
    },
  }

  return (
    <section className="portfolio-slider">
      <div className="portfolio-slider__wrapper">
        <div className="container">
          <div className="portfolio-slider__top">
            <p className="section__title">OUR PORTFOLIO</p>
            <h2 className="section-heading">
              <span>PORTFOLIO</span>
            </h2>
            <p className="section__subtitle">The Ultimate Floor Sanding</p>
          </div>
        </div>
        <div className="portfolio-slider__slider">
          <div className="container">
            <Swiper {...portfolioSliderSettings}>
              {data.allWpPortfolio.nodes.map(
                ({ id, slug, title, acfPortfolio: { heroImage } }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Link to={`/portfolio/${slug}/`}>
                        <div className="portfolio-slider__slide">
                          <div className="portfolio-slider__slide-img">
                            <img
                              src={heroImage.sourceUrl}
                              alt={heroImage.altText}
                            />
                          </div>
                          <span className="portfolio-slider__slide-cta">
                            see more
                          </span>
                          <p className="portfolio-slider__slide-title">
                            {title}
                          </p>
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                }
              )}
            </Swiper>
            <div className="portfolio-slider__nav">
              <div className="portfolio-slider__nav-arrows">
                <div className="portfolio-slider__nav-arrow portfolio-slider__nav-arrow--prev">
                  <SliderArrow />
                </div>
                <div className="portfolio-slider__nav-arrow portfolio-slider__nav-arrow--next">
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

export default SectionPortfolio
