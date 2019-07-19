module.exports = {
  pathPrefix: "/gatsby-theme-simple-bio",
  siteMetadata: {
    appName: "Demo of gatsby-theme-simple-bio",
    title: "Demo of gatsby-theme-simple-bio",
    author: "John Doe",
    // TODO: Need to change this URL
    siteUrl: "https://www.gatsbyjs.org",
    description:
      "This site is a demonstration for using theme " +
      "gatsby-theme-simple-bio",
    social: {
      twitter: "john-doe",
    },
  },
  plugins: [
    {
      resolve: "gatsby-theme-simple-bio",
      options: {
        basePath: "/gatsby-theme-simple-bio",
        rounded: false,
        paths: {
          assets: "content/assets",
          home: "content/home",
        },
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
