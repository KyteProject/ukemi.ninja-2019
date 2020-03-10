import React, { useContext } from "react";
import { navigate, graphql, useStaticQuery } from "gatsby";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { string, object } from "yup";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";

import config from "../../../data/siteConfig";
import CheckoutContext from "../../context/Checkout";
import ShippingForm from "./ShippingForm";
import BillingForm from "./BillingForm";
import { requestShippingPrice } from "../../utils/cart-helpers";

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
  const data = useStaticQuery(
    graphql`
      query Countries {
        allCountries {
          edges {
            node {
              alpha3Code
              name
            }
          }
        }
      }
    `
  );

  const { emptyCart, cartTotal, items } = useCart();
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

  const handleCheckoutError = ({ message = "Unable to process order. Please try again" }) => {
    checkoutError({ message });

    toast.error(message, {
      className: "bg-red",
    });
  };

  const handleCheckoutSuccess = () => {
    checkoutSuccess();
    emptyCart();
    navigate("success");
  };

  const calculateShipping = async (values) => {
    const { postageSender } = config;
    const countries = data.allCountries.edges;
    const activeCountry = countries.find((country) => country.node.name === values.shippingCountry);

    try {
      // shipping API
      const input = {
        origin: postageSender.country,
        destination: activeCountry.node.alpha3Code,
        boxes: items.map(({ item: id, height, length, weight, width, quantity }) => ({
          id,
          height: height * quantity,
          length: length * quantity,
          width: width * quantity,
          weight: weight * quantity,
        })),
        goods_value: cartTotal / 100,
        sender: {
          name: postageSender.name,
          address1: postageSender.address1,
          address2: postageSender.address2,
          town: postageSender.town,
          county: postageSender.county,
          postcode: postageSender.postcode,
        },
        recipient: {
          name: values.shippingName,
          address1: values.shippingAddress1,
          address2: values.shippingAddress2,
          town: values.shippingTown,
          county: values.shippingCounty,
          postcode: values.shippingPostcode,
        },
      };

      await requestShippingPrice(input);

      // checkoutPayment();
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
      onSubmit={(values) => (allowPayment ? submitOrder() : calculateShipping(values))}
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
