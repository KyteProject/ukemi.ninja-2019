import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../../layout';
import config from '../../../data/siteConfig';
import { TitleSection } from '../../components/TitleSection';

const van = ( { location } ) => {
	return (
		<MainLayout>
			<div className="van-container">
				<Helmet title={`Parkour Van | ${config.siteTitle}`} />
				<TitleSection
					location={location}
					sub={{ name: 'projects', label: 'Projects' }}
					crumbLabel="Parkour Van"
				/>
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default van;
