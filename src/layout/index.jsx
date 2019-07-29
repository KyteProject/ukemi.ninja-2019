import React, { useEffect } from 'react';
import Helmet from 'react-helmet';

import config from '../../data/SiteConfig';
import Navigation from './../components/Navigation';
import Footer from '../components/Footer';
import { TitleSection } from '../components/TitleSection';

import('../scss/main.scss');

const MainLayout = ({ children }) => {
	return (
		<React.Fragment>
			<Helmet>
				<meta name="description" content={config.siteDescription} />
			</Helmet>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</React.Fragment>
	);
};

export default MainLayout;
