import React from "react";
import {OptionsContext} from "../themes/options";

// React hooks for using options provided in theme
export const useOptions = () => React.useContext(OptionsContext);
