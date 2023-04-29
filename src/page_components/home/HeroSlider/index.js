import "./styles.scss"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper"

import Button from "components/Button"

const HeroSlider = ({ data, setIsModalQuoteOpen }) => {
  SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])

  const heroSliderSettings = {
    loop: false,
    autoplay: {
      delay: 6000,
    },
    slidesPerView: 1,
    centeredSlides: false,
    speed: 700,
    scrollbar: {
      draggable: true,
    },
    spaceBetween: 30,
    pagination: {
      clickable: true,
      bulletClass: `hero-slider__slider-bullets`,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  }

  return (
    <section className="hero-slider">
      <Swiper {...heroSliderSettings}>
        <SwiperSlide>
          <div className="hero-slider__slide">
            <img
              src={data?.backgroundimage?.sourceUrl}
              alt={data?.backgroundimage?.altText}
              className="hero-slider__background"
            />
            <div className="hero-slider__slide-content--wrapper">
              <div className="container">
                <div className="hero-slider__slide-content">
                  <p className="hero-slider__title">{data?.title1}</p>
                  <h1 className="section-heading">
                    {data?.title2}
                    <span> {data?.title2Accent}</span>
                  </h1>
                  <p className="section__subtitle">{data?.title3}</p>
                  <p className="hero-slider__text">{data?.text}</p>
                  <div className="hero-slider__buttons">
                    <Button>FIND OUT MORE</Button>
                    <Button
                      className="button-dark"
                      onClick={() => setIsModalQuoteOpen(true)}
                    >
                      GET A QUOTE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {data?.singleslide?.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="hero-slider__slide">
                <img
                  src={slide?.slidebackgroundimage?.sourceUrl}
                  alt={slide?.slidebackgroundimage?.altText}
                  className="hero-slider__background"
                />
                <div className="hero-slider__slide-content--wrapper">
                  <div className="container">
                    <div className="hero-slider__slide-content">
                      <p className="hero-slider__title">{slide?.slidetitle1}</p>
                      <h1 className="section-heading">
                        {slide?.slidetitle2}
                        <span> {slide?.slidetitle2Accent}</span>
                      </h1>
                      <p className="section__subtitle">{slide?.slidetitle3}</p>
                      <p className="hero-slider__text">{slide?.slidetext}</p>
                      <div className="hero-slider__buttons">
                        <Button>FIND OUT MORE</Button>
                        <Button
                          className="button-dark"
                          onClick={() => setIsModalQuoteOpen(true)}
                        >
                          GET A QUOTE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default HeroSlider
