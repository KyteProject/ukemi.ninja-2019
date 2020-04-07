import React from "react";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import ServiceHeader from "../components/services/ServiceHeader";
import ServiceDetails from "../components/services/ServiceDetails";
import FAQ from "../components/services/FAQ";
import LetsTalk from "../components/services/LetsTalk";
import PageTitle from "../components/common/PageTitle";

const services = ({ location }) => {
  return (
    <>
      <MetaData title="Services" location={location} />
      <TitleSection location={location} crumbLabel="Services" />
      <PageTitle
        title="Our Services"
        subTitle={[
          "Our aim is to tackle health and safety culture,",
          "to encourage play, and demystify fitness and movement.",
        ]}
      />
      <ServiceHeader />
      <ServiceDetails />
      <FAQ />
      <LetsTalk />
    </>
  );
};

export default services;
