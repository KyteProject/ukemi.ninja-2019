import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const contact = ( { location } ) => {
	return (
		<MainLayout location={location} crumbLabel="Contact Us">
			<div className="contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default contact;
