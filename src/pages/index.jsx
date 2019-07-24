import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MainLayout from '../layout';
import config from '../../data/SiteConfig';

const Index = () => {
	return (
		<MainLayout>
			<div className="index-container">
				<Helmet title={config.siteTitle} />
				<h1>Ukemi</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ab consectetur tempore hic nostrum
					facere asperiores culpa accusamus a eligendi neque officia dolor mollitia odit fugit distinctio
					incidunt, consequatur veritatis.
				</p>
			</div>
		</MainLayout>
	);
};

export default Index;
