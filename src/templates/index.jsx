import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MainLayout from '../layout';
import Pagination from './../components/Pagination';
import { MetaData } from '../components/meta';

const Index = ( { data, location, pageContext } ) => {
	const posts = data.allGhostPost.edges;

	return (
		<React.Fragment>
			<MetaData location={location} />

			<MainLayout isHome={true}>
				<div className="container">
					<section className="post-feed">
						{posts.map( ( { node } ) => (
							// The tag below includes the markup for each post - components/common/PostCard.js
							<div key={node.id} post={node} />
						) )}
					</section>
					<Pagination pageContext={pageContext} />
				</div>
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
