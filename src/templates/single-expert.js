import React, { useState } from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import ModalQuote from "components/ModalQuote"
import SectionBlog from "components/SectionBlog"
import SectionContact from "components/SectionContact"
import SectionGallery from "components/SectionGallery"
import ExpertContent from "page_components/single-expert/ExpertContent"

const SingleExpert = ({ pageContext }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const post_data = pageContext?.data
  const seo = post_data?.seo
  const gallery = post_data?.acfExperts?.gallery

  const breadcrumbs_data = [
    { name: "Local Experts", href: "/local-experts/" },
    { name: `${post_data?.title}`, href: `/local-experts/${post_data?.slug}/` },
  ]
  console.log(post_data)
  return (
    <Layout
      seo={{
        title: seo?.title || post_data?.title,
        description: seo?.metaDesc,
      }}
    >
      <PageHeader
        title={post_data?.title}
        img={post_data?.acfExperts?.heroimg?.sourceUrl}
      />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <ExpertContent
        data={post_data}
        setIsModalQuoteOpen={setIsModalQuoteOpen}
      />
      {gallery && <SectionGallery images={gallery} />}
      <SectionContact pb />
      <SectionBlog />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export default SingleExpert
