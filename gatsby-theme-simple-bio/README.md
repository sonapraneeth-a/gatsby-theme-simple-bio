# Gatsby Theme  - Simple bio

See the [live demo](https://sonapraneeth-a.github.io/gatsby-theme-simple-bio/)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme
    ```sh
    npm install --save gatsby-theme-simple-bio
    ```

2.  Add the theme to your `gatsby-config.js`:
    ```js
    module.exports = {
      plugins: [
        {
          resolve: 'gatsby-theme-simple-bio',
          options: {
            // See Options section for more details
          }
        }
      ]
    }
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Options

Below are the options available for the theme

```js
// Base URL for the website
basePath: "/",
// Paths for folders
paths: {
  // Directory path for images
  assets: "assets",
  // Directory path for MDX home page content
  home: "content",
},
// Should the theme have rounded components
rounded: false, // Default: false
```

## Features

- Default addition of Manifest
- PWA support
