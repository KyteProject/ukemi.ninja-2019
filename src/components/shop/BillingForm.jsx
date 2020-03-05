import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Form } from "react-bootstrap";
import { useFormikContext } from "formik";

import CheckoutContext from "../../context/Checkout";

const BillingForm = () => {
  const data = useStaticQuery(
    graphql`
      query BillingCountries {
        allRestCountries {
          edges {
            node {
              alpha2Code
              name
            }
          }
        }
      }
    `
  );

  const { handleChange, values, errors, touched } = useFormikContext();
  const { allowPayment, processing: checkoutProcessing } = useContext(CheckoutContext);
  const countries = data.allRestCountries.edges;

  const disableInput = allowPayment || checkoutProcessing;

  return (
    <div className="pt-4">
      <h3>Billing Address</h3>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingName"
          value={values.billingName}
          onChange={handleChange}
          isInvalid={touched.billingName && !!errors.billingName}
          disabled={disableInput}
          placeholder="Recipient Name *"
        />
        <Form.Control.Feedback type="valid">{errors.billingName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingAddress1"
          value={values.billingAddress1}
          onChange={handleChange}
          isInvalid={!!errors.billingAddress1}
          disabled={disableInput}
          placeholder="Address Line 1 *"
        />
        <Form.Control.Feedback type="invalid">{errors.billingAddress1}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingAddress2"
          value={values.billingAddress2}
          onChange={handleChange}
          isInvalid={!!errors.billingAddress2}
          disabled={disableInput}
          placeholder="Address Line 2"
        />
        <Form.Control.Feedback type="invalid">{errors.billingAddress2}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingTown"
          value={values.billingTown}
          onChange={handleChange}
          isInvalid={!!errors.billingTown}
          disabled={disableInput}
          placeholder="Town *"
        />
        <Form.Control.Feedback type="invalid">{errors.billingTown}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingCounty"
          value={values.billingCounty}
          onChange={handleChange}
          isInvalid={!!errors.billingCounty}
          disabled={disableInput}
          placeholder="County/State *"
        />
        <Form.Control.Feedback type="invalid">{errors.billingCounty}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="select"
          name="billingCountry"
          value={values.billingCountry}
          onChange={handleChange}
          isInvalid={!!errors.billingCountry}
          disabled={disableInput}
          placeholder="Country *"
          as="select">
          {countries.map((country) => (
            <option key={country.node.alpha2Code}>{country.node.name}</option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">{errors.billingCountry}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="billingPostcode"
          value={values.billingPostcode}
          onChange={handleChange}
          isInvalid={!!errors.billingPostcode}
          disabled={disableInput}
          placeholder="Postcode/ZIP *"
        />
        <Form.Control.Feedback type="invalid">{errors.billingPostcode}</Form.Control.Feedback>
      </Form.Group>
    </div>
  );
};

export default BillingForm;
