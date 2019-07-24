import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const services = () => {
	return (
		<MainLayout>
			<div className="services-container">
				<Helmet title={`Services | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default services;
