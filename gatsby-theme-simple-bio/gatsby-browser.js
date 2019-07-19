import React from "react";
import merge from "lodash.merge";
import {ThemeProvider} from "theme-ui";

import theme from "./src/gatsby-plugin-theme-ui/index";
import Root from "./src/layouts/root";
import {defaultOptions, OptionsContext} from "./src/themes/options";

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({element}, themeOptions) => {
  const computedOptions = merge({}, defaultOptions, themeOptions);
  return (
    <OptionsContext.Provider value={computedOptions}>
      <ThemeProvider theme={theme}>
        <Root>{element}</Root>
      </ThemeProvider>
    </OptionsContext.Provider>
  );
};
