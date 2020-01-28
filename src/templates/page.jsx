import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";

const Page = ({ data, location }) => {
  const page = data.ghostPage;

  return (
    <>
      <MetaData data={data} location={location} type="website" />
      <Helmet>
        <style type="text/css">{`${page.codeinjection_styles}`}</style>
      </Helmet>

      <MainLayout>
        <div className="container">
          <article className="content">
            <h1 className="content-title">{page.title}</h1>

            {/* The main page content */}
            <section
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: page.html }}
            />
          </article>
        </div>
      </MainLayout>
    </>
  );
};

Page.propTypes = {
  data: PropTypes.shape({
    ghostPage: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Page;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPage(slug: { eq: $slug }) {
      ...GhostPageFields
    }
  }
`;
