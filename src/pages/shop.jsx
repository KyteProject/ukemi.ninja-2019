import React from "react";
import MainLayout from "../layout";

import { MetaData } from "../components/meta";
import TitleSection from "../components/TitleSection";
import InDevelopment from "../components/InDevelopment";

const shop = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Shop" location={location} />

      <div className="shop-container">
        <TitleSection location={location} crumbLabel="Shop" />
        <InDevelopment />
      </div>
    </MainLayout>
  );
};

export default shop;
