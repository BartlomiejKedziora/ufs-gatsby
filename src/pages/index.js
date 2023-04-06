import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

import React from "react"
import { graphql } from "gatsby"

import Layout from "components/Layout"
import SectionTestimonials from "components/SectionTestimonials"
import SectionContact from "components/SectionContact"
import SectionForm from "components/SectionForm"
import {
  HomeMission,
  HeroSlider,
  HomeServices,
  HomeWork,
  HomeGuarant,
  HomeMap,
} from "../page_components/home"

const Home = ({ data }) => {
  return (
    <Layout
      seo={{
        title: "Home",
        description: "",
      }}
    >
      <HeroSlider data={data?.heroSlider?.nodes?.[0]?.pageHome} />
      <HomeMission />
      <SectionContact />
      <HomeServices />
      <HomeWork />
      <HomeGuarant />
      <HomeMap />
      <SectionTestimonials />
      <SectionForm />
    </Layout>
  )
}

export const query = graphql`
  query {
    heroSlider: allWpPage(filter: { id: { eq: "cG9zdDo1" } }) {
      nodes {
        seo {
          metaDesc
          title
        }
        pageHome {
          text
          title1
          title2
          title2Accent
          title3
          backgroundimage {
            altText
            sourceUrl
          }
          singleslide {
            slidelink
            slidetext
            slidetitle
            slidetitle2
            slidetitle2Accent
            slidetitle3
            slidebackgroundimage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`

export default Home
