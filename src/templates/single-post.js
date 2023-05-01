import React, { useState } from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import PostContent from "page_components/single-post/PostContent"
import BannerGetQuote from "components/BannerGetQuote"
import ModalQuote from "components/ModalQuote"
import SectionBlog from "components/SectionBlog"

const SinglePost = ({ pageContext }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const post_data = pageContext?.data

  const breadcrumbs_data = [
    { name: "Blog", href: "/blog/" },
    { name: `${post_data?.title}`, href: `/blog/${post_data?.slug}/` },
  ]
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
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <PostContent data={post_data} />
      <BannerGetQuote
        setIsModalQuoteOpen={setIsModalQuoteOpen}
        padding="0 0 100px"
      />
      <SectionBlog />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export default SinglePost
