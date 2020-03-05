import React from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { string, bool, object } from "yup";

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
  serperateBilling: bool(),
  billingName: string().required(),
  billingAddress1: string().required(),
  billingAddress2: string(),
  billingTown: string().required(),
  billingCounty: string().required(),
  billingCountry: string().required(),
  billingPostcode: string().required(),
});

const CheckoutForm = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        // TODO submit logic
        console.log(`bleep cart`, values);
      }}
      initialValues={{
        shippingName: "",
        shippingAddress1: "",
        shippingAddress2: "",
        shippingTown: "",
        shippingCounty: "",
        shippingCountry: "",
        shippingPostcode: "",
      }}>
      {({ handleSubmit, values }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <ShippingForm />
          {values.serperateBilling && <BillingForm />}
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
