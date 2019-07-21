# Gatsby Theme - Simple Bio

## Description

This theme is developed using ```gatsby```. One can use this theme for having a website with brief introduction and social profiles.

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
```

## Site setup

- Required directories
  - author

```
├── author
│   └── john-doe.yml
├── content
│   ├── assets
│   │   ├── profile.png
│   │   └── profile.svg
│   └── home
│       └── index.mdx
├── gatsby-config.js
├── package-lock.json
├── package.json
└── src
    ├── gatsby-theme-simple-bio
    │   ├── components
    │   │   └── bio
    │   │       └── figure.js
    │   └── gatsby-plugin-theme-ui
    │       ├── colors.js
    │       └── index.js
    └── pages
        └── 404.js
```

- You need to have an ```author``` directory which contains a yml file containing author information
- The structure of yml file in ```author``` is expected to be
  
```yml
# Author info
name: John Doe
description: A passionate web designer
cover: ../content/assets/profile.png
username:
  linkedin: john-doe
  github: john-doe
  facebook: john.doe
  twitter: john_doe
  email: john_doe@mail.com
positions:
  - title: Position 1
    company: XYZ Company
    duration: July YYYY - Present
  :
  :
```

- The image provided in ```cover``` entry of yml is expected to be an image file (other than SVGs) which is locally present (Currently online image links are not supported)
- If you don't wish to provide any usernames, make the entry an empty string as below

```yml
username:
  github: ""
```

- If you do not want to have ```positions``` key in yml, currently the only option is to shadow ```<HomeLayout>``` in ```src/templates/home.js```

## Features

- Support for [theme-ui](https://theme-ui.com/)
- Responsive UI
- Dark/Light modes
