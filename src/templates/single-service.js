import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import ServiceContent from "page_components/single-service/ServiceContent"

const SingleService = ({ pageContext }) => {
  const service_data = pageContext?.data
  const img = service_data?.acfServices
    ? service_data?.acfServices?.heroImage?.sourceUrl
    : service_data?.acfCommercial?.heroImage?.sourceUrl
  return (
    <Layout
      seo={{
        title: pageContext?.data?.title,
        description: "",
      }}
    >
      <PageHeader title={pageContext?.data?.title} img={img} />
      <ServiceContent data={service_data} />
    </Layout>
  )
}

export default SingleService
