import React from "react";
import { CartProvider } from "react-use-cart";
import { GraphQLClient, ClientContext } from "graphql-hooks";
import { ToastContainer } from "react-toastify";

import StripeProvider from "./src/components/shop/StripeProvider";
import { handleItemAdded, handleItemUpdated, handleItemRemoved } from "./src/utils/cart-helpers";
import MainLayout from "./src/layout/index";

const toastOptions = {
  position: "top-right",
  draggable: false,
  toastClassName: "bg-primary text-white text-center px-2 py-3 shadow-none rounded-lg",
  progressClassName: "h-0",
  closeButton: false,
  autoClose: 2000,
};

const client = new GraphQLClient({
  url: "/.netlify/functions/graphql",
});

const randomCartId = () =>
  Math.random()
    .toString(36)
    .substring(7);

const trustAllScripts = () => {
  const scriptNodes = document.querySelectorAll(".load-external-scripts script");

  for (let i = 0; i < scriptNodes.length; i += 1) {
    const node = scriptNodes[i];
    const s = document.createElement("script");

    s.type = node.type || "text/javascript";

    if (node.attributes.src) {
      s.src = node.attributes.src.value;
    } else {
      s.innerHTML = node.innerHTML;
    }

    document.getElementsByTagName("head")[0].appendChild(s);
  }
};

export const onRouteUpdate = () => {
  trustAllScripts();
};

export const wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <StripeProvider>
      <ClientContext.Provider value={client}>
        <CartProvider
          id={randomCartId()}
          onItemAdd={handleItemAdded}
          onItemUpdate={handleItemUpdated}
          onItemRemove={handleItemRemoved}>
          {element}
        </CartProvider>
        <ToastContainer {...toastOptions} />
      </ClientContext.Provider>
    </StripeProvider>
  );
};
