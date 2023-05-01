import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Breadcrumbs from "components/Breadcrumbs"
import BlogPageContent from "page_components/blog/BlogPageContent"
import PageHeader from "components/PageHeader"
import BannerGetQuote from "components/BannerGetQuote"
import ModalQuote from "components/ModalQuote"

import hero_image from "assets/images/hero4.jpg"

const Blog = ({ data }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const breadcrumbs_data = [{ name: "Blog", href: "/blog/" }]

  return (
    <Layout>
      <PageHeader title="Blog" img={hero_image} />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <BlogPageContent data={data?.allWpPost?.nodes} />
      <BannerGetQuote setIsModalQuoteOpen={setIsModalQuoteOpen} padding="0" />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
        acfpost {
          excerpt
          miniImg {
            altText
            sourceUrl
          }
        }
        id
        title
        slug
        date(locale: "en", formatString: "DD MMM YYYY")
      }
    }
  }
`

export default Blog
