import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import Breadcrumbs from "components/Breadcrumbs"
import PageHeader from "components/PageHeader"
import CategorySelect from "components/CategorySelect"
import { PortfolioPageContent } from "page_components/portfolio"

import hero_image from "assets/images/hero/portfolio.webp"

export const Head = () => <Seo title="Portfolio" description="" />

let filtered_tails = []

const Portfolio = ({ data }) => {
  const [currentCategory, setCurrentCategory] = useState(null)

  const breadcrumbs_data = [{ name: "Portfolio", href: "/portfolio/" }]

  if (currentCategory === null) {
    filtered_tails = data?.allWpPortfolio?.nodes
  } else {
    filtered_tails = data?.allWpPortfolio?.nodes.filter(portfolio =>
      portfolio?.portfolioCategories?.nodes.some(
        e => e.name === currentCategory
      )
    )
  }

  return (
    <Layout>
      <PageHeader title="Portfolio" img={hero_image} />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <CategorySelect
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        categories={data.allWpPortfolioCategory.nodes}
      />
      <PortfolioPageContent data={filtered_tails} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpPortfolio {
      nodes {
        slug
        id
        title
        acfPortfolio {
          heroImage {
            altText
            sourceUrl
          }
        }
        portfolioCategories {
          nodes {
            name
          }
        }
      }
    }
    allWpPortfolioCategory {
      nodes {
        id
        name
      }
    }
  }
`

export default Portfolio
