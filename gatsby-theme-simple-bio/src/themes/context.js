import React from "react";
import {theme} from "./theme";

// Decides which theme context to use. Default: dark
const defaultContextData = {
  theme: theme("dark"),
};

export const ThemeContext = React.createContext(defaultContextData);
// const useTheme = () => React.useContext(ThemeContext);
