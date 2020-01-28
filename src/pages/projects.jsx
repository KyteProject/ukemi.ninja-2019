import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import ProjectCard from "../components/ProjectCard";
import TitleSection from "../components/TitleSection";

const Projects = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        allStrapiProjects(limit: 9, sort: { order: DESC, fields: updated_at }) {
          edges {
            node {
              id
              updated_at
              name
              objective
              slug
              date
              category
              project_image {
                publicURL
              }
            }
          }
        }
      }
    `
  );

  const projects = data.allStrapiProjects.edges;

  return (
    <MainLayout>
      <MetaData title="Projects" location={location} />
      <div className="projects-container">
        <TitleSection location={location} crumbLabel="Projects" />
        <section className="projects-page">
          <Container>
            <Row>
              {projects.map(({ node }) => (
                <ProjectCard key={node.id} project={node} />
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </MainLayout>
  );
};

export default Projects;
