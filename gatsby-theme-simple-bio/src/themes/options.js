import React from "react";

// Default options to be used in theme
export const defaultOptions = {
  baseUrl: "/", // Default: "/"
  // Paths for folders
  paths: {
    // Directory path for images
    assets: "content/assets", // Default: "content/assets"
    // Directory path for MDX home page content
    home: "content/home", // Default: "content/home"
  },
  // Should the theme have rounded components
  rounded: false, // Default: false
};

export const OptionsContext = React.createContext(defaultOptions);
