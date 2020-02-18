import React from "react";
import Helmet from "react-helmet";

import config from "../../data/siteConfig";
import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import Landing from "../components/Landing";
import FeaturedProjects from "../components/FeaturedProjects";
import ServicesSlider from "../components/ServiceOverview";
import Roadmap from "../components/Roadmap";
import RecentPosts from "../components/blog/RecentPosts";
import CTA2 from "../components/common/CTA2";
import CTASocials from "../components/common/CTASocials";
import CTAEmail from "../components/common/CTAEmail";

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
