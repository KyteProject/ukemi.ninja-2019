import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import ProjectCard from "../components/projects/ProjectCard";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";

const Projects = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                date
                name
                project_image
                slug
                objective
                category
              }
            }
          }
        }
      }
    `
  );

  const projects = data.allMarkdownRemark.edges;

  return (
    <MainLayout>
      <MetaData title="Projects" location={location} />
      <div className="projects-container">
        <TitleSection location={location} crumbLabel="Projects" />
        <PageTitle
          title="Project Portfolio"
          subTitle={[
            "Here are some of the projects we have worked on.",
            "If you'd like to hire us we'd love to hear from you!",
          ]}
        />
        <section>
          <Container className="inner">
            <Row>
              {projects.length > 0
                ? /* prettier-ignore */
                  projects.map(({ node }) =>
                    <ProjectCard key={node.id} project={node.frontmatter} />
                )
                : null}
            </Row>
          </Container>
        </section>
      </div>
    </MainLayout>
  );
};

export default Projects;
