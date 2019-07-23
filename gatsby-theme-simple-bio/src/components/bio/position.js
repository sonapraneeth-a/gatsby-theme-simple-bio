import React from "react";
import PropTypes from "prop-types";

PositionBio.propTypes = {
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      company: PropTypes.string,
      duration: PropTypes.string,
    }),
  ).isRequired,
};

PositionBio.defaultProps = {};

/**
 * Component for displaying list of positions
 * @return {JSX}
 */
function PositionBio({positions}) {
  return (
    <div style={{textAlign: "center"}}>
      {// eslint-disable-next-line react/prop-types
        positions.map((position, index) => {
          return (
            <p key={"position" + index}>
              <b>{position.title}</b>, {position.company} ({position.duration})
            </p>
          );
        })}
    </div>
  );
}

export default PositionBio;
