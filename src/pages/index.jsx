import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layout';
// import PostListing from "../components/PostListing/PostListing";
// import SEO from "../components/SEO/SEO";
import config from '../../data/SiteConfig';

const Index = () => {
	return (
		<Layout>
			<div className="index-container">
				<Helmet title={config.siteTitle} />
				<h1>Ukemi</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ab consectetur tempore hic nostrum
					facere asperiores culpa accusamus a eligendi neque officia dolor mollitia odit fugit distinctio
					incidunt, consequatur veritatis.
				</p>
			</div>
		</Layout>
	);
};

export default Index;
