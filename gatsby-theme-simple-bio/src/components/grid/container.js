// eslint-disable-next-line no-unused-vars
import React from "react";
/** @jsx jsx */
import {jsx} from "theme-ui";
import PropTypes from "prop-types";

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

/**
 * Container component
 * @param {object} props
 * @return {JSX}
 */
function Container({children}) {
  return (
    <div
      sx={{
        position: "relative",
        margin: "0 auto",
        width: ["90%", "90%", "85%", "80%"],
      }}
    >
      {children}
    </div>
  );
}

export default Container;
