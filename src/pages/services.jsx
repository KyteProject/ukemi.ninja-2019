import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const services = ( { location } ) => {
	return (
		<MainLayout>
			<div className="services-container">
				<Helmet title={`Services | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Services" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default services;
