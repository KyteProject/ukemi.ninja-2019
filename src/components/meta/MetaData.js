import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import url from 'url';

import config from '../../../data/siteConfig';
import ArticleMeta from './ArticleMeta';
import WebsiteMeta from './WebsiteMeta';
import AuthorMeta from './AuthorMeta';

const MetaData = ( { data, settings, title, description, image, location } ) => {
	const { ghostPost, ghostTag, ghostAuthor, ghostPage } = data,
		canonical = url.resolve( config.siteUrl, location.pathname ),
		ghostSettings = settings.allGhostSettings.edges[ 0 ].node;

	if ( ghostPost ) {
		return <ArticleMeta data={ghostPost} canonical={canonical} />;
	} else if ( ghostTag ) {
		return <WebsiteMeta data={ghostTag} canonical={canonical} type="Series" />;
	} else if ( ghostAuthor ) {
		return <AuthorMeta data={ghostAuthor} canonical={canonical} />;
	} else if ( ghostPage ) {
		return <WebsiteMeta data={ghostPage} canonical={canonical} type="WebSite" />;
	}

	const metaTitle = title || config.siteTitle || ghostSettings.title,
		metaDescription = description || config.siteDescription || ghostSettings.description;

	let metaImage = image || ghostSettings.cover_image || null;

	metaImage = image ? url.resolve( config.siteUrl, image ) : null;

	return (
		<WebsiteMeta
			data={{}}
			canonical={canonical}
			title={metaTitle}
			description={metaDescription}
			image={metaImage}
			type="WebSite"
		/>
	);
};

MetaData.defaultProps = {
	data: {}
};

const MetaDataQuery = ( props ) => (
	<StaticQuery
		query={graphql`
			query GhostSettingsMetaData {
				allGhostSettings {
					edges {
						node {
							title
							description
						}
					}
				}
			}
		`}
		render={( data ) => <MetaData settings={data} {...props} />}
	/>
);

export default MetaDataQuery;
