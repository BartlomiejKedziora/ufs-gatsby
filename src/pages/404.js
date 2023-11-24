import React from "react"

import Layout from "components/Layout"
import { Seo } from "components/Layout/components"
import NotFoundContent from "page_components/not_found/NotFoundContent"

export const Head = () => <Seo />

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundContent />
    </Layout>
  )
}

export default NotFoundPage
