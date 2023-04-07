import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import { DomesticServices } from "page_components/services"

import hero_image from "assets/images/hero4.jpg"

const Commercial = ({ data }) => {
  return (
    <Layout
      seo={{
        title: "Commercial",
        description: "",
      }}
    >
      <PageHeader title="What We Offer" img={hero_image} />
      <DomesticServices
        heading="Commercial"
        subtitle="Glance At"
        services_data={data?.allWpCommercial?.nodes}
      />
      <SectionContact />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpCommercial {
      nodes {
        acfCommercial {
          desc
          title
          serviceIcon {
            altText
            sourceUrl
          }
        }
        id
        slug
      }
    }
  }
`

export default Commercial
