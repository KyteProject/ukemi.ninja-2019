import React from "react";
import { Link } from "gatsby";
import { Col, Figure } from "react-bootstrap";

const ProjectCard = ({ project }) => {
  return (
    <Col lg={4} md={6} className="gallery-item">
      <div className="box shadow p-30">
        <Figure className="main overlay">
          <Link to={project.slug}>
            <Figure.Image rounded src={project.project_image} alt={project.name} />
          </Link>
        </Figure>
        <div className="box-content">
          <Link to={project.slug}>
            <h2 className="box-title mb-10">{project.name}</h2>
          </Link>
          <p>{project.objective}</p>
          <Link to={project.slug}>View Full Brief</Link>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
