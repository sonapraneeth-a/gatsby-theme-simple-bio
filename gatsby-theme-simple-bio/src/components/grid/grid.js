import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import {screens, until} from "../breakpoints";

const GridWrapper = styled.div((props) => ({
  display: "grid",
  gridGap: "0.7rem",
  padding: "0.5rem 0",
  gridTemplateColumns: props.templateColumns,
  [until(screens.mobile)]: {
    gridTemplateColumns: "100%",
  },
}));

Grid.propTypes = {
  children: PropTypes.any.isRequired,
  noCols: PropTypes.number.isRequired,
  nSizes: PropTypes.arrayOf(PropTypes.number),
};

/**
 * @param {object} props
 * @return {JSX}
 */
function Grid(props) {
  let templateColumns = "";
  for (let index = 0; index < props.noCols; index++) {
    if (
      props.nSizes !== undefined &&
      props.nSizes !== null &&
      index < props.nSizes.length
    ) {
      templateColumns += `${props.nSizes[index]}% `;
    } else {
      templateColumns += "1fr ";
    }
  }
  return (
    <GridWrapper templateColumns={templateColumns}>
      {props.children}
    </GridWrapper>
  );
}

{
  /* <GridWrapper templateColumns={"repeat(auto-fit,minmax(320px,1fr))"}>*/
}

export default Grid;
