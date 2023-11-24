import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import TestimonialsContent from "page_components/testimonials/TestimonialsContent"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import Divider from "components/Divider"

import hero_image from "assets/images/hero4.jpg"

export const Head = () => <Seo title="Testimonials" description="" />

const Testimonials = ({ data }) => {
  const breadcrumbs_data = [{ name: "Testimonials", href: "/testimonials/" }]

  return (
    <Layout>
      <PageHeader title="Testimonials" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <TestimonialsContent data={data?.allWpTestimonial?.nodes} />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpTestimonial(sort: { date: DESC }) {
      nodes {
        id
        acfTestimonials {
          rating
          name
          review
          role
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`

export default Testimonials
