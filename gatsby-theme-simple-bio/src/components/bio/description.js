import React from "react";
import {MDXRenderer} from "gatsby-plugin-mdx";

import {useMdxHomePage} from "../../hooks/queries/useMdxHomePage";

DescriptionBio.propTypes = {};

DescriptionBio.defaultProps = {};

/**
 * @return {JSX}
 */
function DescriptionBio() {
  const homePage = useMdxHomePage();
  return <MDXRenderer>{homePage.body}</MDXRenderer>;
}

export default DescriptionBio;
