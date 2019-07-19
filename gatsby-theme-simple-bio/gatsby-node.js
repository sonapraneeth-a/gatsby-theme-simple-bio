const fs = require("fs");
const merge = require("lodash.merge");

// Default options to be used in theme
const defaultOptions = {
  // Base URL from where the project is loaded
  basePath: "/",
  // Paths for the files
  paths: {
    // Path for assets/images
    assets: "assets",
    // Path for home page content files
    home: "content",
  },
};

let options;
let assetsDirPath;
let homeDirPath;

// 1. Make sure the necessary directories exist
exports.onPreBootstrap = ({reporter}, themeOptions) => {
  // Options created using default and provided options
  options = merge({}, defaultOptions, themeOptions);
  reporter.info(`Options: ${JSON.stringify(options, null, 2)}`);
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
exports.sourceNodes = ({actions, schema}) => {
  /* actions.createTypes(`
    type Author implements Node @dontInfer {
      name: String!,
      description: String!,
      cover: ImageSharp!,
      positions: {
        title: String!,
        company: String!,
        duration: String!
      }
    }
  `);*/
  const {createTypes} = actions;
  createTypes(
    schema.buildObjectType({
      name: "Author",
      fields: {
        id: {type: "ID!"},
        name: {
          type: "String!",
        },
        description: {
          type: "String!",
        },
        cover: {
          type: "ImageSharp!",
        },
        /* positions: {
          fields: {
            title: {
              type: "String!",
            },
          },
        }*/
      },
      interfaces: ["Node"],
    }),
  );
};

// 3. Define resolvers for any custom fields

// 4. Query for events and create pages
exports.createPages = async ({actions, graphql, reporter}, themeOptions) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/templates/home.js"),
  });
};
