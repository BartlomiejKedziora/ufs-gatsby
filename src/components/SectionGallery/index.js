import "./styles.scss"

import React, { useState } from "react"
import FsLightbox from "fslightbox-react"
import { useStaticQuery, graphql } from "gatsby"

const SectionGallery = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  })

  const data = useStaticQuery(graphql`
    query MainGalleryQuery {
      allWpGalleryItem {
        nodes {
          acfGallery {
            gallery {
              altText
              sourceUrl
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const main_gallery = data?.allWpGalleryItem?.nodes[0]?.acfGallery?.gallery

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
    for (let i = 0; i < main_gallery.length; i++) {
      gallery_images[i] = (
        <img
          src={`${main_gallery[i].sourceUrl}`}
          alt={`${main_gallery[i].altText}`}
          width="1000px"
          height="600px"
          allowFullScreen
        />
      )
    }
  }
  if (main_gallery) {
    getLightboxImages()
  }

  return (
    <section className="gallery">
      <div className="gallery__wrapper">
        <div className="container">
          <div className="gallery__top">
            <p className="section__title">OUR GALLERY</p>
            <h2 className="section-heading">
              Look at <span>Out work</span>
            </h2>
            <p className="section__subtitle">The Ultimate Floor Sanding</p>
          </div>
        </div>
        <div className="gallery__grid">
          <div className="container">
            <div className="gallery__grid-wrapper">
              {main_gallery?.slice(0, 6)?.map((image, index) => {
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
