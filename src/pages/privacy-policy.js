import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import PrivacyContent from "page_components/privacy_policy/PrivacyContent"

export const Head = () => <Seo title="Privacy policy" description="" />

const PrivacyPolicy = () => {
  return (
    <Layout>
      <PrivacyContent />
    </Layout>
  )
}

export default PrivacyPolicy
