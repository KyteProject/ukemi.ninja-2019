import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Container, Row, Col, Card, CardColumns } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

import MainLayout from '../layout';
import { MetaData } from '../components/meta';
import { TitleSection } from '../components/TitleSection';

const Project = ( { data, location } ) => {
  const project = data.strapiProjects;

	return (
		<React.Fragment>
			<MainLayout>
				<MetaData data={data} location={location} type="article" />
				<TitleSection location={location} sub={{ slug: 'projects', label: 'Projects' }} crumbLabel={project.name} />
				<section className="projects">
					<Container>
						<Row>
							<Col md={7}>
								<div className="title">
									<h1>{project.name}</h1>
								</div>
								<div className="project-brief">
									<ReactMarkdown source={project.brief} />
								</div>
								<div className="project-tags">
									{/*  */}
								</div>
							</Col>
							<Col md={{ span: 4, offset: 1 }} className="project-details">
								<div className="detail-block">
									<div className="subtitle">
										<h5>Objective</h5>
									</div>
									<div>
										{project.objective}
									</div>
								</div>

								{project.clients ? (
									<div className="detail-block">
										<div className="subtitle">
											<h5>Clients</h5>
										</div>
										<div>
											{project.clients}
										</div>
									</div>
								) : null}

								{project.partners ? (
									<div className="detail-block">
										<div className="subtitle">
											<h5>Partners</h5>
										</div>
										<div>
											{project.partners}
										</div>
									</div>
								) : null}

								<div className="detail-block">
									<div className="subtitle">
										<h5>Date</h5>
									</div>
									<div>
										{project.date}
									</div>
								</div>
							</Col>
						</Row>
						<CardColumns className="ts-gallery ts-column-count-4">
							{project.images ? (
								project.images.map( ( image ) => (
									<Card className="ts-gallery-item" key={image.id}><Card.Img src={`http://localhost:8777${image.url}`} alt={image.name}/></Card>
								) )
								) : null}
							</CardColumns>
					</Container>
				</section>
			</MainLayout>
		</React.Fragment>
	);
};

Project.propTypes = {
	data: PropTypes.shape( {
		strapiProjects: PropTypes.shape( {
			name: PropTypes.string.isRequired,
			slug: PropTypes.string.isRequired,
			brief: PropTypes.string.isRequired,
			clients: PropTypes.string,
			partners: PropTypes.string,
			objective: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		} ).isRequired
	} ).isRequired,
	location: PropTypes.object.isRequired
};

export default Project;

export const query = graphql`
	query ProjectTemplate($slug: String!) {
		strapiProjects(slug: {eq: $slug}) {
			name
			slug
			brief
			clients
			partners
			objective
			date(formatString: "MMMM, YYYY")
			images {
				id
				name
				url
			}
		}
	}
`;
