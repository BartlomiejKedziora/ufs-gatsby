import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Breadcrumbs from "components/Breadcrumbs"
import BlogPageContent from "page_components/blog/BlogPageContent"
import PageHeader from "components/PageHeader"

import hero_image from "assets/images/hero4.jpg"

const Blog = ({ data }) => {
  const breadcrumbs_data = [{ name: "Blog", href: "/blog/" }]

  return (
    <Layout>
      <PageHeader title="Blog" img={hero_image} />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
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
