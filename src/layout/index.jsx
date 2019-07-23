import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Navigation from '../components/Navigation.jsx';
import '../sass/main.sass';
import Footer from '../components/Footer';

const MainLayout = ( { children } ) => {
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
