import React from 'react';
import Helmet from 'react-helmet';

import MainLayout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const about = ( { location } ) => {
	return (
		<MainLayout>
			<Helmet title={`About | ${config.siteTitle}`} />
			<TitleSection location={location} crumbLabel="About Us" />
			<About />
		</MainLayout>
	);
};

export default about;
