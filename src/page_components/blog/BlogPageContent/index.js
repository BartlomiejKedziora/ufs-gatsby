import "./styles.scss"

import React, { useState } from "react"
import { Link } from "gatsby"

import Button from "components/Button"

const BlogPageContent = ({ data }) => {
  const [limit, setLimit] = useState(6)

  const showMore = () => {
    if (limit < data.length) {
      setLimit(limit + 6)
    }
  }

  const tails_to_show = data.slice(0, limit)

  return (
    <section className="blog-page">
      <div className="container">
        <div className="blog-page__wrapper">
          <div className="row">
            {tails_to_show?.map(
              ({ title, id, date, slug, acfpost: { excerpt, miniImg } }) => {
                return (
                  <div key={id} className="col-4 ">
                    <div className="blog-page__article__wrapper">
                      <Link
                        to={`/blog/${slug}/`}
                        className="blog-page__article"
                      >
                        <div className="blog-page__article-img">
                          <img
                            src={miniImg?.sourceUrl}
                            alt={miniImg?.altText}
                          />
                        </div>
                        <div className="blog-page__article-content">
                          <p className="blog-page__date">{date}</p>
                          <p className="blog-page__title">{title}</p>
                          <p className="blog-page__excerpt">{excerpt}</p>
                          <div className="blog-page__link">
                            <span>read more</span>
                            <img
                              src={require("assets/icons/arrow-sm.svg").default}
                              alt=""
                            />
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
        {limit < data.length && (
          <div className="blog-page__btn">
            <Button onClick={() => showMore()}>Show more</Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogPageContent
