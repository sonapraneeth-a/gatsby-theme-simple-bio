import React from "react";
import PropTypes from "prop-types";
import {Styled} from "theme-ui";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faHome);

import BaseLayout from "./base";

/**
 * Page layout
 * @return {JSX} Rendered children for the page
 */
function PageLayout({title, description, location, children}) {
  return (
    <BaseLayout
      title={title}
      description={description}
      location={location}
    >
      <Styled.h1>
        {/* <span>
        <FontAwesomeIcon
          icon={["fa", "home"]}
          size={"sm"}
        />
        </span>*/}
        &nbsp;
        <span>
          {title}
        </span>
      </Styled.h1>
      <section>{children}</section>
    </BaseLayout>
  );
}

export default PageLayout;

PageLayout.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  location: PropTypes.any.isRequired,
};

PageLayout.defaultProps = {
  description: "",
};
