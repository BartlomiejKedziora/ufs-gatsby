import React, { useState } from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import ModalQuote from "components/ModalQuote"
import SectionBlog from "components/SectionBlog"
import SectionContact from "components/SectionContact"
import ExpertContent from "page_components/single-expert/ExpertContent"

const SingleExpert = ({ pageContext }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const post_data = pageContext?.data

  const breadcrumbs_data = [
    { name: "Local Experts", href: "/local-experts/" },
    { name: `${post_data?.title}`, href: `/local-experts/${post_data?.slug}/` },
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
        img={post_data?.acfExperts?.heroimg?.sourceUrl}
      />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <ExpertContent
        data={post_data}
        setIsModalQuoteOpen={setIsModalQuoteOpen}
      />
      <SectionContact />
      <SectionBlog />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export default SingleExpert
