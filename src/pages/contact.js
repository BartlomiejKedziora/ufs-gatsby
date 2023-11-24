import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionContact from "components/SectionContact"
import SectionTestimonials from "components/SectionTestimonials"
import ContactContent from "page_components/contact/ContactContent"

import hero_image from "assets/images/hero4.jpg"

export const Head = () => <Seo title="Contact" description="" />

const Contact = () => {
  const breadcrumbs_data = [{ name: "Contact", href: "/contact/" }]

  return (
    <Layout>
      <PageHeader title="Contact" img={hero_image} />
      <Breadcrumbs dark breadcrumbs_data={breadcrumbs_data} />
      <ContactContent />
      <SectionContact />
      <SectionTestimonials />
    </Layout>
  )
}

export default Contact
