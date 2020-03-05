import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Form, Button } from "react-bootstrap";
import { useFormikContext } from "formik";

import LoadingSVG from "../../svg/loading.svg";
import CheckoutContext from "../../context/Checkout";

const ShippingForm = () => {
  const data = useStaticQuery(
    graphql`
      query ShippingCountries {
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
    <>
      <h3>Shipping Address</h3>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingName"
          value={values.shippingName}
          onChange={handleChange}
          isInvalid={touched.shippingName && !!errors.shippingName}
          disabled={disableInput}
          placeholder="Recipient Name *"
        />
        <Form.Control.Feedback type="valid">{errors.shippingName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingAddress1"
          value={values.shippingAddress1}
          onChange={handleChange}
          isInvalid={!!errors.shippingAddress1}
          disabled={disableInput}
          placeholder="Address Line 1 *"
        />
        <Form.Control.Feedback type="invalid">{errors.shippingAddress1}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingAddress2"
          value={values.shippingAddress2}
          onChange={handleChange}
          isInvalid={!!errors.shippingAddress2}
          disabled={disableInput}
          placeholder="Address Line 2"
        />
        <Form.Control.Feedback type="invalid">{errors.shippingAddress2}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingTown"
          value={values.shippingTown}
          onChange={handleChange}
          isInvalid={!!errors.shippingTown}
          disabled={disableInput}
          placeholder="Town *"
        />
        <Form.Control.Feedback type="invalid">{errors.shippingTown}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingCounty"
          value={values.shippingCounty}
          onChange={handleChange}
          isInvalid={!!errors.shippingCounty}
          disabled={disableInput}
          placeholder="County/State *"
        />
        <Form.Control.Feedback type="invalid">{errors.shippingCounty}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="select"
          name="shippingCountry"
          value={values.shippingCountry}
          onChange={handleChange}
          isInvalid={!!errors.shippingCountry}
          disabled={disableInput}
          placeholder="Country *"
          as="select">
          {countries.map((country) => (
            <option key={country.node.alpha2Code}>{country.node.name}</option>
          ))}
        </Form.Control>
        <Form.Control.Feedback type="invalid">{errors.shippingCountry}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="shippingPostcode"
          value={values.shippingPostcode}
          onChange={handleChange}
          isInvalid={!!errors.shippingPostcode}
          disabled={disableInput}
          placeholder="Postcode/ZIP *"
        />
        <Form.Control.Feedback type="invalid">{errors.shippingPostcode}</Form.Control.Feedback>
      </Form.Group>

      {!allowPayment && (
        <>
          <Form.Group>
            <Form.Check
              type="checkbox"
              name="separateBilling"
              disabled={disableInput}
              onChange={handleChange}
              label="Use different billing address?"
            />
          </Form.Group>

          <Button type="submit" disabled={disableInput}>
            {checkoutProcessing ? <LoadingSVG /> : "Calculate shipping"}
          </Button>
        </>
      )}
    </>
  );
};

export default ShippingForm;
