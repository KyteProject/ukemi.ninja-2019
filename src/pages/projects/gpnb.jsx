import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../../layout';
import config from '../../../data/SiteConfig';
import { TitleSection } from '../../components/TitleSection';

const gpnb = ( { location } ) => {
	return (
		<MainLayout>
			<div className="gpnb-container">
				<Helmet title={`GPNB | ${config.siteTitle}`} />
				<TitleSection
					location={location}
					sub={{ name: 'projects', label: 'Projects' }}
					crumbLabel="The Greatest Park Never Built"
				/>
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default gpnb;
