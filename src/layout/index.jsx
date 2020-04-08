import React from "react";
import Helmet from "react-helmet";

import Navigation from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import "../scss/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import favicon32 from "../../static/favicon/favicon-32.png";
import favicon128 from "../../static/favicon/favicon-128.png";
import favicon152 from "../../static/favicon/favicon-152.png";
import favicon167 from "../../static/favicon/favicon-167.png";
import favicon180 from "../../static/favicon/favicon-180.png";
import favicon192 from "../../static/favicon/favicon-192.png";
import favicon196 from "../../static/favicon/favicon-196.png";
import favicon512 from "../../static/favicon/favicon-512.png";

const MainLayout = ({ children, bodyClass }) => {
  return (
    <>
      <Helmet
        link={[
          { rel: "icon", type: "image/png", sizes: "32x32", href: `${favicon32}` },
          { rel: "icon", type: "image/png", sizes: "128x128", href: `${favicon128}` },
          { rel: "icon", type: "image/png", sizes: "152x152", href: `${favicon152}` },
          { rel: "icon", type: "image/png", sizes: "167x167", href: `${favicon167}` },
          { rel: "icon", type: "image/png", sizes: "180x180", href: `${favicon180}` },
          { rel: "icon", type: "image/png", sizes: "192x192", href: `${favicon192}` },
          { rel: "icon", type: "image/png", sizes: "196x196", href: `${favicon196}` },
          { rel: "icon", type: "image/png", sizes: "512x512", href: `${favicon512}` },
          { rel: "shortcut icon", type: "image/png", href: `${favicon196}` },
        ]}>
        <html lang="en" />
        <body className={bodyClass} />
      </Helmet>
      <div className="page-wrapper">
        <Navigation />
        <main className="content-wrapper">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
