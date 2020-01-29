import React from "react";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/TitleSection";
import InDevelopment from "../components/InDevelopment";

const services = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Services" location={location} />

      <div className="services-container">
        <TitleSection location={location} crumbLabel="Services" />
        <InDevelopment />
      </div>
    </MainLayout>
  );
};

export default services;
