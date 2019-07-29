import React from "react";
import merge from "lodash.merge";

import {defaultOptions, OptionsContext} from "./src/themes/options";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, themeOptions) => {
  const computedOptions = merge({}, defaultOptions, themeOptions);
  return (
    <OptionsContext.Provider value={computedOptions}>
      {element}
    </OptionsContext.Provider>
  );
};
