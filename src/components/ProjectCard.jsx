import React from "react";
import { Link } from "gatsby";
import { Card, Col } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  console.log(project);

  return (
    <Col lg={4}>
      <Card className="project-single">
        <div className="project-single-image">
          {project.project_image && (
            <Link to={project.slug}>
              <Card.Img variant="top" src={project.project_image.publicURL} alt={project.name} />
            </Link>
          )}
        </div>

        <Card.Body className="project-single-content">
          <span className="project-single-cat">{project.category}</span>

          <Link to={`projects/${project.slug}`} className="project-single-title">
            <h3>{project.name}</h3>
          </Link>

          <Card.Subtitle className="project-single-meta">{/*  */}</Card.Subtitle>

          <Card.Text>{project.objective}</Card.Text>
          <Card.Link href={`projects/${project.slug}`}>Read More →</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
