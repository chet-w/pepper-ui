const path = require('path')

module.exports = {
  siteMetadata: {
    site: `Pepper UI`,
    title: `Pepper UI`,
    titleTemplate: `%s - Pepper-UI`,
    description: `Pepper - a new flavour for User Interfaces`,
    siteUrl: `https://pepper-ui.netlify.com`,
    language: `en`,
    color: `#512888`,
    twitter: `@chet-w`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pepper UI`,
        short_name: `Pepper`,
        start_url: `/`,
        background_color: `#512888 `,
        theme_color: `#512888 `,
        display: `standalone`,
        icon: `src/images/tic-tac-toe.svg`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.ts`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}
