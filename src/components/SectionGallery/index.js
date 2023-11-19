import "./styles.scss"

import React, { useState } from "react"
import FsLightbox from "fslightbox-react"

import Button from "components/Button"

const SectionGallery = ({ images }) => {
  const [limit, setLimit] = useState(6)
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  const showMore = () => {
    if (limit < images.length) {
      setLimit(limit + 8)
    }
  }

  const images_to_show = images.slice(0, limit)

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

  if (images) {
    const getLightboxImages = () => {
      for (let i = 0; i < images.length; i++) {
        gallery_images[i] = (
          <img
            src={`${images[i].sourceUrl}`}
            alt={`${images[i].altText}`}
            width="1000px"
            height="600px"
            allowFullScreen
          />
        )
      }
    }

    getLightboxImages()
  }

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="gallery__grid">
          <div className="container">
            <div className="gallery__grid-wrapper">
              {images_to_show?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={`gallery__img gallery__img-${index}`}
                  >
                    <button
                      className="gallery__img-wrapper"
                      onClick={() => openLightboxOnSlide(index + 1)}
                    >
                      <div
                        className="gallery__img-bckg"
                        style={createBackgroundImage(image)}
                      ></div>

                      <div className="gallery__img-overlay">
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
        {limit < images.length && (
          <div className="gallery__btn">
            <Button onClick={() => showMore()}>Show more</Button>
          </div>
        )}
      </div>
      <FsLightbox
        toggler={lightboxController.toggler}
        slide={lightboxController.slide}
        sources={gallery_images}
      />
    </section>
  )
}

export default SectionGallery
