const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve(`src/templates/single-service.js`)
  const postTemplate = path.resolve(`src/templates/single-post.js`)

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          acfpost {
            mainImg {
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
      allWpService {
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
      allWpCommercial {
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
    }
  `)

  result.data.allWpPost.nodes.forEach((page, index) => {
    return createPage({
      path: `/blog/${page.slug}/`,
      component: postTemplate,
      context: {
        title: page.title,
        data: page,
        // previous: result.data.allWpService.edges[index].previous,
        // next: result.data.allWpService.edges[index].next,
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
