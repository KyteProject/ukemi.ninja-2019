import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { GoCalendar } from "react-icons/go";

const Featured = () => {
  const data = useStaticQuery(graphql`
    query FeaturedBlogPosts {
      allGhostPost(
        filter: { featured: { eq: true } }
        sort: { order: DESC, fields: published_at }
        limit: 5
      ) {
        edges {
          node {
            ...GhostPostFields
          }
        }
      }
    }
  `);

  const posts = data.allGhostPost.edges;

  return (
    <>
      <div className="sidebox widget">
        <h3 className="widget-title">Popular Posts</h3>
        <ul className="image-list">
          {posts.map(({ node }) => (
            <li key={node.id}>
              <Figure>
                <Link to={node.slug}>
                  <Figure.Image
                    rounded
                    hight={80}
                    width={80}
                    src={node.feature_image}
                    alt={node.title}
                  />
                </Link>
              </Figure>
              <div className="list-post-content">
                <h6 className="post-title">
                  <Link to={node.slug}>{node.title}</Link>
                </h6>
                <div className="meta">
                  <span className="date">
                    <GoCalendar className="featured-post-icon" />
                    12 Nov 2017
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Featured;
