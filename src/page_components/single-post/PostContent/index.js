import "./styles.scss"

import React from "react"
import { Link } from "gatsby"

const PostContent = ({ data, previous, next }) => {
  return (
    <section className="single-post">
      <div className="container">
        <div className="single-post__inner">
          <p className="single-post__date">{data?.date}</p>
          <p className="single-post__title">{data?.title}</p>
          <div
            className="single-post__content"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
          <div className="single-post__nav">
            <div>
              {previous && (
                <Link
                  className="single-post__nav-btn single-post__prev"
                  to={`/blog/${previous?.slug}/`}
                >
                  <img
                    src={require("assets/icons/arrow-sm.svg").default}
                    alt=""
                  />
                  {previous?.title}
                </Link>
              )}
            </div>
            <div>
              {next && (
                <Link
                  className="single-post__nav-btn single-post__next"
                  to={`/blog/${next?.slug}/`}
                >
                  {next?.title}{" "}
                  <img
                    src={require("assets/icons/arrow-sm.svg").default}
                    alt=""
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostContent
