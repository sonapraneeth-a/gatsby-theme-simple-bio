import {useStaticQuery, graphql} from "gatsby";

// Hook for retrieving last build time for gatsby site
export const useOptions = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const info = useStaticQuery(
    graphql`
      query Options {
        config(id: {eq: "gatsby-theme-simple-bio"}) {
          baseUrl
          rounded
          homePath
          assetsPath
          id
        }
      }
    `,
  );
  return info.config;
};
