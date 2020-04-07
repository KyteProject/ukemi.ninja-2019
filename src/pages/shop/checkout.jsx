import React from "react";

import { MetaData } from "../../components/meta";
import PageTitle from "../../components/common/PageTitle";
import TitleSection from "../../components/common/TitleSection";
import Checkout from "../../components/shop/Checkout";

const cart = ({ location }) => {
  return (
    <>
      <MetaData title="Shop Checkout" location={location} />
      <TitleSection
        location={location}
        crumbLabel="Checkout"
        sub={{ slug: "shop", label: "Shop" }}
      />
      <PageTitle
        title="Shop Checkout"
        subTitle={[
          "We've updated our store, please contact us ",
          "at support@ukemi.ninja if you have any issues.",
        ]}
      />
      <Checkout />
    </>
  );
};

export default cart;
