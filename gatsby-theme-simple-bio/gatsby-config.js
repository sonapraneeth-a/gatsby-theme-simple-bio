const merge = require("lodash.merge");

module.exports = (themeOptions) => {
  console.log(`Environment: ${process.env.NODE_ENV}`);
  // Default options to be used in theme
  const defaultOptions = {
    baseUrl: "/", // Default: "/"
    // Paths for folders
    paths: {
      // Directory path for images
      assets: "content/assets", // Default: "content/assets"
      // Directory path for MDX home page content
      home: "content/home", // Default: "content/home"
    },
    // Should the theme have rounded components
    rounded: false, // Default: false
  };
  // Options created using default and provided options
  const options = merge({}, defaultOptions, themeOptions);

  return {
    // Default siteMetadata
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
        facebook: "john-doe",
        twitter: "john-doe",
        email: "john-doe",
        linkedin: "john-doe",
        github: "john-doe",
      },
    },
    plugins: [
      /* {
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
      },*/
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "author",
          path: "author",
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "theme-assets",
          path: options.paths.assets,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "assets",
          path: `${__dirname}/src/assets`,
        },
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "home",
          path: `${options.paths.home}`,
        },
      },
      "gatsby-plugin-mdx",
      "gatsby-plugin-react-helmet",
      "gatsby-transformer-yaml",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      /* {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: "gatsby-theme-simple-bio",
          short_name: "Simple bio",
          start_url: serviceWorkerUrl,
          background_color: "#f0efef",
          theme_color: "#f0efef",
          display: "minimal-ui",
          // This path is relative to the root of the site.
          icon: `${__dirname}/src/assets/icon.svg`,
        },
      },
      // this (optional) plugin enables Progressive Web App
      // + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      "gatsby-plugin-offline",*/
      "gatsby-plugin-theme-ui",
    ],
  };
};
