import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../../layout';
import config from '../../../data/SiteConfig';
import { TitleSection } from '../../components/TitleSection';

const cards = ( { location } ) => {
	return (
		<MainLayout>
			<div className="cards-container">
				<Helmet title={`Card Game | ${config.siteTitle}`} />
				<TitleSection
					location={location}
					sub={{ name: 'projects', label: 'Projects' }}
					crumbLabel="Ukemi Card Game"
				/>
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default cards;
