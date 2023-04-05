import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import PostContent from "page_components/single-post/PostContent"

const SinglePost = ({ pageContext }) => {
  const post_data = pageContext?.data
  return (
    <Layout
      seo={{
        title: post_data?.title,
        description: "",
      }}
    >
      <PageHeader
        title={post_data?.title}
        img={post_data?.acfpost?.mainImg?.sourceUrl}
      />
      <PostContent data={post_data} />
    </Layout>
  )
}

export default SinglePost
