import "./styles.scss"

import React, { useState } from "react"
import { Link } from "gatsby"

import Button from "components/Button"

const PortfolioPageContent = ({ data }) => {
  const [limit, setLimit] = useState(6)

  const showMore = () => {
    if (limit < data.length) {
      setLimit(limit + 6)
    }
  }

  const tails_to_show = data.slice(0, limit)

  return (
    <section className="portfolio-page">
      <div className="container">
        <div className="portfolio-page__wrapper">
          <div className="row">
            {tails_to_show?.map(
              ({ title, id, slug, acfPortfolio: { heroImage } }) => {
                return (
                  <div key={id} className="col-12 col-md-6 col-lg-4">
                    <div className="portfolio-page__article__wrapper">
                      <Link
                        to={`/portfolio/${slug}/`}
                        className="portfolio-page__article"
                      >
                        <div className="portfolio-page__article-img">
                          <img
                            src={heroImage?.sourceUrl}
                            alt={heroImage?.altText}
                          />
                        </div>
                        <span className="portfolio-page__cta">see more</span>
                        <p className="portfolio-page__title">{title}</p>
                      </Link>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
        {limit < data.length && (
          <div className="portfolio-page__btn">
            <Button onClick={() => showMore()}>Show more</Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioPageContent
