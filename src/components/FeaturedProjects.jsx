import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { GiNinjaHead, GiCardPlay } from "react-icons/gi";

const FeaturedProjects = () => {
  const data = useStaticQuery(
    graphql`
      query FeaturedProjectsQuery {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { featured: { eq: true } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                objective
                slug
                date
                featured_image
              }
            }
          }
        }
      }
    `
  );

  const projects = data.allMarkdownRemark.edges;

  return (
    <section className="featured-projects">
      <Container>
        <Row className="justify-content-center">
          <div className="block-title">
            <h2 className="block-title-text">Featured Projects</h2>
          </div>
        </Row>

        {projects.length > 0 && (
          <Row className="mt-4 pt-4 vertical-content">
            <Col lg={6} className="mt-3 mb-3">
              <div>
                {projects[0].node.frontmatter.featured_image && (
                  <img
                    src={projects[0].node.frontmatter.featured_image.replace("/static", " ")}
                    alt={projects[0].node.frontmatter.name}
                    className="img-fluid mx-auto d-block"
                  />
                )}
              </div>
            </Col>
            <Col lg={6} className="mt-3">
              <div className="featured-icon">
                <GiCardPlay />
              </div>
              <div className="features-desc">
                <h2>{projects[0].node.frontmatter.name}</h2>
                <div className="features-border mx-auto mt-3" />
                <p className="text-muted mt-4">{projects[0].node.frontmatter.objective}</p>
                <Link to={`projects/${projects[0].node.frontmatter.slug}`}>Read more →</Link>
              </div>
            </Col>
          </Row>
        )}

        {projects.length > 1 && (
          <Row className="mt-5 vertical-content">
            <Col lg={6} className="mt-3 mb-3">
              <div className="featured-icon">
                <GiNinjaHead />
              </div>
              <div className="features-desc">
                <h2>{projects[1].node.frontmatter.name}</h2>
                <div className="features-border mx-auto mt-3" />
                <p className="text-muted mt-4">{projects[1].node.frontmatter.objective}</p>
                <Link to={`projects/${projects[1].node.frontmatter.slug}`}>Read more →</Link>
              </div>
            </Col>
            <Col lg={6} className="mt-3">
              <div>
                {projects[1].node.frontmatter.featured_image && (
                  <img
                    src={projects[1].node.frontmatter.featured_image.replace("/static", " ")}
                    alt={projects[1].node.frontmatter.name}
                    className="img-fluid mx-auto d-block"
                  />
                )}
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default FeaturedProjects;
