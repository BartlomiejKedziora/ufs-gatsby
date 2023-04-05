import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

import PageHeader from "components/PageHeader"

import hero_image from "assets/images/hero4.jpg"

const BlogPageContent = ({ data }) => {
  return (
    <section className="blog-page">
      <PageHeader title="Blog" img={hero_image} />
      <div className="container">
        <div className="blog-page__wrapper">
          {data?.map(
            ({ title, id, date, slug, acfpost: { excerpt, miniImg } }) => {
              return (
                <div key={id} className="blog-page__article__wrapper">
                  <Link to={`/blog/${slug}/`} className="blog-page__article">
                    <div className="blog-page__article-img">
                      <img src={miniImg?.sourceUrl} alt={miniImg?.altText} />
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
              )
            }
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogPageContent
