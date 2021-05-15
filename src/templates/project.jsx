import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col, Card, CardColumns } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";

const Project = ({ data, location }) => {
  const project = data.markdownRemark.frontmatter;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <TitleSection
        location={location}
        sub={{ slug: "projects", label: "Projects" }}
        crumbLabel={project.name}
      />
      <section className="projects">
        <Container>
          <Row>
            <Col md={7}>
              <div className="title">
                <h1>{project.name}</h1>
              </div>
              <div className="project-brief">
                <ReactMarkdown children={project.brief} />
              </div>
              {/* <div className="project-tags" /> */}
            </Col>
            <Col md={{ span: 4, offset: 1 }} className="project-details">
              <div className="detail-block">
                <div className="subtitle">
                  <h5>Objective</h5>
                </div>
                <div>{project.objective}</div>
              </div>

              {project.clients ? (
                <div className="detail-block">
                  <div className="subtitle">
                    <h5>Clients</h5>
                  </div>
                  <div>{project.clients}</div>
                </div>
              ) : null}

              {project.partners ? (
                <div className="detail-block">
                  <div className="subtitle">
                    <h5>Partners</h5>
                  </div>
                  <div>{project.partners}</div>
                </div>
              ) : null}

              <div className="detail-block">
                <div className="subtitle">
                  <h5>Date</h5>
                </div>
                <div>{project.date}</div>
              </div>
            </Col>
          </Row>
          {/* eslint-disable react/jsx-indent */}
          <CardColumns className="ts-gallery ts-column-count-4">
            {project.project_gallery
              ? project.project_gallery.map((image) => (
                  <Card className="ts-gallery-item" key={image}>
                    <Card.Img src={`${image.replace("/static", "")}`} />
                  </Card>
                ))
              : null}
          </CardColumns>
        </Container>
      </section>
    </>
  );
};

export default Project;

export const pageQuery = graphql`
  query ProjectBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        objective
        partners
        slug
        name
        category
        date(formatString: "MMMM, YYYY")
        brief
        featured
        featured_image
        project_gallery
        project_image
      }
    }
  }
`;
