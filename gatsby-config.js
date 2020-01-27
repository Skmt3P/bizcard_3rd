module.exports = {
  siteMetadata: {
    title: `R.Sakamoto's BizCard`,
    description: `R.Sakamoto(@Skmt3P) is a President of OmusBridge OÜ | Front-end Engineer | Teacher  `,
    author: `@skmt3p`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Skmt3P's BizCard`,
        short_name: `Skmt3P's`,
        start_url: `/`,
        background_color: `#BC002D`,
        theme_color: `#BC002D`,
        display: `minimal-ui`,
        icon: `src/images/prof_real_mix icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-no-sourcemaps',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
