import React from "react";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/TitleSection";
import InDevelopment from "../components/InDevelopment";
import LetsTalk from "../components/LetsTalk";
import FAQ from "../components/FAQ";

const services = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Services" location={location} />

      <div className="services-container">
        <TitleSection location={location} crumbLabel="Services" />
        <InDevelopment />
        <FAQ />
        <LetsTalk />
      </div>
    </MainLayout>
  );
};

export default services;
