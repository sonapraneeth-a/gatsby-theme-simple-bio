import {useStaticQuery, graphql} from "gatsby";

export const useGatsbyIconImage = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const icon = useStaticQuery(
    graphql`
      query GatsbyIcon {
        imageSharp(fixed: {originalName: {eq: "gatsby-icon.png"}}) {
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
