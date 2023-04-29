import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import SectionTestimonials from "components/SectionTestimonials"
import ContactContent from "page_components/contact/ContactContent"

import hero_image from "assets/images/hero4.jpg"

const Contact = () => {
  return (
    <Layout
      seo={{
        title: "Contact",
        description: "",
      }}
    >
      <PageHeader title="Contact" img={hero_image} />
      <ContactContent />
      <SectionContact />
      <SectionTestimonials />
    </Layout>
  )
}

export default Contact
