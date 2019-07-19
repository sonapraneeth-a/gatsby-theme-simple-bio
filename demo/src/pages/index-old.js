import React from "react";
import {Link} from "gatsby";
import PropTypes from "prop-types";

import PageLayout from "gatsby-theme-simple-bio/src/layouts/page";

/**
 *
 */
class Home extends React.Component {
  /**
   * @return {JSX}
   */
  render() {
    const description =
      "This is the home page for the demo of " + "gatsby-theme-simple-bio.";
    return (
      <>
        <PageLayout
          title="Home"
          description={description}
          location={this.props.location}
        >
          <Link to="/home">Home</Link>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using &lsquo;Content here,
            content here&rsquo;, making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for &lsquo;lorem ipsum
            &rsquo; will uncover many web sites still in their infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like).
          </div>
          <div>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&apos;t anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </div>
        </PageLayout>
        <footer
          style={{
            // position: "fixed",
            position: "relative",
            bottom: "2rem",
            left: "1rem",
            fontSize: "0.8rem",
            // width: "40%",
          }}
        >
          <div>
            <b>Image Credits:</b> Icons made by{" "}
            <a href="https://www.freepik.com/" title="Freepik">
              Freepik
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
        </footer>
      </>
    );
  }
}

export default Home;

Home.propTypes = {
  location: PropTypes.any.isRequired,
};
