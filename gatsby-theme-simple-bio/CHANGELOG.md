# CHANGELOG

## 0.10.2

- Light house audit report [Report](reports/.json)

| **Metric**     | **Quality** |
|----------------|-------------|
| Performace     | 100         |
| Accessibility  | 100         |
| Best Practices | 100         |
| SEO            | 100         |
| PWA            | Perfect     |

- Updates
  - Theme icon and commitizen config (new scopes and actions)
  - Options
    - Added context hook ```useOptions``` for using ```options``` in theme. This is set in ```gatsby-{ssr/browser}.js```
    - FigureBio component for borderRadius when rounded is true/false in options
    - Updated RootLayout to use options from ```useOptions``` instead of props
  - RootLayout
    - Updated icons for react-switch to save size and styling of icons
    - Updated layout to use theme from localStorage
  - Removed defaultTheme key from options. It can be overriden in ```/src/gatsby-theme-simple-bio/gatsby-plugin-theme-ui/index.js``` using component shadowing
  - Removed icon from heading in PageLayout as it was not rendering properly
  - Theme-UI
    - Updated styling for <p> element
- Fixes
  - Fixed an issue of aria-checked in input react-switch
  - Removed console.log from RootLayout

## 0.10.1

- Updates
  - Theme-UI
    - Added new property (```useCssProperties``` -> set to ```false``` as the theme doesnot use custom css properties) for theme-ui
- Fixes
  - Removed console.log from head meta and added link to issue for ```theme_color``` in meta
  - Removed ```localStorage``` feature as it was affecting ```gatsby build```
- Dev
  - Added plugins for eslint react hook verfication

## 0.10.0

- Features
  - Added support for [```theme-ui```](https://theme-ui.com/)
    - Updated components (navbar) to use theme-ui
    - Updated plain html tags to ```Styled``` tags
    - Updated RootLayout to theme-ui insterad of theme context
    - Updated colors for social icons (Linkedin, Github, Twitter)
    - Updated ```theme_color``` in head meta
- Updates
  - Updated default icon for the theme
  - Added root font of 18px
  - Updated default prop values for switch component
  - Updated fonts to use 'rem' units instead of 'px'
  - Updated default keyowrds in meta
- Issues
  - ```borderBottomColor``` not picking up theme-ui values. [Issue #177](https://github.com/system-ui/theme-ui/issues/177)

## 0.9.2

- Updates
  - Added updated options in gatsby config
  - Updated root layout to store current theme locally (```localStorage```) and use that theme on reload
  - Added ```defaultTheme``` option to the theme
  - Converted React.Component to functional component to use hooks
  - Added root updated layout and using that in wrapRootElement
  - Added name and repository in package.json 
  - Moved home layout to templates folder
- Fixes
  - Fixed component names used in gatsby APIs and updated options
  - Fixed issues caused due to refactoring of ```HomeLayout```

## 0.9.1

- Light house audit report [Report](reports/00-8117639.json)

| **Metric**     | **Quality** |
|----------------|-------------|
| Performace     | 100         |
| Accessibility  | 100         |
| Best Practices | 100         |
| SEO            | 100         |
| PWA            | Perfect     |

- Fixes
  - [x] PWA not activated
  - [x] Manifest not displayed
  - [x] Fix URL (start_url) in manifest.json
  - Accessibility
    - [x] [role]s do not have all required [aria-*] attributes (react switch)
    - [x] <html> element does not have a [lang] attribute 
    - [x] Links do not have a discernible name (social links)


## 0.9.0

- Light house audit report [Report](reports/00-06f3911.json)

| **Metric**     | **Quality** |
|----------------|-------------|
| Performace     | 100         |
| Accessibility  | 82          |
| Best Practices | 93          |
| SEO            | 100         |
| PWA            | ??          |

- Features
  - Added support for theme options

- Issues
  - PWA not activated
  - Manifest not displayed
    - Fix URL (start_url) in manifest.json
  - Best practices
    - Browser errors were logged to the console 
  - Accessibility
    - [role]s do not have all required [aria-*] attributes (react switch)
    - <html> element does not have a [lang] attribute 
    - Links do not have a discernible name (social links)


## 0.8.0

- Features
  - Added code for checking existence of directories for theme to work
  - Added icon for the gatsby-theme-simple-bio
  - Updated gatsby-config to have default site meta data and updated icon in manifest
  - Added ```DescriptionBio``` component to use for describing more about author
  - Moved social usernames info from ```FigureBio``` to ```SocialBio```
- Updates
  - Updated gatsby config to use yaml and sharp plugins in theme
  - Updated ```HomeLayout```
  - Updated figure and position bio to use props instead of hook queries
  - Updated hook queries for retrieving author and site information
  - Moved ```useAuthorYaml``` to src/hooks/queries
  - Moved site related queries hook to sr/hooks/queries
  - Moved author position retrieval hook from sr/hooks to src/hooks/queries
- Fixes
  - Removed all ```console.log``` statements (```console.log``` not adivisable in production)
  - Fixed an entry in query for mdx home page hook query
  - Added code for creating home page in ```gatsby-node```
  - Fixed issue of styles not being applied to <p>
  - Fixed imports from refactoring of hook queries in meta and site-footer component

## 0.7.0

- Upgraded gastby package to use stable themes release

## 0.6.0

- Features
  - Added support offline and manifest
  - Added ```theme_color``` to meta which would control app's color in Android
- Updates
  - Minor change in styling of base layout
- Fixes
  - Fixed coloring of icons issue in FigureBio component

## 0.5.0

- Features 
  - Added support for position bio
- Updates
  - Added PositionBio component to home layout

## 0.4.0

- Updates
  - Minor update in styling for home layout
  - Updated gatsby config to specify which layouts to use for mdx files
- Chore
  - Added packages for mdx to be used in gatsby

## 0.3.0

- Features
  - Added hook for site last build time and footer component
  - Added a home layout to be used for home page
  - Added grid and grid item components
- Updates
  - Updated styling in home layout for figure bio grid item
  - Added footer for the ```BaseLayout```
  - Added moment package to perform time related functions
  - Minor update in styling for base and home layouts
  - Updated navbar to use theming variables (background color)
  - Updated ```PageLayout``` to use section instead of div
  - Updated ```FigureBio``` component to use updated ```useAuthorYaml``` hook
  - Updated ```useAuthorYaml``` hook to use responsive images
  - Updated gatsby image to use fluid (responsive) images instead of fixed ones
  - Added function for max width in screen breakpoints

## 0.2.0

- Features
  - Added wrapper for gatsby image to have optimized images
  - Added a 404 page (**NOTE:** the site using the theme needs to have its own 404 page as of now)
  - Added support for FontAwesome icons
  - Added support for image processing in gatsby using plugins
  - Added a FigureBio component
  - Added a hook for retrieving author information from yaml
  - Added a page layout
  - Added navbar, container and breakpoints for the theme
  - Updated base layout to include navbar and main content
  - Updated styling for switch in root layout
- Updates
  - Added cover entry with image processing for the hook query
  - Updated home page to use PageLayout
  - Moved layouts out of ```components``` folder
- Dev
  - Updated commitizen config file with more options

## 0.1.0

- Features
  - Added BaseLayout to home page
  - Added root layout to browser and ssr gatsby files
  - Added root theme
  - Added context for switching themes using ```react-switch```
  - Added initial theme specifications for dark and light themes
- Fixes
  - Fixed a warning in eslint configuration

## 0.0.3 
