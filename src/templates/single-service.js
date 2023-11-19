import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionGallery from "components/SectionGallery"
import ServiceContent from "page_components/single-service/ServiceContent"

const SingleService = ({ pageContext }) => {
  const service_data = pageContext?.data
  const seo = service_data?.seo

  const getImage = service_data => {
    if (service_data?.acfServices) {
      return service_data?.acfServices?.heroImage?.sourceUrl
    } else if (service_data?.acfCommercial) {
      return service_data?.acfCommercial?.heroImage?.sourceUrl
    }
  }

  const getGallery = service_data => {
    if (service_data?.acfServices) {
      return service_data?.acfServices?.gallery
    } else if (service_data?.acfCommercial) {
      return service_data?.acfCommercial?.gallery
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
    }
  }

  const breadcrumbs_data = getBreadcrumbs(service_data)

  const img = getImage(service_data)
  const gallery = getGallery(service_data)

  return (
    <Layout
      seo={{
        title: seo?.title || service_data?.title,
        description: seo?.metaDesc,
      }}
    >
      <PageHeader title={pageContext?.data?.title} img={img} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <ServiceContent data={service_data} />
      {gallery && <SectionGallery images={gallery} />}
    </Layout>
  )
}

export default SingleService
