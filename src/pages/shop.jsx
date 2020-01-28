import React from "react";
import MainLayout from "../layout";
import TitleSection from "../components/TitleSection";

import { MetaData } from "../components/meta";

const shop = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Shop" location={location} />

      <div className="shop-container">
        <TitleSection location={location} crumbLabel="Shop" />
        {/*  */}
      </div>
    </MainLayout>
  );
};

export default shop;
