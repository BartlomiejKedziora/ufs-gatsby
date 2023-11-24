import "./styles.scss"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Autoplay } from "swiper"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import SliderArrow from "../Icons/SliderArrow"

const SectionBlog = () => {
  SwiperCore.use([Autoplay, Navigation])

  const data = useStaticQuery(graphql`
    query {
      allWpPost(limit: 10, sort: { date: DESC }) {
        nodes {
          id
          acfpost {
            excerpt
            miniImg {
              altText
              sourceUrl
            }
          }
          title
          date(locale: "en", formatString: "DD MM YYYY")
          slug
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `)

  const blogArticlesSliderSettings = {
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
    navigation: {
      nextEl: ".blog-articles__nav-arrow--next",
      prevEl: ".blog-articles__nav-arrow--prev",
    },
  }

  return (
    <section className="blog-articles">
      <div className="blog-articles__wrapper">
        <div className="container">
          <div className="blog-articles__top">
            <p className="section__title">OUR BLOG</p>
            <h2 className="section-heading">
              <span>Fresh</span> Articles
            </h2>
            <p className="section__subtitle">The Ultimate Floor Sanding</p>
          </div>
        </div>
        <div className="blog-articles__slider">
          <div className="container">
            <Swiper {...blogArticlesSliderSettings}>
              {data?.allWpPost?.nodes.map(
                ({
                  id,
                  date,
                  slug,
                  title,
                  categories,
                  acfpost: { excerpt, miniImg },
                }) => {
                  return (
                    <SwiperSlide key={id}>
                      <Link
                        to={`/blog/${slug}/`}
                        className="blog-page__article"
                      >
                        <div className="blog-articles__slide">
                          <div className="blog-articles__slide-img">
                            <img
                              src={miniImg.sourceUrl}
                              alt={miniImg.altText}
                            />
                          </div>
                          <div className="blog-articles__slide-content"></div>
                          <div className="blog-articles__slide-info">
                            <p>{categories.nodes[0]?.name}</p>
                            <span>|</span>
                            <p>{date}</p>
                          </div>
                          <div className="blog-articles__slide-title">
                            {title}
                          </div>
                          <div className="blog-articles__slide-excerpt">
                            {excerpt}
                          </div>
                          <div className="blog-articles__slide-link">
                            <span>read more</span>
                            <img
                              src={require("assets/icons/arrow-sm.svg").default}
                              alt=""
                            />
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  )
                }
              )}
            </Swiper>
            <div className="blog-articles__nav">
              <div className="blog-articles__nav-arrows">
                <div className="blog-articles__nav-arrow blog-articles__nav-arrow--prev">
                  <SliderArrow />
                </div>
                <div className="blog-articles__nav-arrow blog-articles__nav-arrow--next">
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

export default SectionBlog
