import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import MainLayout from '../layout';
import Pagination from './../components/Pagination';
import PostCard from './../components/PostCard';
import CategoryItem from './../components/CategoryItem';
import { MetaData } from '../components/meta';

const Index = ( { data, location, pageContext } ) => {
	const posts = data.allGhostPost.edges;
	const cats = data.allGhostTag.edges;

	return (
		<React.Fragment>
			<MetaData location={location} />

			<MainLayout>
				<section id="blog" className="blog-section">
					<Container>
						<Row>
							<Col lg={9} md={9}>
								<div className="blog-content">
									{posts.map( ( { node } ) => <PostCard key={node.id} post={node} /> )}
								</div>
							</Col>
							<Col lg={3} md={3}>
								<div className="blog-sidebar">
									<aside className="widget widget-tags">
										<h4 className="widget-title">
											<span>Categories</span>
										</h4>
										<div className="widget-content">
											{cats.map( ( { node } ) => <CategoryItem key={node.id} item={node} /> )}
										</div>
									</aside>
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
		allGhostPost: PropTypes.object.isRequired,
		allGhostTag: PropTypes.object.isRequired
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
		allGhostTag(sort: { order: DESC, fields: postCount }) {
			edges {
				node {
					...GhostTagFields
				}
			}
		}
	}
`;
