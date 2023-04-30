import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import ServiceContent from "page_components/single-service/ServiceContent"

const SingleService = ({ pageContext }) => {
  const service_data = pageContext?.data

  const getImage = service_data => {
    if (service_data?.acfServices) {
      return service_data?.acfServices?.heroImage?.sourceUrl
    } else if (service_data?.acfCommercial) {
      return service_data?.acfCommercial?.heroImage?.sourceUrl
    } else if (service_data?.acfPortfolio) {
      return service_data?.acfPortfolio?.heroImage?.sourceUrl
    }
  }

  const img = getImage(service_data)

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
