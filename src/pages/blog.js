import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import BlogPageContent from "page_components/blog/BlogPageContent"
import PageHeader from "components/PageHeader"

import hero_image from "assets/images/hero4.jpg"

const Blog = ({ data }) => {
  const breadcrumbs_data = [
    {
      name: "Strona",
      href: "/",
    },
    {
      name: "Historia",
      href: "/historia",
    },
  ]

  return (
    <Layout>
      <PageHeader title="Blog" img={hero_image} />
      <BlogPageContent data={data?.allWpPost?.nodes} />
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
