import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const projects = () => {
	return (
		<MainLayout>
			<div className="projects-container">
				<Helmet title={`Projects | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default projects;
