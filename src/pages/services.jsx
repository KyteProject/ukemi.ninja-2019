import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const services = ( { location } ) => {
	return (
		<MainLayout location={location} crumbLabel="Services">
			<div className="services-container">
				<Helmet title={`Services | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default services;
