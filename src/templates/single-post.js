import React from "react"
import { Link } from "gatsby"

import Layout from "components/Layout"

const SinglePost = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout
      seo={{
        title: pageContext?.data?.title,
        description: "",
      }}
    >
      <div className="single-post">
        <div className="container">
          <div>{pageContext?.data?.title}</div>
          {/* <img
            src={pageContext?.data?.acfServices?.serviceIcon?.sourceUrl}
            alt={pageContext?.data?.acfServices?.serviceIcon?.altText}
          />
          <h1>{pageContext?.data?.acfServices?.title}</h1>
          <p>{pageContext?.data?.acfServices?.desc}</p>
          <div className="row my-5">
            <div className="col-3">
              {pageContext.previous && (
                <Link to={`/services/${pageContext.previous.slug}`}>
                  poprzedni
                  <p>{pageContext.previous.title}</p>
                </Link>
              )}
            </div>
            <div className="col-3">
              {pageContext.next && (
                <Link to={`/services/${pageContext.next.slug}`}>
                  nastepny
                  <p>{pageContext.next.title}</p>
                </Link>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

export default SinglePost
