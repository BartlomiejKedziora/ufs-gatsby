import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import ExpertsLocations from "page_components/local_experts/ExpertsLocations"
import ExpertsList from "page_components/local_experts/ExpertsList"
import SectionContact from "components/SectionContact"
import SectionTestimonials from "components/SectionTestimonials"
import SectionForm from "components/SectionForm"
import ModalQuote from "components/ModalQuote"

import hero_image from "assets/images/hero4.jpg"

const LocalExpertsPage = ({ data }) => {
  const [currentLocation, setCurrentLocation] = useState("London")
  const [isModalQuoteOpen, setIsModalQuoteOpen] = useState(false)

  const filtered_experts = data?.allWpExpert?.nodes.filter(expert =>
    expert.locations.nodes.some(e => e.name === currentLocation)
  )

  const breadcrumbs_data = [{ name: "Local Experts", href: "/local-experts/" }]

  return (
    <Layout
      seo={{
        title: "Local Experts",
        description: "",
      }}
    >
      <PageHeader title="Local Experts" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <ExpertsLocations
        locations={data?.allWpLocation?.nodes}
        setCurrentLocation={setCurrentLocation}
      />
      <ExpertsList
        experts_to_show={filtered_experts}
        currentLocation={currentLocation}
        setIsModalQuoteOpen={setIsModalQuoteOpen}
      />
      <SectionContact />
      <SectionTestimonials />
      <SectionForm />
      {isModalQuoteOpen && (
        <ModalQuote closeFn={() => setIsModalQuoteOpen(false)} />
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpLocation {
      nodes {
        name
        id
        count
      }
    }
    allWpExpert {
      nodes {
        title
        slug
        id
        acfExperts {
          address
          name
          phone
          website
          gallery {
            altText
            sourceUrl
          }
          mainimg {
            altText
            sourceUrl
          }
        }
        locations {
          nodes {
            name
          }
        }
      }
    }
  }
`

export default LocalExpertsPage
