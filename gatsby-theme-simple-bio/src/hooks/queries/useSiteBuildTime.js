import {useStaticQuery, graphql} from "gatsby";

export const useSiteBuildTime = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const info = useStaticQuery(
    graphql`
      query SiteBuildInfo {
        site {
          buildTime(formatString: "ddd MMM DD YYYY HH:mm:ss Z")
        }
      }
    `,
  );
  return info.site.buildTime;
};
