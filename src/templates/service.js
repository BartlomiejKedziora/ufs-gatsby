import React from "react"

import Layout from "components/Layout"

const Services = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout
      seo={{
        title: pageContext?.data?.title,
        description: "",
      }}
    >
      <div className="services" style={{ height: "500px" }}>
        <div className="site-container">
          <img
            src={pageContext?.data?.acfServices?.serviceIcon?.sourceUrl}
            alt={pageContext?.data?.acfServices?.serviceIcon?.altText}
          />
          <h1>{pageContext?.data?.acfServices?.title}</h1>
          <p>{pageContext?.data?.acfServices?.desc}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Services
