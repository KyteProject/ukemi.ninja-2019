import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../layout';
import config from '../../data/siteConfig';
import { MetaData } from '../components/meta';
import { CTA2 } from '../components/CTA2';
import { RecentPosts } from '../components/RecentPosts';

const Index = () => {
	return (
		<MainLayout>
			<MetaData title={'Movement Design Specialists'} location={location} />

			<div className="index-container">
				<Helmet title={config.siteTitle} />
				<h1>Ukemi</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ab consectetur tempore hic nostrum
					facere asperiores culpa accusamus a eligendi neque officia dolor mollitia odit fugit distinctio
					incidunt, consequatur veritatis.
				</p>
			</div>
			<RecentPosts />
			<CTA2 />
		</MainLayout>
	);
};

export default Index;
