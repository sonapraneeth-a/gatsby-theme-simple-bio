import {useStaticQuery, graphql} from "gatsby";

export const useGatsbyMoonIcon = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const icon = useStaticQuery(
    graphql`
      query GatsbyMoonIcon {
        imageSharp(fixed: {originalName: {eq: "moon.png"}}) {
          fixed(height: 18, width: 18) {
            base64
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
      }
    `,
  );
  return icon.imageSharp.fixed;
};
