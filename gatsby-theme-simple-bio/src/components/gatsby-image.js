import React from "react";
import PropTypes from "prop-types";
import Image from "gatsby-image";

GatsbyImage.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string,
  caption: PropTypes.any,
  style: PropTypes.any,
  imgStyle: PropTypes.any,
};

GatsbyImage.defaultProps = {
  alt: "",
  caption: <div></div>,
};

/**
 * @param {object} props
 * @return {JSX}
 */
function GatsbyImage(props) {
  return (
    <>
      <Image
        fluid={props.src}
        alt={props.alt}
        style={props.style}
        imgStyle={props.imgStyle}
      />
      {props.caption}
    </>
  );
}

export default GatsbyImage;
