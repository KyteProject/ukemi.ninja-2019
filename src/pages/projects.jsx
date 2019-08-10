import React from 'react';
import MainLayout from '../layout';
import { TitleSection } from '../components/TitleSection';
import { MetaData } from '../components/meta';

const projects = ( { location } ) => {
	return (
		<MainLayout>
			<MetaData title={'Projects'} location={location} />

			<div className="projects-container">
				<TitleSection location={location} crumbLabel="Projects" />
				{/*  */}
			</div>
		</MainLayout>
	);
};

export default projects;
