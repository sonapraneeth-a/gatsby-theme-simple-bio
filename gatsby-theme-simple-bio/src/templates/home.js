import React from "react";
import PropTypes from "prop-types";
// import {css} from "@emotion/core";

import PageLayout from "../layouts/page";
import {screens, from} from "../components/breakpoints";
import Grid from "../components/grid/grid";
import GridItem from "../components/grid/grid-item";
import FigureBio from "../components/bio/figure";
import SocialBio from "../components/bio/social";
import PositionBio from "../components/bio/position";
import DescriptionBio from "../components/bio/description";
import {useYamlAuthor} from "../hooks/queries/useYamlAuthor";
import {useYamlAuthorPositions} from "../hooks/queries/useYamlAuthorPositions";
import {useMdxHomePage} from "../hooks/queries/useMdxHomePage";

HomeLayout.propTypes = {
  location: PropTypes.any.isRequired,
};

HomeLayout.defaultProps = {};

/**
 * Home layout
 * @return {JSX} Rendered children for the Home
 */
function HomeLayout({location}) {
  {
    /* Run the hook queries */
  }
  const homePage = useMdxHomePage();
  const author = useYamlAuthor();
  const positions = useYamlAuthorPositions();
  {
    /* Retrieve information from the query results */
  }
  const title = homePage.frontmatter.title || "Home page";
  const description = homePage.frontmatter.summary || "Home page";
  const image = author.cover.childImageSharp;
  return (
    <PageLayout title={title} description={description} location={location}>
      <Grid noCols={2} nSizes={[40, 60]}>
        {/* <GridItem
          id="figureBio"
          style={{
            margin: "0 10%",
            display: "flex",
            flexDirection: "column",
            position: "sticky",
            top: "15vh",
            alignSelf: "flex-start",
            [mobile]: {
              width: "90%",
              placeSelf: "center stretch",
            },
          }}
        >*/}
        <GridItem
          id="figureBio"
          css={{
            margin: "0 10%",
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            [from(screens.mobile)]: {
              position: "sticky",
              top: "15vh",
              placeSelf: "self-start stretch",
            },
          }}
        >
          {image != null && <FigureBio image={image} />}
          {
            <SocialBio
              linkedin={author.username.linkedin}
              github={author.username.github}
              twitter={author.username.twitter}
            />
          }
          {positions != null && positions.length > 0 && (
            <PositionBio positions={positions} />
          )}
        </GridItem>
        {/* <GridItem id="descriptionBio" style={{padding: "1rem"}}>*/}
        <GridItem id="descriptionBio" css={{padding: "0 1rem 1rem 1rem"}}>
          <DescriptionBio description={homePage.body} />
        </GridItem>
      </Grid>
    </PageLayout>
  );
}

export default HomeLayout;
