import React from "react";
import { Link } from "gatsby";
import { Card, Col, Figure } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Col lg={4} md={6}>
      {/* <Card className="project-single">
        <div className="project-single-image">
          {project.project_image && (
            <Link to={`projects/${project.slug}`}>
              <Card.Img
                variant="top"
                src={project.project_image.replace("/static", "")}
                alt={project.name}
              />
            </Link>
          )}
        </div>

        <Card.Body className="project-single-content">
          <span className="project-single-cat">{project.category}</span>

          <Link to={`projects/${project.slug}`} className="project-single-title">
            <h3>{project.name}</h3>
          </Link>

          <Card.Subtitle className="project-single-meta"></Card.Subtitle>

          <Card.Text>{project.objective}</Card.Text>
          <Card.Link href={`${project.slug}`}>Read More →</Card.Link>
        </Card.Body>
      </Card> */}

      <div className="box shadow p-30">
        <Figure className="main overlay">
          <Link to={`projects/${project.slug}`}>
            <Figure.Image rounded src={project.project_image} alt={project.name} />
          </Link>
        </Figure>
        <div className="box-content">
          <Link to={`projects/${project.slug}`}>
            <h2 className="box-title mb-10">{project.name}</h2>
          </Link>
          <p>{project.objective}</p>
          <Link to={`projects/${project.slug}`}>View Full Brief</Link>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
