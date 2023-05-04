import "./styles.scss"

import React from "react"
import Button from "components/Button"
import Divider from "components/Divider"

const ServiceContent = ({ data }) => {
  const getRowsList = data => {
    if (data?.acfServices) {
      return data?.acfServices?.row
    } else if (data?.acfCommercial) {
      return data?.acfCommercial?.row
    }
  }

  const rows_list = getRowsList(data)
  return (
    <section className="single-service">
      {rows_list?.map(
        (
          {
            blockImage,
            blockTitle,
            blockSubtitle,
            blockText,
            button,
            buttonLink,
          },
          index
        ) => {
          const odd = index % 2 === 1
          return (
            <div key={index} className="single-service__row--padding">
              <div key={index} className="single-service__row--wrapper">
                <div className="container">
                  <div className={`single-service__row${odd ? " odd" : ""}`}>
                    <div className="single-service__img">
                      <img
                        src={blockImage?.sourceUrl}
                        alt={blockImage?.altText}
                      />
                    </div>
                    <div className="single-service__content">
                      <p className="single-service__title">{blockTitle}</p>
                      {blockSubtitle && (
                        <p className="single-service__subtitle">
                          {blockSubtitle}
                        </p>
                      )}
                      <div
                        className="single-service__text"
                        dangerouslySetInnerHTML={{ __html: blockText }}
                      />
                      {button ? (
                        <Button to={buttonLink} className="button-dark">
                          {button}
                        </Button>
                      ) : (
                        <Divider mt={20} />
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

export default ServiceContent
