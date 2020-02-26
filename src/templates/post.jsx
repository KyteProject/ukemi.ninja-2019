import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { GoCalendar, GoPerson, GoClock } from "react-icons/go";
import { readingTime as readingTimeHelper } from "@tryghost/helpers";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import Sidebar from "../components/blog/Sidebar";
import TitleSection from "../components/common/TitleSection";
import PostAuthor from "../components/blog/PostAuthor";

const Post = ({ data, location }) => {
  const post = data.ghostPost;
  const published = new Date(`${post.published_at}`).toDateString();
  const readingTime = readingTimeHelper(post);

  return (
    <>
      <MainLayout>
        <MetaData data={data} location={location} type="article" />
        <Helmet>
          <style type="text/css">{`${post.codeinjection_styles}`}</style>
        </Helmet>
        <TitleSection
          location={location}
          sub={{ slug: "blog", label: "Blog" }}
          crumbLabel={post.title}
        />

        <Container className="inner blog-post">
          <Row>
            <Col lg={8}>
              <article className="blog">
                <div className="post">
                  {post.feature_image ? (
                    <Figure className="feature-image">
                      <Figure.Image src={post.feature_image} alt={post.title} rounded />
                    </Figure>
                  ) : null}
                  <section className="full-content">
                    <h1 className="content-title text-center">{post.title}</h1>
                    <div className="meta text-center">
                      <GoCalendar size={24} className="blog-icon" /> <span>{published}</span>
                      <GoPerson size={24} className="blog-icon" />
                      <span>By {post.primary_author.name}</span>
                      <GoClock size={24} className="blog-icon" /> <span>{readingTime}</span>
                    </div>
                    <section
                      className="content-body load-external-scripts"
                      dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                  </section>
                </div>
              </article>
            </Col>
            <Sidebar />
          </Row>
          <PostAuthor data={post.primary_author} />
        </Container>
      </MainLayout>
    </>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
      feature_image: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
