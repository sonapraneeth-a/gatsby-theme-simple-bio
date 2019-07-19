import {useStaticQuery, graphql} from "gatsby";

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
