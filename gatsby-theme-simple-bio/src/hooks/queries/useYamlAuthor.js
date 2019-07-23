import {useStaticQuery, graphql} from "gatsby";

// Hook for retrieving author information from yaml file
export const useYamlAuthor = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const author = useStaticQuery(
    graphql`
      query RetrieveAuthor {
        authorYaml {
          name
          username {
            email
            github
            twitter
            linkedin
            facebook
          }
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
  return author.authorYaml;
};
