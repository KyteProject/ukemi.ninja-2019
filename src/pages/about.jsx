import React from "react";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/TitleSection";
import CTASocials from "../components/CTASocials";
import Brands from "../components/Brands";
import InDevelopment from "../components/InDevelopment";
import AboutDetails from "../components/AboutDetails";

const about = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="About Us" location={location} />
      <TitleSection location={location} crumbLabel="About Us" />
      <AboutDetails />
      <Brands />
      <CTASocials />
      <InDevelopment />
    </MainLayout>
  );
};

export default about;
