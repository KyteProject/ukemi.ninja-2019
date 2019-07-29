import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const shop = ( { location } ) => {
	return (
		<MainLayout location={location} crumbLabel="Shop">
			<div className="shop-container">
				<Helmet title={`Shop | ${config.siteTitle}`} />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default shop;
