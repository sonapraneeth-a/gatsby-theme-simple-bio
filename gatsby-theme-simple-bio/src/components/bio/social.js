// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import {jsx} from "theme-ui";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fab, faCheckSquare, faCoffee);

SocialBio.propTypes = {
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

SocialBio.defaultProps = {
  linkedin: "",
  github: "",
  twitter: "",
};

/**
 * @return {JSX}
 */
function SocialBio({linkedin, github, twitter}) {
  {/* Reference: https://stackoverflow.com/questions/51683761/how-to-fix-lighthouse-links-do-not-have-a-discernible-name */}
  return (
    <p
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: [0, 0, 2],
      }}
    >
      {linkedin !== null && linkedin !== "" && (
        <a
          href={"https://www.linkedin.com/" + linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{borderBottom: "none"}}
          aria-label={"LinkedIn"}
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin-in"]}
            size={"lg"}
            sx={{
              color: "icons.linkedin",
            }}
          />
        </a>
      )}
      {github !== null && github !== "" && (
        <a
          href={"https://www.github.com/" + github}
          target="_blank"
          rel="noopener noreferrer"
          style={{borderBottom: "none"}}
          aria-label={"Github"}
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            size={"lg"}
            sx={{
              color: "icons.github",
            }}
          />
        </a>
      )}
      {twitter !== null && twitter !== "" && (
        <a
          href={"https://www.twitter.com/" + twitter}
          target="_blank"
          rel="noopener noreferrer"
          style={{borderBottom: "none"}}
          aria-label={"Twitter"}
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            size={"lg"}
            sx={{
              color: "icons.twitter",
            }}
          />
        </a>
      )}
    </p>
  );
}

export default SocialBio;
