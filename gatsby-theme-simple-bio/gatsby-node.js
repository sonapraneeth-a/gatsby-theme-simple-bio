const fs = require("fs");
const merge = require("lodash.merge");

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
let assetsDirPath;
let homeDirPath;

// 1. Make sure the necessary directories exist
exports.onPreBootstrap = ({reporter}, themeOptions) => {
  // Options created using default and provided options
  options = merge({}, defaultOptions, themeOptions);
  reporter.info(`Options: ${JSON.stringify(options, null, 2)}`);
  baseUrl = options.baseUrl;
  assetsDirPath = options.paths.assets;
  homeDirPath = options.paths.home;

  const directories = [assetsDirPath, homeDirPath];

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
