// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import {jsx} from "@emotion/core";

import GatsbyImage from "../gatsby-image";
import {useOptions} from "../../hooks/useOptions";

FigureBio.propTypes = {
  image: PropTypes.any.isRequired,
  caption: PropTypes.any,
};

FigureBio.defaultProps = {
  caption: <div></div>,
};

/**
 * @param {object} props
 * @return {JSX}
 */
function FigureBio({image, caption}) {
  const options = useOptions();
  const borderRadius = options.rounded === false ? "0%" : "50%";
  return (
    <>
      {/* TODO: Fix this for rounded option */}
      <GatsbyImage
        src={image.fluid}
        style={{
          borderRadius: borderRadius,
          // border: "0.1rem solid black",
        }}
        imgStyle={{
          borderRadius: `${borderRadius} !important`,
        }}
        caption={caption}
      />
    </>
  );
}

export default FigureBio;
