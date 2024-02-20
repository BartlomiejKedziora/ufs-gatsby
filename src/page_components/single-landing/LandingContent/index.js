import "./styles.scss"

import React from "react"

const LandingContent = ({ data }) => {
  return (
    <section className="single-post">
      <div className="container">
        <div className="single-post__inner">
          <p className="single-post__title">{data?.title}</p>
          <div
            className="single-post__content"
            dangerouslySetInnerHTML={{ __html: data?.acfLandings?.textEditor }}
          />
        </div>
      </div>
    </section>
  )
}

export default LandingContent
