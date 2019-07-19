import {useStaticQuery, graphql} from "gatsby";

export const useYamlAuthorInfo = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const author = useStaticQuery(
    graphql`
      query RetrieveAuthorInfo {
        authorYaml {
          name
        }
      }
    `,
  );
  return author.authorYaml;
};
