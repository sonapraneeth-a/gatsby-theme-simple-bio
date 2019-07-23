import {useStaticQuery, graphql} from "gatsby";

// Hook for retrieving author's positions from yaml file
export const useYamlAuthorPositions = () => {
  {
    /* Reference: https://www.gatsbyjs.org/docs/use-static-query/ */
  }
  const positions = useStaticQuery(
    graphql`
      query RetrieveAuthorPositions {
        authorYaml {
          positions {
            title
            duration
            company
          }
        }
      }
    `,
  );
  return positions.authorYaml.positions;
};
