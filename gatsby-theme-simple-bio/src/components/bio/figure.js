// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import {jsx} from "@emotion/core";

import GatsbyImage from "../gatsby-image";
import {useOptions} from "../../hooks/useOptions";

FigureBio.propTypes = {
  // Profile image of the person
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
  // Extract options passed to themes
  const options = useOptions();
  const borderRadius = options.rounded === false ? "0%" : "50%";
  return (
    <>
      <GatsbyImage
        src={image.fluid}
        style={{
          borderRadius: borderRadius,
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
