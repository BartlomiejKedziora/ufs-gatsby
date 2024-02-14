import "./styles.scss"

import React from "react"
import Button from "components/Button"

const ServiceContent = ({ data }) => {
  const getRowsList = data => {
    if (data?.acfServices) {
      return data?.acfServices?.row
    } else if (data?.acfCommercial) {
      return data?.acfCommercial?.row
    } else if (data?.acfLandings) {
      return data?.acfLandings?.row
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
          const is_external_link = buttonLink?.includes("http")

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
                      <h2
                        className="single-service__title"
                        dangerouslySetInnerHTML={{ __html: blockTitle }}
                      />
                      {blockSubtitle && (
                        <h3
                          className="single-service__subtitle"
                          dangerouslySetInnerHTML={{ __html: blockSubtitle }}
                        />
                      )}
                      <div
                        className="single-service__text"
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

export default ServiceContent
