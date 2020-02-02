import React from "react";
import Helmet from "react-helmet";

import config from "../../data/siteConfig";
import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import Landing from "../components/Landing";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesSlider from "../components/ServicesSlider";
import Roadmap from "../components/Roadmap";
import RecentPosts from "../components/RecentPosts";
import CTA2 from "../components/CTA2";
import CTASocials from "../components/CTASocials";
import CTAEmail from "../components/CTAEmail";

const Index = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Movement Design Specialists" location={location} />

      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <Landing />
        <FeaturedProjects />
        <ServicesSlider />
        <CTASocials />
        <Roadmap />
        <CTAEmail />
        <RecentPosts />
        <CTA2 />
      </div>
    </MainLayout>
  );
};

export default Index;
