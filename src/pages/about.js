import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import Breadcrumbs from "components/Breadcrumbs"
import Divider from "components/Divider"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import SectionTestimonials from "components/SectionTestimonials"
import AboutContent from "page_components/about/AboutContent"

import hero_image from "assets/images/hero/about-us.webp"

export const Head = () => <Seo title="About us" description="" />

const About = () => {
  const breadcrumbs_data = [{ name: "About", href: "/about/" }]
  return (
    <Layout>
      <PageHeader title="About us" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <AboutContent />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
      <SectionTestimonials />
    </Layout>
  )
}

export default About
