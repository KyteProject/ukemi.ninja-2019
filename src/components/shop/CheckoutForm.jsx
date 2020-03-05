import React, { useContext } from "react";
import { navigate } from "gatsby";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { string, object } from "yup";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "react-use-cart";

import CheckoutContext from "../../context/Checkout";
import ShippingForm from "./ShippingForm";
import BillingForm from "./BillingForm";

const schema = object({
  shippingName: string().required(),
  shippingAddress1: string().required(),
  shippingAddress2: string(),
  shippingTown: string().required(),
  shippingCounty: string().required(),
  shippingCountry: string().required(),
  shippingPostcode: string().required(),
  billingName: string(),
  billingAddress1: string(),
  billingAddress2: string(),
  billingTown: string(),
  billingCounty: string(),
  billingCountry: string(),
  billingPostcode: string(),
});

const CheckoutForm = () => {
  const { emptyCart, items } = useCart();
  const {
    allowPayment,
    checkoutPayment,
    checkoutError,
    checkoutProcessing,
    checkoutSuccess,
    orderTotal,
    updateShipping,
  } = useContext(CheckoutContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleCheckoutError = () => {
    console.log("error");
  };

  const handleCheckoutSuccess = () => {
    checkoutSuccess();
    emptyCart();
    navigate("success");
  };

  const calculateShipping = async (values) => {
    try {
      // shipping API

      checkoutPayment();
    } catch (err) {
      handleCheckoutError(err);
    }
  };

  const submitOrder = async () => {
    console.log("submit");
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={() => (allowPayment ? submitOrder() : calculateShipping())}
      initialValues={{
        shippingName: "",
        shippingAddress1: "",
        shippingAddress2: "",
        shippingTown: "",
        shippingCounty: "",
        shippingCountry: "",
        shippingPostcode: "",
        separateBilling: "",
        billingName: "",
        billingAddress1: "",
        billingAddress2: "",
        billingTown: "",
        billingCounty: "",
        billingCountry: "",
        billingPostcode: "",
      }}>
      {({ handleSubmit, values }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <ShippingForm />
          {values.separateBilling[0] && <BillingForm />}
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
