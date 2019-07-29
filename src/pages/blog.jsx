import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const blog = ( { location } ) => {
	return (
		<MainLayout>
			<div className="blog-container">
				<Helmet title={`Blog | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Blog" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default blog;
