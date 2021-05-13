import React from "react";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import Brands from "../components/common/Brands";
import AboutDetails from "../components/home/AboutDetails";
import PageTitle from "../components/common/PageTitle";

const about = ({ location }) => {
  return (
    <>
      <MetaData title="About Us" location={location} image="/images/og-index.png" />
      <TitleSection location={location} crumbLabel="About Us" />
      <PageTitle title="About Us" />
      <AboutDetails />
      <Brands />
    </>
  );
};

export default about;
