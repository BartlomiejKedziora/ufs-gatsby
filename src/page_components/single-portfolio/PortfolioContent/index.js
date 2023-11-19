import "./styles.scss"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Pagination } from "swiper"

import Button from "components/Button"

const PortfolioContent = ({ data }) => {
  SwiperCore.use([Autoplay, Pagination])

  const rows_list = data?.acfPortfolio?.row

  const portfolioSliderSettings = {
    loop: true,
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
    pagination: {
      clickable: true,
      bulletClass: `single-portfolio__slider-bullets`,
    },
  }

  return (
    <section className="single-portfolio">
      {rows_list?.map(
        (
          {
            blockImages,
            blockTitle,
            blockSubtitle,
            blockText,
            button,
            buttonLink,
          },
          index
        ) => {
          const odd = index % 2 === 1
          const is_external_link = buttonLink?.includes("http")

          return (
            <div key={index} className="single-portfolio__row--padding">
              <div className="single-portfolio__row--wrapper">
                <div className="container">
                  <div className={`single-portfolio__row${odd ? " odd" : ""}`}>
                    <div
                      className={`single-portfolio__img${
                        blockImages?.length <= 1 ? " hide-bullets" : ""
                      }`}
                    >
                      <Swiper {...portfolioSliderSettings}>
                        {blockImages?.map((image, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <img
                                src={image?.sourceUrl}
                                alt={image?.altText}
                              />
                            </SwiperSlide>
                          )
                        })}
                      </Swiper>
                    </div>
                    <div className="single-portfolio__content">
                      <h2 className="single-portfolio__title">{blockTitle}</h2>
                      {blockSubtitle && (
                        <h3 className="single-portfolio__subtitle">
                          {blockSubtitle}
                        </h3>
                      )}
                      <div
                        className="single-portfolio__text"
                        dangerouslySetInnerHTML={{ __html: blockText }}
                      />
                      {button && (
                        <Button
                          is_external_link={is_external_link}
                          to={buttonLink}
                          className="button-dark"
                        >
                          {button}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      )}
    </section>
  )
}

export default PortfolioContent
