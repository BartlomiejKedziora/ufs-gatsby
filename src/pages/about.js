import React from "react"

import Layout from "components/Layout"
import Breadcrumbs from "components/Breadcrumbs"
import Divider from "components/Divider"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import SectionTestimonials from "components/SectionTestimonials"
import AboutContent from "page_components/about/AboutContent"

import hero_image from "assets/images/hero/floor_sanding_hero25.jpg"

const About = () => {
  const breadcrumbs_data = [{ name: "About", href: "/about/" }]
  return (
    <Layout
      seo={{
        title: "About us",
        description: "",
      }}
    >
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
