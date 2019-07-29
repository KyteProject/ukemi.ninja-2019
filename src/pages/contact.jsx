import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const contact = ( { location } ) => {
	return (
		<MainLayout>
			<div className="contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Contact" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default contact;
