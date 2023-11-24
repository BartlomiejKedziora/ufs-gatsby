import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionGallery from "components/SectionGallery"
import { PortfolioContent } from "page_components/single-portfolio"

export const Head = ({ pageContext }) => {
  const post_data = pageContext?.data

  return (
    <Seo
      title={post_data?.seo?.title || post_data?.title}
      description={post_data?.seo?.metaDesc}
    />
  )
}

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
  const gallery = portfolio_data?.acfPortfolio?.gallery

  return (
    <Layout>
      <PageHeader title={pageContext?.data?.title} img={img} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <PortfolioContent data={portfolio_data} />
      {gallery && <SectionGallery images={gallery} />}
    </Layout>
  )
}

export default SinglePortfolio
