import React from "react";

// Default options to be used in theme
export const defaultOptions = {
  //
  basePath: "/",
  //
  paths: {
    assets: "assets",
    home: "content",
  },
  rounded: false,
};

export const OptionsContext = React.createContext(defaultOptions);
