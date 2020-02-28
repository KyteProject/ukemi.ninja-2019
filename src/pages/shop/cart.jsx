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
      <PageTitle title="Shopping Cart" subTitle={["lorem ipsum doler intep posrt sioflglf sdlf"]} />
      <Cart />
    </>
  );
};

export default cart;
