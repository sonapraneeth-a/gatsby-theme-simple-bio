import React from "react";
import {MDXRenderer} from "gatsby-plugin-mdx";

import {useMdxHomePage} from "../../hooks/queries/useMdxHomePage";

DescriptionBio.propTypes = {};

DescriptionBio.defaultProps = {};

/**
 * This component renders description of the person
 * from the mdx file present in the home content
 * (See options: paths.home) folder
 * @return {JSX}
 */
function DescriptionBio() {
  const homePage = useMdxHomePage();
  return <MDXRenderer>{homePage.body}</MDXRenderer>;
}

export default DescriptionBio;
