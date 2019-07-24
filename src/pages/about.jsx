import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import About from '../components/About';
import config from '../../data/SiteConfig';

const about = () => {
	return (
		<MainLayout>
			<div className="about-container">
				<Helmet title={`About | ${config.siteTitle}`} />
				<About />
			</div>
		</MainLayout>
	);
};

export default about;
