import {useStaticQuery, graphql} from "gatsby";

export const useYamlAuthorSocial = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const author = useStaticQuery(
    graphql`
      query RetrieveAuthorSocial {
        authorYaml {
          username {
            email
            github
            twitter
            linkedin
            facebook
          }
        }
      }
    `,
  );
  return author.authorYaml.username;
};
