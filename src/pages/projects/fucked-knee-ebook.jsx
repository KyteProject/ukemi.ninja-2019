import React from 'react';
import Helmet from 'react-helmet';
import MainLayout from '../../layout';
import config from '../../../data/SiteConfig';
import { TitleSection } from '../../components/TitleSection';

const fuckedKnee = ( { location } ) => {
	return (
		<MainLayout>
			<div className="fucked-container">
				<Helmet title={`Fucked Knee | ${config.siteTitle}`} />
				<TitleSection
					location={location}
					sub={{ name: 'projects', label: 'Projects' }}
					crumbLabel="Fucked Knee"
				/>
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default fuckedKnee;
