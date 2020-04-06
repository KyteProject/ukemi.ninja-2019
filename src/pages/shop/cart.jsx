import React from "react";

import { MetaData } from "../../components/meta";
import PageTitle from "../../components/common/PageTitle";
import TitleSection from "../../components/common/TitleSection";
import Cart from "../../components/shop/Cart";

const cart = ({ location }) => {
  return (
    <>
      <MetaData title="Shopping Cart" location={location} />
      <TitleSection
        location={location}
        crumbLabel="Shopping Cart"
        sub={{ slug: "shop", label: "Shop" }}
      />
      <PageTitle
        title="Shopping Cart"
        subTitle={[
          "We've updated our store, please contact us",
          "at support@ukemi.ninja if you have any issues.",
        ]}
      />
      <Cart />
    </>
  );
};

export default cart;
