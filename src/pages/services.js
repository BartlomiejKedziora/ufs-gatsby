import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import Divider from "components/Divider"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import { DomesticServices } from "page_components/services"

import hero_image from "assets/images/hero4.jpg"

const Services = ({ data }) => {
  return (
    <Layout
      seo={{
        title: "Services",
        description: "",
      }}
    >
      <PageHeader title="What We Offer" img={hero_image} />
      <DomesticServices
        heading="Domestic Services"
        subtitle="Glance At"
        services_data={data?.allWpService?.nodes}
      />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpService {
      nodes {
        acfServices {
          desc
          serviceIcon {
            altText
            sourceUrl
          }
          title
        }
        slug
        id
      }
    }
  }
`

export default Services
