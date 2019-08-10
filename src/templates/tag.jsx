import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MainLayout from '../layout';
import Pagination from './../components/Pagination';
import { MetaData } from '../components/meta';

const Tag = ( { data, location, pageContext } ) => {
	const tag = data.ghostTag;
	const posts = data.allGhostPost.edges;

	return (
		<React.Fragment>
			<MetaData data={data} location={location} type="series" />

			<MainLayout>
				<div className="container">
					<header className="tag-header">
						<h1>{tag.name}</h1>
						{tag.description ? <p>{tag.description}</p> : null}
					</header>
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

Tag.propTypes = {
	data: PropTypes.shape( {
		ghostTag: PropTypes.shape( {
			name: PropTypes.string.isRequired,
			description: PropTypes.string
		} ),
		allGhostPost: PropTypes.object.isRequired
	} ).isRequired,
	location: PropTypes.shape( {
		pathname: PropTypes.string.isRequired
	} ).isRequired,
	pageContext: PropTypes.object
};

export default Tag;

export const pageQuery = graphql`
	query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
		ghostTag(slug: { eq: $slug }) {
			...GhostTagFields
		}
		allGhostPost(
			sort: { order: DESC, fields: [published_at] }
			filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					...GhostPostFields
				}
			}
		}
	}
`;
