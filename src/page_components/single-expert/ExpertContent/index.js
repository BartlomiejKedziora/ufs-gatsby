import "./styles.scss"

import React from "react"

import Button from "components/Button"
import Divider from "components/Divider"
import ExpertQuote from "page_components/single-expert/ExpertQuote"
import BannerGetQuote from "components/BannerGetQuote"

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
                      <p className="single-expert__title">{blockTitle}</p>
                      {blockSubtitle && (
                        <p className="single-expert__subtitle">
                          {blockSubtitle}
                        </p>
                      )}
                      <div
                        className="single-expert__text"
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
