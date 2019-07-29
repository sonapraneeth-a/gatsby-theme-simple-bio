import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import {useColorMode, css, useThemeUI} from "theme-ui";
import {Global} from "@emotion/core";
// import Image from "gatsby-image";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

import Switch from "../components/switch";
import {useOptions} from "../hooks/useOptions";
import {layout} from "../../config/default";
/* import {useGatsbySunIcon} from "../hooks/queries/useGatsbySunIcon";
import {useGatsbyMoonIcon} from "../hooks/queries/useGatsbyMoonIcon";*/

const ThemeToggleWrapper = styled.div`
  position: fixed;
  margin: 19.92px 0;
  right: 1rem;
  z-index: 100;
`;

const checkedIcon = (
  <img
    alt="Moon indicating dark mode"
    src={moon}
    width="18"
    height="18"
    role="presentation"
    style={{
      pointerEvents: "none",
      margin: "4.5px 4.5px 4.5px 6.5px",
    }}
  />
);

const uncheckedIcon = (
  <img
    alt="Sun indicating light mode"
    src={sun}
    width="18"
    height="18"
    role="presentation"
    style={{
      pointerEvents: "none",
      margin: "5px 5px 5px 5.5px",
    }}
  />
);

{/* const checkedIcon = (icon) => (
  <Image
    fixed={icon}
    alt={"Moon indicating dark mode"}
    caption={"Moon indicating dark mode"}
    role="presentation"
    style={{
      pointerEvents: "none",
      margin: "4.5px 4.5px 4.5px 6.5px",
    }}
  />
);*/}

{/* const uncheckedIcon = (icon) => (
  <Image
    fixed={icon}
    alt={"Sun indicating light mode"}
    caption={"Sun indicating light mode"}
    role="presentation"
    style={{
      pointerEvents: "none",
      margin: "5px 5px 5px 5.5px",
    }}
  />
);*/}

/**
 * Root layout -> Will be applied to all pages
 * @return {JSX} Rendered children for the page
 */
function Root({children}) {
  /* const sun = useGatsbySunIcon();
  const moon = useGatsbyMoonIcon();*/
  const options = useOptions();
  // Get the theme from color mode hook
  const [colorMode, setColorMode] = useColorMode();
  const context = useThemeUI();
  layout(`colorMode: ${colorMode}`);
  layout(`From theme: ${context.theme.initialColorMode}`);
  if (typeof window !== "undefined") {
    // If environment is development, attach debug package
    if (process.env.NODE_ENV === "development") {
      // To enable debugging information in browser
      localStorage.setItem("debug", "gatsby-theme-simple-bio:*");
    }
  }
  const isDarkTheme = colorMode === "dark";
  const toggleTheme = (e) => {
    const updatedTheme = (isDarkTheme ? "light" : "dark");
    setColorMode(updatedTheme);
  };
  const switchColor = "rgb(188, 188, 188)";
  layout(`Options: ${JSON.stringify(options, null, 2)}`);
  layout(`isDarkTheme: ${isDarkTheme}`);
  return (
    <>
      <Global
        styles={css({
          "*": {
            boxSizing: "border-box",
            lineHeight: "body",
            fontSize: "18px",
          },
          "body": {
            margin: 0,
            fontFamily: "body",
            boxSizing: "border-box",
            lineHeight: "body",
          },
          "html": {
            fontSize: "18px",
          },
        })}
      />
      <Global
        styles={css({
          ".react-switch-bg, .react-switch-handle": {
            borderWidth: "0.5px",
            borderStyle: "solid",
            borderColor: `${switchColor}`,
          },
        })}
      />
      {options.rounded === false && (
        <Global
          styles={css`
            .react-switch-bg {
              border-radius: 0px !important;
            }
            .react-switch-handle {
              border-radius: 0px !important;
            }
          `}
        />
      )}
      <ThemeToggleWrapper>
        <Switch
          aria-label="Toggle dark mode"
          aria-checked={isDarkTheme}
          onColor="#000"
          offColor="#f2ee50"
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}
          // checkedIcon={checkedIcon(moon)}
          // uncheckedIcon={uncheckedIcon(sun)}
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
      </ThemeToggleWrapper>
      {children}
    </>
  );
}

export default Root;

Root.propTypes = {
  children: PropTypes.any.isRequired,
};

Root.defaultProps = {
};

