import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const projects = ( { location } ) => {
	return (
		<MainLayout>
			<div className="projects-container">
				<Helmet title={`Projects | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Projects" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default projects;
