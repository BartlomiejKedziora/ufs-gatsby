module.exports = {
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-babel-optional-chaining`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/home/image2.jpg`,
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
