# Gatsby Theme  - Simple Bio

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
// Should a default manifest be included
manifest: true, // Default: true
// Paths for folders
paths: {
  // Directory path for images
  assets: "content/assets", // Default: "content/assets"
  // Directory path for MDX home page content
  home: "content/home", // Default: "content/home"
},
// Should the theme have rounded components
rounded: false, // Default: false
```

If you have updated colors for theme-ui, please consider using your own manifest instead of the theme provided one.

## Site setup

├── author -> **Required directory**
│   └── john-doe.yml
├── content
│   ├── assets -> *Default assets directory*: Can be updated in optins
│   │   ├── profile.png
│   │   └── profile.svg
│   └── home -> *Default home directory*: Can be updated in optins
│       └── index.mdx
├── gatsby-config.js
├── package-lock.json
├── package.json
└── src
    ├── gatsby-theme-simple-bio -> *Component shadowing*
    │   ├── components
    │   │   └── bio
    │   │       └── figure.js
    │   └── gatsby-plugin-theme-ui -> *Overriding theme-ui config*
    │       ├── colors.js
    │       └── index.js
    └── pages
        └── 404.js -> **Required to render HTTP 404 requests**

## Features

- Optional addition of Manifest
  - Uses default icon
  - Use base path: "/"
  - If any of them needs to change, use your own manifest
- PWA support
