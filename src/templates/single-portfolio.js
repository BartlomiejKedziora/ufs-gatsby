import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import {
  PortfolioContent,
  PortfolioGallery,
} from "page_components/single-portfolio"

const SinglePortfolio = ({ pageContext }) => {
  const portfolio_data = pageContext?.data

  const breadcrumbs_data = [
    { name: "Portfolio", href: "/portfolio/" },
    {
      name: `${portfolio_data?.acfPortfolio?.title}`,
      href: `/portfolio/${portfolio_data?.acfPortfolio?.slug}/`,
    },
  ]

  const img = portfolio_data?.acfPortfolio?.heroImage?.sourceUrl

  return (
    <Layout
      seo={{
        title: pageContext?.data?.title,
        description: "",
      }}
    >
      <PageHeader title={pageContext?.data?.title} img={img} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <PortfolioContent data={portfolio_data} />
      {portfolio_data?.acfPortfolio?.gallery && (
        <PortfolioGallery data={portfolio_data} />
      )}
    </Layout>
  )
}

export default SinglePortfolio
