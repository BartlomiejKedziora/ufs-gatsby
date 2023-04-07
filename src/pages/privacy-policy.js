import React from "react"

import Layout from "components/Layout"
import PrivacyContent from "page_components/privacy_policy/PrivacyContent"

const PrivacyPolicy = () => {
  return (
    <Layout
      seo={{
        title: "Privacy policy",
        description: "",
      }}
    >
      <PrivacyContent />
    </Layout>
  )
}

export default PrivacyPolicy
