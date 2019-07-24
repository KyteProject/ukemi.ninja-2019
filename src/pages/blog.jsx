import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const blog = () => {
	return (
		<MainLayout>
			<div className="blog-container">
				<Helmet title={`Blog | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default blog;
