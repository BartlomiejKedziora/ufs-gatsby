import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import Divider from "components/Divider"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import { DomesticServices } from "page_components/services"

import hero_image from "assets/images/hero4.jpg"

export const Head = () => <Seo title="Commercial" description="" />

const Commercial = ({ data }) => {
  const breadcrumbs_data = [{ name: "Commercial", href: "/commercial/" }]

  return (
    <Layout>
      <PageHeader title="What We Offer" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <DomesticServices
        heading="Commercial"
        subtitle="Glance At"
        services_data={data?.allWpCommercial?.nodes}
      />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpCommercial(sort: { date: ASC }) {
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
