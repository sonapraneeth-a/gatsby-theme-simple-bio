import PropTypes from "prop-types";
/** @jsx jsx */
import {jsx} from "theme-ui";

GridItem.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string.isRequired,
  css: PropTypes.any,
};

/**
 * @param {object} props
 * @return {JSX}
 */
function GridItem(props) {
  return (
    <div
      key={props.id}
      sx={{
        margin: "0.5rem",
        ...props.css,
      }}
    >
      {props.children}
    </div>
  );
}

export default GridItem;
