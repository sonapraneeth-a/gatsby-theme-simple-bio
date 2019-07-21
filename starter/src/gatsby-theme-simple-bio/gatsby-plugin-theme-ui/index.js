import merge from "lodash.merge";
// eslint-disable-next-line max-len
import index from "gatsby-theme-simple-bio/src/gatsby-plugin-theme-ui/index";

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

export default merge({}, index, {
  initialColorMode: "dark",
});
