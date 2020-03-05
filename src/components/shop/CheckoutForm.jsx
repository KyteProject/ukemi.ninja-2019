import React from "react";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { string, bool, object } from "yup";

import ShippingForm from "./ShippingForm";
import BillingForm from "./BillingForm";

const schema = object({
  name: string().required(),
  shippingAddress1: string().required(),
  shippingAddress2: string(),
  shippingAddress3: string(),
  shippingTown: string().required(),
  shippingCounty: string().required(),
  shippingCountry: string().required(),
  shippingPostcode: string().required(),
  serperateBilling: bool(),
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
        name: "",
        shippingAddress1: "",
        shippingAddress2: "",
        shippingAddress3: "",
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
