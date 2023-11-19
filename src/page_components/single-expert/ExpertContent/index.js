import "./styles.scss"

import React from "react"

import Button from "components/Button"
import BannerGetQuote from "components/BannerGetQuote"
import ExpertQuote from "page_components/single-expert/ExpertQuote"

const ExpertContent = ({ data, setIsModalQuoteOpen }) => {
  return (
    <section className="single-expert">
      {data?.acfExperts?.row.map(
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
            <div key={index} className="single-expert__row--padding">
              <div className="single-expert__row--wrapper">
                <div className="container">
                  <div className={`single-expert__row${odd ? " odd" : ""}`}>
                    <div className="single-expert__img">
                      <img
                        src={blockImage?.sourceUrl}
                        alt={blockImage?.altText}
                      />
                    </div>
                    <div className="single-expert__content">
                      <h2
                        className="single-expert__title"
                        dangerouslySetInnerHTML={{ __html: blockTitle }}
                      />
                      {blockSubtitle && (
                        <h3
                          className="single-expert__subtitle"
                          dangerouslySetInnerHTML={{ __html: blockSubtitle }}
                        />
                      )}
                      <div
                        className="single-expert__text"
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
              {index === 1 && (
                <>
                  <ExpertQuote data={data} />
                  <BannerGetQuote
                    setIsModalQuoteOpen={setIsModalQuoteOpen}
                    padding="0"
                  />
                </>
              )}
            </div>
          )
        }
      )}
    </section>
  )
}

export default ExpertContent
