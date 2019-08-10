import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';
import Contact from '../components/Contact';

const contact = ( { location } ) => {
	return (
		<MainLayout>
			<div className="contact-container">
				<Helmet title={`Contact | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Contact" />
				<Contact />
			</div>
		</MainLayout>
	);
};

export default contact;
