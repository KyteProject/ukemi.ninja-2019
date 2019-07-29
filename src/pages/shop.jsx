import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';
import { TitleSection } from '../components/TitleSection';

const shop = ( { location } ) => {
	return (
		<MainLayout>
			<div className="shop-container">
				<Helmet title={`Shop | ${config.siteTitle}`} />
				<TitleSection location={location} crumbLabel="Shop" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default shop;
