import React from "react";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import CTASocials from "../components/common/CTASocials";
import Brands from "../components/services/Brands";
import InDevelopment from "../components/common/InDevelopment";
import AboutDetails from "../components/home/AboutDetails";
import PageTitle from "../components/common/PageTitle";

const about = ({ location }) => {
  return (
    <>
      <MetaData title="About Us" location={location} />
      <TitleSection location={location} crumbLabel="About Us" />
      <PageTitle title="About Us" />
      <AboutDetails />
      <Brands />
      <CTASocials />
      <InDevelopment />
    </>
  );
};

export default about;
