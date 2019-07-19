import {themeLight} from "./theme-light";
import {themeDark} from "./theme-dark";

// Select a theme based on the node (dark/light) provided
export const theme = (mode) =>
  mode === "dark" ? {...themeDark} : {...themeLight};
