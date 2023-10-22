import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Breadcrumbs from "components/Breadcrumbs"
import PageHeader from "components/PageHeader"
import SectionGallery from "components/SectionGallery"
import CategorySelect from "components/CategorySelect"
import { BlogPageContent } from "page_components/blog"

import hero_image from "assets/images/hero4.jpg"

let filtered_articles = []

const Blog = ({ data }) => {
  const [currentCategory, setCurrentCategory] = useState(null)

  const breadcrumbs_data = [{ name: "Blog", href: "/blog/" }]

  if (currentCategory === null) {
    filtered_articles = data?.allWpPost?.nodes
  } else {
    filtered_articles = data?.allWpPost?.nodes.filter(article =>
      article?.categories?.nodes.some(e => e.name === currentCategory)
    )
  }

  return (
    <Layout>
      <PageHeader title="Blog" img={hero_image} />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <CategorySelect
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={data.allWpCategory.nodes}
      />
      <BlogPageContent data={filtered_articles} />
      <SectionGallery />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPost {
      nodes {
        categories {
          nodes {
            name
          }
        }
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
    allWpCategory {
      nodes {
        id
        name
      }
    }
  }
`

export default Blog
