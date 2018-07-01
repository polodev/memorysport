module.exports = {
  siteMetadata: {
    title: `memory sport`,
    siteUrl: `/memorysport`,
    description: `Blazing-fast static site generator for React`,
  },
  pathPrefix: `/memorysport`,
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};