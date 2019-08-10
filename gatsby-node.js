/* eslint-disable no-nested-ternary */

const path = require( 'path' );
const { paginate } = require( 'gatsby-awesome-pagination' );
const { postsPerPage } = require( './data/siteConfig' );

exports.createPages = async( { graphql, actions } ) => {
	const { createPage } = actions;

	const result = await graphql( `
		{
			allGhostPost(sort: { order: ASC, fields: published_at }) {
				edges {
					node {
						slug
					}
				}
			}
			allGhostTag(sort: { order: ASC, fields: name }) {
				edges {
					node {
						slug
						url
						postCount
					}
				}
			}
			allGhostAuthor(sort: { order: ASC, fields: name }) {
				edges {
					node {
						slug
						url
						postCount
					}
				}
			}
			allGhostPage(sort: { order: ASC, fields: published_at }) {
				edges {
					node {
						slug
						url
					}
				}
			}
			allGhostPage(sort: { order: ASC, fields: published_at }) {
				edges {
					node {
						slug
						url
					}
				}
			}
		}
	` );

	// Check for any errors
	if ( result.errors ) {
		throw new Error( result.errors );
	}

	// Extract query results
	const tags = result.data.allGhostTag.edges,
		authors = result.data.allGhostAuthor.edges,
		pages = result.data.allGhostPage.edges,
		posts = result.data.allGhostPost.edges;

	// Load templates
	const tagsTemplate = path.resolve( './src/templates/tag.jsx' ),
		authorTemplate = path.resolve( './src/templates/author.jsx' ),
		indexTemplate = path.resolve( './src/templates/index.jsx' ),
		pageTemplate = path.resolve( './src/templates/page.jsx' ),
		postTemplate = path.resolve( './src/templates/post.jsx' );

	// Create tag pages
	tags.forEach( ( { node } ) => {
		const totalPosts = node.postCount !== null ? node.postCount : 0,
			numberOfPages = Math.ceil( totalPosts / postsPerPage );

		node.url = `blog/tag/${node.slug}/`;

		Array.from( { length: numberOfPages } ).forEach( ( _, i ) => {
			const currentPage = i + 1,
				prevPageNumber = currentPage <= 1 ? null : currentPage - 1,
				nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1,
				nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null,
				previousPagePath = prevPageNumber	? prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/` : null; // prettier-ignore

			createPage( {
				path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
				component: tagsTemplate,
				context: {
					slug: node.slug,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numberOfPages: numberOfPages,
					humanPageNumber: currentPage,
					prevPageNumber: prevPageNumber,
					nextPageNumber: nextPageNumber,
					previousPagePath: previousPagePath,
					nextPagePath: nextPagePath
				}
			} );
		} );
	} );

	// Create author pages
	authors.forEach( ( { node } ) => {
		const totalPosts = node.postCount !== null ? node.postCount : 0,
			numberOfPages = Math.ceil( totalPosts / postsPerPage );

		node.url = `blog/author/${node.slug}/`;

		Array.from( { length: numberOfPages } ).forEach( ( _, i ) => {
			const currentPage = i + 1,
				prevPageNumber = currentPage <= 1 ? null : currentPage - 1,
				nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1,
				nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null,
				previousPagePath = prevPageNumber ? prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/` : null; // prettier-ignore

			createPage( {
				path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
				component: authorTemplate,
				context: {
					slug: node.slug,
					limit: postsPerPage,
					skip: i * postsPerPage,
					numberOfPages: numberOfPages,
					humanPageNumber: currentPage,
					prevPageNumber: prevPageNumber,
					nextPageNumber: nextPageNumber,
					previousPagePath: previousPagePath,
					nextPagePath: nextPagePath
				}
			} );
		} );
	} );

	// Create pages
	pages.forEach( ( { node } ) => {
		node.url = `blog/${node.slug}/`;

		createPage( {
			path: node.url,
			component: pageTemplate,
			context: {
				slug: node.slug
			}
		} );
	} );

	// Create post pages
	posts.forEach( ( { node } ) => {
		node.url = `blog/${node.slug}/`;

		createPage( {
			path: node.url,
			component: postTemplate,
			context: {
				slug: node.slug
			}
		} );
	} );

	// Create pagination
	paginate( {
		createPage,
		items: posts,
		itemsPerPage: postsPerPage,
		component: indexTemplate,
		pathPrefix: ( { pageNumber } ) => {
			if ( pageNumber === 0 ) {
				return '/blog/';
			}
			return '/blog/page';
		}
	} );
};
