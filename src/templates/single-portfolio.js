import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionGallery from "components/SectionGallery"
import { PortfolioContent } from "page_components/single-portfolio"

const SinglePortfolio = ({ pageContext }) => {
  const portfolio_data = pageContext?.data
  const seo = portfolio_data?.seo

  const breadcrumbs_data = [
    { name: "Portfolio", href: "/portfolio/" },
    {
      name: `${portfolio_data?.acfPortfolio?.title}`,
      href: `/portfolio/${portfolio_data?.acfPortfolio?.slug}/`,
    },
  ]

  const img = portfolio_data?.acfPortfolio?.heroImage?.sourceUrl
  const gallery = portfolio_data?.acfPortfolio?.gallery

  return (
    <Layout
      seo={{
        title: seo?.title || portfolio_data?.title,
        description: seo?.metaDesc,
      }}
    >
      <PageHeader title={pageContext?.data?.title} img={img} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <PortfolioContent data={portfolio_data} />
      {gallery && <SectionGallery images={gallery} />}
    </Layout>
  )
}

export default SinglePortfolio
