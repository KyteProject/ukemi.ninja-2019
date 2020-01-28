import React from "react";
import MainLayout from "../layout";
import TitleSection from "../components/TitleSection";
import { MetaData } from "../components/meta";

const services = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Services" location={location} />

      <div className="services-container">
        <TitleSection location={location} crumbLabel="Services" />
        {/*  */}
      </div>
    </MainLayout>
  );
};

export default services;
