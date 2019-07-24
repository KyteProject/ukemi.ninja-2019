import React from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import Footer from '../components/Footer';
import Header from './../components/Header';

import('../scss/main.scss');

const MainLayout = ({ children }) => {
	return (
		<React.Fragment>
			<Helmet>
				<meta name="description" content={config.siteDescription} />
			</Helmet>
			<Header />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default MainLayout;
