const fs = require("fs");
const merge = require("lodash.merge");
const crypto = require("crypto");

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

let options;
let baseUrl;
let assetsPath;
let homePath;
let rounded;

// 1. Make sure the necessary directories exist
exports.onPreBootstrap = ({reporter}, themeOptions) => {
  // Options created using default and provided options
  options = merge({}, defaultOptions, themeOptions);
  reporter.info(`Options: ${JSON.stringify(options, null, 2)}`);
  baseUrl = options.baseUrl;
  assetsPath = options.paths.assets;
  homePath = options.paths.home;
  rounded = options.rounded;

  const directories = [assetsPath, homePath];

  directories.map((directoryPath) => {
    reporter.info(`Looking for ${directoryPath} directory`);
    if (!fs.existsSync(directoryPath)) {
      reporter.info(`Creating the ${directoryPath} directory`);
      fs.mkdirSync(directoryPath);
    }
  });
};

// 2. Define the Author type

// 3. Define resolvers for any custom fields

// 4. Query for events and create pages
exports.createPages = async ({actions, graphql, reporter}, themeOptions) => {
  reporter.info(`Creating page at ${baseUrl}`);
  actions.createPage({
    path: baseUrl,
    component: require.resolve("./src/templates/home.js"),
  });
};

// 5. Creating source nodes for options
exports.sourceNodes = (
  {actions: {createTypes, createNode}, schema},
) => {
  // Create the Garden type to solidify the field data types
  createTypes(`type SimpleBioConfig implements Node {
    baseUrl: String!
    assetsPath: String!,
    homePath: String!,
    rounded: Boolean!
    }`);

  // create data from plugin config
  const simpleBioConfig = {
    baseUrl,
    assetsPath,
    homePath,
    rounded,
  };

  createNode({
    ...simpleBioConfig,
    id: "gatsby-theme-simple-bio-config",
    parent: null,
    children: [],
    internal: {
      type: "SimpleBioConfig",
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(simpleBioConfig))
        .digest("hex"),
      content: JSON.stringify(simpleBioConfig),
      description: "Simple Bio Config",
    },
  });
};
