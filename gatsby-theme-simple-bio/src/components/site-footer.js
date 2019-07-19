// import moment from "moment";
/** @jsx jsx */
import {jsx} from "theme-ui";
import {Styled} from "theme-ui";

import gatsbyIcon from "../assets/gatsby-icon.svg";

import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(faHeart);

import {screens, until} from "../components/breakpoints";
import {useYamlAuthor} from "../hooks/queries/useYamlAuthor";
import {useSiteBuildTime} from "../hooks/queries/useSiteBuildTime";
import {useThemeVersion} from "../hooks/queries/useThemeVersion";
// import {useGatsbyIcon} from "../hooks/queries/useGatsbyIcon";
// import Image from "gatsby-image";

/**
 * @return {JSX}
 */
function SiteFooter() {
  const author = useYamlAuthor();
  const time = useSiteBuildTime();
  const themeInfo = useThemeVersion();
  // const gatsbyIcon = useGatsbyIcon();
  return (
    <footer
      style={{
        zIndex: 4,
        fontSize: "0.8rem",
        width: "100%",
        backgroundColor: "",
        padding: "2rem",
        bottom: "-10rem",
        position: "relative",
        // position: "fixed",
        textAlign: "center",
      }}
    >
      <div
        style={{
          margin: "0.2rem auto",
        }}
      >
        <span id="copyright">
          &copy;&nbsp;<Styled.a href="/">{author.name}</Styled.a>
          &nbsp;{/* moment().format("YYYY")*/}
          {new Date().getFullYear()}.&nbsp;
        </span> <br/>
        <span
          css={{
            [until(screens.minitablet)]: {
              display: "none",
            },
          }}
        >
          Made in
          <span>
            &nbsp;
            <FontAwesomeIcon
              icon={["fas", "heart"]}
              size={"sm"}
              color={"red"}
            />
            &nbsp;
          </span>
          with <a
            href="https://www.gatsbyjs.org/"
            sx={{
              textDecoration: "none",
              borderBottom: "none",
            }}
          >
            {/* <Image
              fixed={gatsbyIcon}
              caption={"Gatsby Icon"}
              alt={"Gatsby Icon"}
            />*/}
            <img
              alt="Gatsby icon"
              src={gatsbyIcon}
              width="18"
              height="18"
              role="presentation"
            />
          </a>.
          Powered by {themeInfo.name} (Version: {themeInfo.version}).&nbsp;
        </span><br/>
        <span
          css={{
            [until(screens.mobile)]: {
              display: "none",
            },
          }}
        >
          <b>Last modified:&nbsp;</b>
          {/* moment(time, ["ddd MMM DD YYYY HH:mm:ss Z"])
            .utcOffset("+05:30")
        .format("ddd MMM DD YYYY HH:mm:ss ZZ") */}
          {new Date(time).toString()}
        </span>
      </div>
    </footer>
  );
}

export default SiteFooter;
