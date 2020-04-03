import React, { createContext, useReducer } from "react";
import { useCart } from "react-use-cart";

const CheckoutContext = createContext();

function reducer(state, { payload, type }) {
  switch (type) {
    case "CHECKOUT_PROCESSING":
      return {
        ...state,
        processing: true,
        error: null,
      };
    case "CHECKOUT_ERROR":
      return { ...state, processing: false, error: payload.message };
    case "CHECKOUT_SUCCESS":
      return {
        ...state,
        allowPayment: false,
        processing: false,
        error: null,
        success: true,
      };
    case "CHECKOUT_UPDATE_SHIPPING":
      return {
        ...state,
        shipping: payload,
      };
    case "CHECKOUT_UPDATE_TAX":
      return {
        ...state,

        tax: payload,
      };
    case "CHECKOUT_PAYMENT":
      return {
        ...state,
        allowPayment: true,
        processing: false,
        error: null,
      };
    default:
      throw new Error("Invalid action");
  }
}

const CheckoutProvider = ({ children }) => {
  const { cartTotal } = useCart();
  const [state, dispatch] = useReducer(reducer, {
    allowPayment: false,
    processing: false,
    error: null,
    success: false,
    shipping: 0,
    tax: 0,
    discount: 0,
  });

  const checkoutError = (payload) => {
    dispatch({ type: "CHECKOUT_ERROR", payload });
  };

  const checkoutPayment = () => {
    dispatch({ type: "CHECKOUT_PAYMENT" });
  };

  const checkoutProcessing = () => {
    dispatch({ type: "CHECKOUT_PROCESSING" });
  };

  const checkoutSuccess = () => {
    dispatch({ type: "CHECKOUT_SUCCESS" });
  };

  const orderTotal = cartTotal - state.discount + state.shipping;

  const updateShipping = (payload) => {
    dispatch({ type: "CHECKOUT_UPDATE_SHIPPING", payload });
  };

  const updateDiscount = () => {};

  return (
    <CheckoutContext.Provider
      value={{
        ...state,
        checkoutError,
        checkoutPayment,
        checkoutProcessing,
        checkoutSuccess,
        orderTotal,
        updateShipping,
        updateDiscount,
      }}>
      <>{children}</>
    </CheckoutContext.Provider>
  );
};

export { CheckoutProvider, CheckoutContext as default };
