import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import './index.css';

const MainLayout = ({ children }) => {
	return (
  <React.Fragment>
    <Helmet>
      <meta name="description" content={config.siteDescription} />
    </Helmet>
    {children}
  </React.Fragment>
	);
};

export default MainLayout;
