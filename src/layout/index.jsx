import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, StaticQuery, graphql } from 'gatsby';

import config from '../../data/siteConfig';
import Navigation from './../components/Navigation';
import Footer from '../components/Footer';
import { TitleSection } from '../components/TitleSection';

import('../scss/index.scss');

const MainLayout = ({ data, children, bodyClass }) => {
	return (
		<React.Fragment>
			<Helmet>
				<html lang="en" />
				<body className={bodyClass} />
			</Helmet>

			<div className="viewport">
				<div className="viewport-top">
					<Navigation />
					<main>{children}</main>
				</div>
				<div className="viewport-bottom">
					<Footer />
				</div>
			</div>
		</React.Fragment>
	);
};

MainLayout.propTypes = {
	children: PropTypes.node.isRequired,
	bodyClass: PropTypes.string,
	data: PropTypes.shape({
		allGhostSettings: PropTypes.object,
	}),
};

export default MainLayout;
