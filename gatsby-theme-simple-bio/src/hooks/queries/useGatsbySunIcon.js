import {useStaticQuery, graphql} from "gatsby";

export const useGatsbySunIcon = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  console.log("Sun");
  const icon = useStaticQuery(
    graphql`
      query GatsbySunIcon {
        imageSharp(fixed: {originalName: {eq: "sun.png"}}) {
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
  console.log("Icon");
  console.log(icon);
  return icon.imageSharp.fixed;
};
