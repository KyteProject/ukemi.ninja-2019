import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const FeaturedProjects = () => {
  const data = useStaticQuery(
    graphql`
      query FeaturedProjectsQuery {
        allStrapiProjects(
          sort: { order: DESC, fields: updated_at }
          limit: 2
          filter: { featured: { eq: 1 } }
        ) {
          edges {
            node {
              name
              objective
              slug
              date
              project_image {
                publicURL
              }
              featured
            }
          }
        }
      }
    `
  );

  const projects = data.allStrapiProjects.edges;

  return (
    <section className="featured-projects">
      <Container>
        <Row className="justify-content-center">
          <div className="block-title">
            <h2 className="block-title-text">Featured Projects</h2>
          </div>
        </Row>

        <Row className="mt-4 pt-4 vertical-content">
          <Col lg={6} className="mt-3 mb-3">
            <div>
              {projects[0].node.project_image && (
                <img
                  src={projects[0].node.project_image.publicURL}
                  alt={projects[0].node.name}
                  className="img-fluid mx-auto d-block"
                />
              )}
            </div>
          </Col>
          <Col lg={6} className="mt-3 text-center">
            <div className="features-desc">
              <h2>{projects[0].node.name}</h2>
              <div className="features-border mx-auto mt-3" />
              <p className="text-muted mt-4">{projects[0].node.objective}</p>
              <Link to={`projects/${projects[0].node.slug}`}>Read more →</Link>
            </div>
          </Col>
        </Row>

        <Row className="mt-5 vertical-content">
          <Col lg={6} className="mt-3 mb-3">
            <div className="features-desc text-center">
              <h2>{projects[1].node.name}</h2>
              <div className="features-border mx-auto mt-3" />
              <p className="text-muted mt-4">{projects[1].node.objective}</p>
              <Link to={`projects/${projects[1].node.slug}`}>Read more →</Link>
            </div>
          </Col>
          <Col lg={6} className="mt-3 text-center">
            <div>
              {projects[1].node.project_image && (
                <img
                  src={projects[1].node.project_image.publicURL}
                  alt={projects[1].node.name}
                  className="img-fluid mx-auto d-block"
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
