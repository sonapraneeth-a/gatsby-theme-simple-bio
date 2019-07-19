import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import HeadMetadata from "../components/head/meta";
import Navbar from "../components/navbar";
import SiteFooter from "../components/site-footer";

// Reference: https://stackoverflow.com/questions/25225682/difference-between-width100-and-width100vw
// Using width: 100% due to above reason
const Content = styled.div`
  display: flex;
  flex-direction: column;
  /*width: 100%;
  height: 100%;
  position: absolute;*/
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  top: 5rem;
  position: relative;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

/**
 * Base layout for all other layouts
 * @return {JSX} Rendered children for the page
 */
function BaseLayout({title, description, location, children}) {
  return (
    <>
      <HeadMetadata
        title={title}
        description={description}
      />
      <Content>
        <Navbar />
        <MainContent>{children}</MainContent>
        <SiteFooter />
      </Content>
    </>
  );
}

export default BaseLayout;

BaseLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.any.isRequired,
};

BaseLayout.defaultProps = {
  description: "",
};
