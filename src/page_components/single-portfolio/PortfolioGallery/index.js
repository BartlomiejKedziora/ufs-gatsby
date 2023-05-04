import "./styles.scss"

import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

const PortfolioGallery = ({ data }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  const portfolio_gallery = data?.acfPortfolio?.gallery

  const openLightboxOnSlide = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    })
  }

  const createBackgroundImage = image => {
    return {
      backgroundImage: `url(${image?.sourceUrl})`,
    }
  }

  let gallery_images = []
  const getLightboxImages = () => {
    for (let i = 0; i < portfolio_gallery.length; i++) {
      gallery_images[i] = (
        <img
          src={`${portfolio_gallery[i].sourceUrl}`}
          alt={`${portfolio_gallery[i].altText}`}
          width="1000px"
          height="600px"
          allowFullScreen
        />
      )
    }
  }
  getLightboxImages()

  return (
    <section className="portfolio-gallery">
      <div className="portfolio-gallery__wrapper">
        <div className="container">
          <div className="portfolio-gallery__content">
            <div className="row">
              {portfolio_gallery.map((image, index) => {
                return (
                  <div key={index} className="col-lg-3 col-md-6 col-12">
                    <button
                      className="portfolio-gallery__image-wrapper"
                      onClick={() => openLightboxOnSlide(index + 1)}
                    >
                      <div
                        className="portfolio-gallery__image-bckg"
                        style={createBackgroundImage(image)}
                      ></div>

                      <div className="portfolio-gallery__image-overlay">
                        <img
                          src={require("assets/icons/zoom.svg").default}
                          alt=""
                        />
                      </div>
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={gallery_images}
      />
    </section>
  )
}

export default PortfolioGallery
