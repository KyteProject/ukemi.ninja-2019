import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";

import { MetaData } from "../components/meta";
import ProjectCard from "../components/projects/ProjectCard";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";

const Projects = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProjectsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(/content/projects)/.*\\\\.md$/" } }
        ) {
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
  const categories = ["all"];

  projects.forEach(({ node }) => {
    !categories.includes(node.frontmatter.category)
      ? categories.push(node.frontmatter.category)
      : null;
  });

  const [filterCat, setFilterCat] = useState("all");
  const [filterProjects, setFilterProjects] = useState(projects);
  const handleClick = (event) => {
    setFilterCat(event.target.attributes.value.value.toLowerCase());
  };

  useEffect(() => {
    if (filterCat === "all") {
      return setFilterProjects(projects);
    }

    const results = projects.filter((project) =>
      project.node.frontmatter.category.toLowerCase().includes(filterCat)
    );

    return setFilterProjects(results);
  }, [filterCat]);

  return (
    <>
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
          <Container className="inner pt-5">
            <div className="filter text-center">
              <ul>
                {categories.map((cat) => (
                  <li key={cat}>
                    <Button as="a" value={cat} onClick={handleClick}>
                      {cat}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <Container className="tiles text-center gallery-wrapper">
              <Row>
                {projects.length > 0
                  ? /* prettier-ignore */
                    filterProjects.map(({ node }) =>
                      <ProjectCard key={node.id} project={node.frontmatter} />
                )
                  : null}
              </Row>
            </Container>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Projects;
