import merge from "lodash.merge";
// eslint-disable-next-line max-len
import baseTheme from "gatsby-theme-simple-bio/src/gatsby-plugin-theme-ui/";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */
export default merge({}, baseTheme, {
  initialColorMode: "dark",
});
