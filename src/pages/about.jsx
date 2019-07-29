import React from 'react';
import Helmet from 'react-helmet';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import MainLayout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';

const about = ( { location } ) => {
	return (
		<MainLayout location={location} crumbLabel="About Us">
			<div className="about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<About />
			</div>
		</MainLayout>
	);
};

export default about;
