import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import ServiceContent from "page_components/single-service/ServiceContent"

const SingleService = ({ pageContext }) => {
  const service_data = pageContext?.data

  console.log(service_data)
  const getImage = service_data => {
    if (service_data?.acfServices) {
      return service_data?.acfServices?.heroImage?.sourceUrl
    } else if (service_data?.acfCommercial) {
      return service_data?.acfCommercial?.heroImage?.sourceUrl
    } else if (service_data?.acfPortfolio) {
      return service_data?.acfPortfolio?.heroImage?.sourceUrl
    }
  }

  const getBreadcrumbs = service_data => {
    if (service_data?.acfServices) {
      return [
        { name: "Services", href: "/services/" },
        {
          name: `${service_data?.acfServices?.title}`,
          href: `/services/${service_data?.acfServices?.slug}/`,
        },
      ]
    } else if (service_data?.acfCommercial) {
      return [
        { name: "Commercial", href: "/commercial/" },
        {
          name: `${service_data?.acfCommercial?.title}`,
          href: `/commercial/${service_data?.acfCommercial?.slug}/`,
        },
      ]
    } else if (service_data?.acfPortfolio) {
      return [
        {
          name: `${service_data?.acfPortfolio?.title}`,
          href: `/${service_data?.acfPortfolio?.slug}/`,
        },
      ]
    }
  }

  const breadcrumbs_data = getBreadcrumbs(service_data)

  const img = getImage(service_data)

  return (
    <Layout
      seo={{
        title: pageContext?.data?.title,
        description: "",
      }}
    >
      <PageHeader title={pageContext?.data?.title} img={img} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <ServiceContent data={service_data} />
    </Layout>
  )
}

export default SingleService
