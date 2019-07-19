/** @jsx jsx */
import {jsx} from "theme-ui";
import {Styled} from "theme-ui";

import Container from "./grid/container";

/**
 * Navbar present at the top of the page
 * @return {JSX}
 */
function Navbar() {
  return (
    <nav
      role="navigation"
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        width: "100%",
        zIndex: 10,
        top: 0,
        // eslint-disable-next-line quotes
        bg: "background",
      }}
    >
      <Container>
        <Styled.h1>Demo</Styled.h1>
      </Container>
    </nav>
  );
}

export default Navbar;
