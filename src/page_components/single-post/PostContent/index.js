import "./styles.scss"

import React from "react"

const PostContent = ({ data }) => {
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
        </div>
      </div>
    </section>
  )
}

export default PostContent
