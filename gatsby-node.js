const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve(`src/templates/single-service.js`)
  const postTemplate = path.resolve(`src/templates/single-post.js`)
  const expertTemplate = path.resolve(`src/templates/single-expert.js`)
  const portfolioTemplate = path.resolve(`src/templates/single-portfolio.js`)
  const landingTemplate = path.resolve(`src/templates/single-landing.js`)

  const result = await graphql(`
    {
      allWpPost(sort: { date: DESC }) {
        nodes {
          acfpost {
            mainImg {
              altText
              sourceUrl
            }
            gallery {
              altText
              sourceUrl
            }
          }
          id
          seo {
            title
            metaDesc
          }
          title
          date(locale: "en", formatString: "DD MMM YYYY")
          content
          slug
        }
        edges {
          previous {
            slug
            title
          }
          next {
            slug
            title
          }
        }
      }
      allWpLanding(sort: { date: ASC }) {
        nodes {
          acfLandings {
            excerpt
            title
            heroImage {
              altText
              sourceUrl
            }
            textEditor
            gallery {
              altText
              sourceUrl
            }
          }
          slug
          uri
          title
          id
          seo {
            title
            metaDesc
          }
        }
      }
      allWpService(sort: { date: ASC }) {
        nodes {
          acfServices {
            title
            heroImage {
              altText
              sourceUrl
            }
            row {
              blockSubtitle
              blockText
              blockTitle
              button
              buttonLink
              blockImage {
                altText
                sourceUrl
              }
            }
            gallery {
              altText
              sourceUrl
            }
          }
          slug
          uri
          title
          id
          seo {
            title
            metaDesc
          }
        }
      }
      allWpCommercial(sort: { date: ASC }) {
        nodes {
          acfCommercial {
            title
            heroImage {
              altText
              sourceUrl
            }
            row {
              blockSubtitle
              blockText
              blockTitle
              button
              buttonLink
              blockImage {
                altText
                sourceUrl
              }
            }
            gallery {
              altText
              sourceUrl
            }
          }
          id
          slug
          uri
          title
          seo {
            title
            metaDesc
          }
        }
      }
      allWpPortfolio(sort: { date: DESC }) {
        nodes {
          slug
          uri
          title
          id
          seo {
            metaDesc
            title
          }
          acfPortfolio {
            title
            row {
              blockSubtitle
              blockText
              blockTitle
              button
              buttonLink
              blockImages {
                altText
                sourceUrl
              }
            }
            gallery {
              altText
              sourceUrl
            }
            heroImage {
              altText
              sourceUrl
            }
          }
        }
      }
      allWpExpert(sort: { date: DESC }) {
        nodes {
          title
          slug
          seo {
            metaDesc
            title
          }
          id
          acfExperts {
            address
            name
            phone
            website
            quoteName
            quoteRole
            quoteText
            quoteImg {
              altText
              sourceUrl
            }
            gallery {
              altText
              sourceUrl
            }
            heroimg {
              altText
              sourceUrl
            }
            mainimg {
              altText
              sourceUrl
            }
            row {
              blockSubtitle
              blockText
              button
              buttonLink
              blockImage {
                altText
                sourceUrl
              }
              blockTitle
            }
          }
        }
      }
    }
  `)

  result.data.allWpPost.nodes.forEach((page, index) => {
    return createPage({
      path: `/blog/${page.slug}/`,
      component: postTemplate,
      context: {
        title: page.title,
        data: page,
        previous: result.data.allWpPost.edges[index].previous,
        next: result.data.allWpPost.edges[index].next,
      },
    })
  })

  result.data.allWpCommercial.nodes.forEach((page, index) => {
    return createPage({
      path: page.uri,
      component: serviceTemplate,
      context: {
        title: page.title,
        data: page,
      },
    })
  })

  result.data.allWpService.nodes.forEach((page, index) => {
    return createPage({
      path: page.uri,
      component: serviceTemplate,
      context: {
        title: page.title,
        data: page,
      },
    })
  })

  result.data.allWpLanding.nodes.forEach((page, index) => {
    return createPage({
      path: `/${page.slug}/`,
      component: landingTemplate,
      context: {
        title: page.title,
        data: page,
      },
    })
  })

  result.data.allWpPortfolio.nodes.forEach((page, index) => {
    return createPage({
      path: `/portfolio/${page.slug}/`,
      component: portfolioTemplate,
      context: {
        title: page.title,
        data: page,
      },
    })
  })

  result.data.allWpExpert.nodes.forEach((page, index) => {
    return createPage({
      path: `/local-experts/${page.slug}/`,
      component: expertTemplate,
      context: {
        title: page.title,
        data: page,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-javascript" || stage === "develop") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
