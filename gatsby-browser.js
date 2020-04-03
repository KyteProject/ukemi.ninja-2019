import React from "react";
import { CartProvider } from "react-use-cart";
import { ToastContainer } from "react-toastify";

import StripeProvider from "./src/components/shop/StripeProvider";
import MainLayout from "./src/layout/index";

import { handleItemAdded, handleItemUpdated, handleItemRemoved } from "./src/utils/cart-helpers";

const toastOptions = {
  position: "bottom-center",
  draggable: false,
  autoClose: 2000,
};

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

const loader = {
  start: () => {
    const parent = document.querySelector("body");
    const loading = document.createElement("div");
    loading.className = "preloader";
    loading.id = "preloader";
    loading.innerHTML = `<div class="loader">
    <div class="loader-outter"></div>
    <div class="loader-inner"></div>
    </div>`;

    parent.appendChild(loading);
  },
  stop: () => {
    const element = document.querySelector("#preloader");
    if (element) element.classList.add("preloader-deactivate");
  },
};

export const onClientEntry = () => {
  loader.start();
};

export const onInitialClientRender = () => {
  loader.stop();
};

export const onRouteUpdateDelayed = () => {
  loader.start();
};

export const onRouteUpdate = () => {
  loader.stop();
  trustAllScripts();
};

export const wrapPageElement = ({ element, props }) => {
  return <MainLayout {...props}>{element}</MainLayout>;
};

export const wrapRootElement = ({ element }) => {
  return (
    <StripeProvider>
      <CartProvider
        id={randomCartId()}
        onItemAdd={handleItemAdded}
        onItemUpdate={handleItemUpdated}
        onItemRemove={handleItemRemoved}>
        {element}
      </CartProvider>
      <ToastContainer {...toastOptions} />
    </StripeProvider>
  );
};
