const pathPrefix = "/gatsby-theme-simple-bio";
const baseUrl = "/";
let serviceWorkerUrl = pathPrefix + baseUrl;
serviceWorkerUrl = serviceWorkerUrl.replace(/\/?$/, "/");
console.log(`Service worker URL: ${serviceWorkerUrl}`);

module.exports = {
  pathPrefix: pathPrefix,
  siteMetadata: {
    appName: "Demo of gatsby-theme-simple-bio",
    title: "Demo of gatsby-theme-simple-bio",
    author: "John Doe",
    siteUrl: "https://sonapraneeth-a.github.io/gatsby-theme-simple-bio/",
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
        baseUrl: baseUrl,
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Demo of gatsby-theme-simple-bio",
        short_name: "Simple bio",
        start_url: serviceWorkerUrl,
        background_color: "#f0efef",
        theme_color: "#f0efef",
        display: "minimal-ui",
        // This path is relative to the root of the site.
        icon: `${__dirname}/content/assets/icon.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App
    // + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
};
