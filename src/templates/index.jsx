import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col, Button } from 'react-bootstrap';

import MainLayout from '../layout';
import Pagination from './../components/Pagination';
import PostCard from './../components/PostCard';
import { MetaData } from '../components/meta';

const Index = ( { data, location, pageContext } ) => {
	const posts = data.allGhostPost.edges;

	return (
		<React.Fragment>
			<MetaData location={location} />

			<MainLayout>
				<section id="blog" className="blog-section">
					<Container>
						<Row>
							<Col lg={8} md={8}>
								<div className="blog-content">
									{posts.map( ( { node } ) => <PostCard key={node.id} post={node} /> )}
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<Pagination pageContext={pageContext} />
			</MainLayout>
		</React.Fragment>
	);
};

Index.propTypes = {
	data: PropTypes.shape( {
		allGhostPost: PropTypes.object.isRequired
	} ).isRequired,
	location: PropTypes.shape( {
		pathname: PropTypes.string.isRequired
	} ).isRequired,
	pageContext: PropTypes.object
};

export default Index;

export const pageQuery = graphql`
	query GhostPostQuery($limit: Int!, $skip: Int!) {
		allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: $limit, skip: $skip) {
			edges {
				node {
					...GhostPostFields
				}
			}
		}
	}
`;
