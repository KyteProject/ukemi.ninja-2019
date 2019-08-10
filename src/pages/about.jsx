import React from 'react';
import MainLayout from '../layout';
import About from '../components/About';
import { TitleSection } from '../components/TitleSection';
import { MetaData } from '../components/meta';

const about = ( { location } ) => {
	return (
		<MainLayout>
			<MetaData title={'About Us'} location={location} />
			<TitleSection location={location} crumbLabel="About Us" />
			<About />
		</MainLayout>
	);
};

export default about;
