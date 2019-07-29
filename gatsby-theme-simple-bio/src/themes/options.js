import React from "react";

// Default options to be used in theme
export const defaultOptions = {
  // Base url for rendering site
  baseUrl: "/", // Default: "/"
  // Directory path for images
  assetsPath: "content/assets", // Default: "content/assets"
  // Directory path for MDX home page content
  homePath: "content/home", // Default: "content/home"
  // Should the theme have rounded components
  rounded: false, // Default: false
};

export const OptionsContext = React.createContext(defaultOptions);
