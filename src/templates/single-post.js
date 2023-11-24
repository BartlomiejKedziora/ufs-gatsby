import React, { useState } from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import BannerGetQuote from "components/BannerGetQuote"
import ModalQuote from "components/ModalQuote"
import SectionBlog from "components/SectionBlog"
import SectionGallery from "components/SectionGallery"
import PostContent from "page_components/single-post/PostContent"

export const Head = ({ pageContext }) => {
  const post_data = pageContext?.data

  return (
    <Seo
      title={post_data?.seo?.title || post_data?.title}
      description={post_data?.seo?.metaDesc}
    />
  )
}

const SinglePost = ({ pageContext }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const post_data = pageContext?.data
  const gallery = post_data?.acfpost?.gallery

  const breadcrumbs_data = [
    { name: "Blog", href: "/blog/" },
    { name: `${post_data?.title}`, href: `/blog/${post_data?.slug}/` },
  ]

  return (
    <Layout>
      <PageHeader
        title={post_data?.title}
        img={post_data?.acfpost?.mainImg?.sourceUrl}
      />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <PostContent
        data={post_data}
        previous={pageContext.previous}
        next={pageContext.next}
      />
      {gallery && <SectionGallery images={gallery} />}
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
