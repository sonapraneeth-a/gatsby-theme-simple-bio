import {useStaticQuery, graphql} from "gatsby";

export const useYamlAuthor = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const author = useStaticQuery(
    graphql`
      query RetrieveAuthorProfileImage {
        authorYaml {
          cover {
            childImageSharp {
              fluid(maxWidth: 400) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    `,
  );
  return author.authorYaml.cover.childImageSharp;
};
