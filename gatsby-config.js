module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-babel-optional-chaining`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images`,
      },
      __key: `images`,
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `GatsbyJS`,
    //     short_name: `GatsbyJS`,
    //     start_url: `/`,
    //     background_color: `#f7f0eb`,
    //     theme_color: `#a2466c`,
    //     display: `standalone`,
    //   },
    // },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://ufs.kteproductions.pl/graphql`,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
        },
        schema: {
          timeout: 500000,
          requestConcurrency: 30,
          previewRequestConcurrency: 30,
        },
      },
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: `src/components`,
          styles: `src/styles`,
          images: `src/assets/images/`,
          node_modules: `node_modules`,
        },
      },
    },
  ],
  siteMetadata: {
    title: "The Ultimate Floor Sanding Company",
    description: "Floor Sanding Experts",
    author: "KTE Productions",
    siteUrl: "https://ultimatefloorsanding.co.uk/",
  },
}
