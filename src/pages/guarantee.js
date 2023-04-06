import React from "react"

import Layout from "components/Layout"
import PageHeader from "components/PageHeader"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import SectionTestimonials from "components/SectionTestimonials"
import Divider from "components/Divider"
import GuaranteeContent from "page_components/guarantee/GuaranteeContent"

import hero_image from "assets/images/hero4.jpg"

const Guarantee = () => {
  return (
    <Layout
      seo={{
        title: "Guarantee",
        description: "",
      }}
    >
      <PageHeader title="Guarantee" img={hero_image} />
      <GuaranteeContent />
      <SectionContact />
      <Divider height={100} background="#363636" />
      <SectionForm />
      <SectionTestimonials />
    </Layout>
  )
}

export default Guarantee
