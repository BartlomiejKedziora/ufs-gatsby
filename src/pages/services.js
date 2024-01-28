import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import Breadcrumbs from "components/Breadcrumbs"
import Divider from "components/Divider"
import PageHeader from "components/PageHeader"
import SectionPortfolio from "components/SectionPortfolio"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import { DomesticServices } from "page_components/services"
import BannerGetQuote from "components/BannerGetQuote"
import ModalQuote from "components/ModalQuote"

import hero_image from "assets/images/hero/domestic-services-Ultimate-Floor-Sanding-Company.webp"

export const Head = () => <Seo title="Services" description="" />

const Services = ({ data }) => {
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const breadcrumbs_data = [{ name: "Services", href: "/services/" }]

  return (
    <Layout>
      <PageHeader title="What We Offer" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <DomesticServices
        heading="Our Services"
        subtitle="Glance At"
        services_data={data?.allWpService?.nodes}
      />
      <BannerGetQuote
        setIsModalQuoteOpen={setIsModalQuoteOpen}
        padding="100px 0"
      />
      <SectionPortfolio />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpService(sort: { date: ASC }) {
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
