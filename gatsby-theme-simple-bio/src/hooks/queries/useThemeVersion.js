import {useStaticQuery, graphql} from "gatsby";

// Hook for retrieving the theme version site is using
export const useThemeVersion = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const info = useStaticQuery(
    graphql`
      query SiteThemeInfo {
        sitePlugin(name: {regex: "/gatsby-theme-simple-bio/"}) {
            version
            name
        }
      }
    `,
  );
  return info.sitePlugin;
};
