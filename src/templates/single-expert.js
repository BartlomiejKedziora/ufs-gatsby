import React, { useState } from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import ModalQuote from "components/ModalQuote"
import SectionBlog from "components/SectionBlog"
import SectionContact from "components/SectionContact"
import SectionGallery from "components/SectionGallery"
import ExpertContent from "page_components/single-expert/ExpertContent"

export const Head = ({ pageContext }) => {
  const post_data = pageContext?.data

  return (
    <Seo
      title={post_data?.seo?.title || post_data?.title}
      description={post_data?.seo?.metaDesc}
    />
  )
}

const SingleExpert = ({ pageContext }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const post_data = pageContext?.data
  const gallery = post_data?.acfExperts?.gallery

  const breadcrumbs_data = [
    { name: "Local Experts", href: "/local-experts/" },
    { name: `${post_data?.title}`, href: `/local-experts/${post_data?.slug}/` },
  ]

  return (
    <Layout>
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
