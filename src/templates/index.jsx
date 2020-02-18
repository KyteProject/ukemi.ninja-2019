import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import Pagination from "../components/blog/Pagination";
import PostCard from "../components/blog/PostCard";
import About from "../components/widget/About";
import Featured from "../components/widget/Featured";

const Index = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  return (
    <>
      <MainLayout>
        <MetaData location={location} />
        <TitleSection location={location} crumbLabel="Blog" />

        <section id="blog">
          <Container className="inner">
            <Row>
              <Col lg={8}>
                <div className="blog-content">
                  {posts.map(({ node }) => (
                    <PostCard key={node.id} post={node} />
                  ))}
                </div>
              </Col>
              <aside className="col-lg-4 sidebar">
                <About />
                <Featured />
                {/*  */}
              </aside>
            </Row>
          </Container>
        </section>
        <Pagination pageContext={pageContext} />
      </MainLayout>
    </>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allGhostPost: PropTypes.object.isRequired,
    allGhostTag: PropTypes.object.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: $limit, skip: $skip) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
    allGhostTag(sort: { order: DESC, fields: postCount }) {
      edges {
        node {
          ...GhostTagFields
        }
      }
    }
  }
`;
