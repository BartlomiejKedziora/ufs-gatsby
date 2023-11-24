import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import ThankYouContent from "page_components/thank_you/ThankYouContent"

export const Head = () => <Seo />

const ThankYouPage = () => {
  return (
    <Layout>
      <ThankYouContent />
    </Layout>
  )
}

export default ThankYouPage
