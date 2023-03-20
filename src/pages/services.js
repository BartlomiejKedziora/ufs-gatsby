import React from "react"
import { graphql, Link } from "gatsby"
import { useState } from "react"

import Layout from "components/Layout"

const Services = ({ data }) => {
  const [openCategory, setOpenCategory] = useState(null)
  console.log(openCategory)
  // const all_services_list = data.allWpService.nodes

  // don t get it from cms
  // const features_list = [
  //   {
  //     icon: require("assets/icons/offer/offer1.svg").default,
  //     title: "Services UFS",
  //     desc: "Description",
  //   },
  //   {
  //     icon: require("assets/icons/offer/offer2.svg").default,
  //     title: "Services UFS",
  //     desc: "Description",
  //   },
  // ]
  const { desc, title, serviceIcon } = data.firstPost.edges[0].node.acfServices
  console.log(data)
  let filtered_posts = []
  if (!openCategory) {
    filtered_posts = data.postsList.edges
  } else {
    filtered_posts = data.postsList.edges.filter(category =>
      category.node.categories.nodes.some(e => e.name === openCategory)
    )
  }
  console.log(data.postsList.edges)
  // console.log(filtered_posts)
  return (
    <Layout
      seo={{
        title: "Services",
        description: "",
      }}
    >
      <div className="services" style={{ height: "1000px" }}>
        <div className="container">
          <div className="row">
            <div className="col-6">Services UFS!</div>
            <div className="col-6">Hello world!</div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4>Najnowszy artykul</h4>
              <Link to={data.firstPost.edges[0].node.uri}>
                <img src={serviceIcon?.sourceUrl} alt="" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </Link>
            </div>
            <div className="row my-5">
              <div className="col-2">
                <button type="button" onClick={() => setOpenCategory(null)}>
                  Wszystkie
                </button>
              </div>
              {data.allWpCategory.nodes.map((item, index) => {
                return (
                  <div key={index} className="col-2">
                    <button
                      type="button"
                      onClick={() => setOpenCategory(item.slug)}
                    >
                      {item.name}
                    </button>
                  </div>
                )
              })}
            </div>
            {filtered_posts?.map((item, index) => {
              return (
                <div key={index} className="col-4">
                  <Link to={item.node.slug}>
                    <img
                      src={item?.node.acfServices?.serviceIcon?.sourceUrl}
                      alt=""
                    />
                    <h3>{item.node.acfServices.title}</h3>
                    <p>{item.node.acfServices.desc}</p>
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
    firstPost: allWpService(limit: 1, sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          acfServices {
            desc
            title
            serviceIcon {
              altText
              sourceUrl
            }
          }
          slug
          uri
        }
      }
    }
    postsList: allWpService(skip: 1, sort: { order: DESC, fields: date }) {
      edges {
        node {
          id
          acfServices {
            desc
            title
            serviceIcon {
              altText
              sourceUrl
            }
          }
          slug
          uri
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
    allWpCategory(filter: { name: { ne: "news" } }) {
      nodes {
        name
        slug
      }
    }
  }
`

export default Services
