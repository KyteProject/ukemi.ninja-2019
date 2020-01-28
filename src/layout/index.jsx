import React from "react";
import Helmet from "react-helmet";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import "../scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainLayout = ({ children, bodyClass }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <body className={bodyClass} />
      </Helmet>
      <div className="page-wrapper">
        <div className="viewport">
          <div className="viewport-top">
            <header className="site-header">
              <Navigation />
            </header>
            <main>{children}</main>
          </div>
          <div className="viewport-bottom">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
