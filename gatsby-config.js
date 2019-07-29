const urljoin = require( 'url-join' );
const config = require( './data/SiteConfig' );

module.exports = {
	pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
	siteMetadata: {
		siteUrl: urljoin( config.siteUrl, config.pathPrefix ),
		rssMetadata: {
			site_url: urljoin( config.siteUrl, config.pathPrefix ),
			feed_url: urljoin( config.siteUrl, config.pathPrefix, config.siteRss ),
			title: config.siteTitle,
			description: config.siteDescription,
			image_url: `${urljoin( config.siteUrl, config.pathPrefix )}/logos/logo-512.png`,
			copyright: config.copyright
		}
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor
			}
		},
		{
			resolve: 'gatsby-plugin-prefetch-google-fonts',
			options: {
				fonts: [
					{
						family: 'Rubik',
						variants: [ '400', '500', '700', '900' ]
					}
				]
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleShort,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/logos/logo-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/logos/logo-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		},
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-breadcrumb',
			options: {
				defaultCrumb: {
					location: {
						state: { crumbClicked: false },
						pathname: '/'
					},
					crumbLabel: 'Home',
					crumbSeparator: ' / '
				}
			}
		}
	]
};
