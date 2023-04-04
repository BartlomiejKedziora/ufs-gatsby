const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const serviceTemplate = path.resolve(`src/templates/service.js`)
  const postTemplate = path.resolve(`src/templates/single-post.js`)

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          acfpost {
            excerpt
            miniImg {
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
      }
      allWpService {
        nodes {
          slug
          uri
          title
          id
          acfServices {
            desc
            title
            serviceIcon {
              altText
              sourceUrl
            }
          }
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
    }
  `)

  result.data.allWpPost.nodes.forEach((page, index) => {
    return createPage({
      path: `/blog/${page.slug}/`,
      component: postTemplate,
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
        previous: result.data.allWpService.edges[index].previous,
        next: result.data.allWpService.edges[index].next,
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
