import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"

const Services = ({ data }) => {
  const all_services_list = data.allWpService.nodes

  return (
    <Layout
      seo={{
        title: "Services",
        description: "",
      }}
    >
      <div className="services" style={{ height: "1000px" }}>
        <div className="site-container">
          <div className="row">
            <div className="col-6">Services UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
          <div className="row">
            {all_services_list?.map((item, index) => {
              return (
                <div key={index} className="col-4">
                  <Link to={item.slug}>
                    <h3>{item.acfServices.title}</h3>
                    <p>{item.acfServices.desc}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpService {
      nodes {
        slug
        acfServices {
          desc
          title
        }
      }
    }
  }
`

export default Services
