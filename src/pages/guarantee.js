import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PageHeader from "components/PageHeader"
import Breadcrumbs from "components/Breadcrumbs"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import SectionTestimonials from "components/SectionTestimonials"
import Divider from "components/Divider"
import GuaranteeContent from "page_components/guarantee/GuaranteeContent"

import hero_image from "assets/images/hero4.jpg"

export const Head = () => <Seo title="Guarantee" description="" />

const Guarantee = () => {
  const breadcrumbs_data = [{ name: "Guarantee", href: "/guarantee/" }]

  return (
    <Layout>
      <PageHeader title="Guarantee" img={hero_image} />
      <Breadcrumbs breadcrumbs_data={breadcrumbs_data} />
      <GuaranteeContent />
      <SectionContact pt />
      <Divider height={100} background="#363636" />
      <SectionForm />
      <SectionTestimonials />
    </Layout>
  )
}

export default Guarantee
