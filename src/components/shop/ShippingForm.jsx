import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { string, object } from "yup";

const schema = object({
  name: string().required(),
  shippingAddress1: string().required(),
  shippingAddress2: string(),
  shippingAddress3: string(),
  shippingTown: string().required(),
  shippingCounty: string().required(),
  shippingCountry: string().required(),
  shippingPostcode: string().required(),
});

const ShippingForm = () => {
  const data = useStaticQuery(
    graphql`
      query Countries {
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

  const countries = data.allRestCountries.edges;

  return (
    <>
      <h3>Shipping</h3>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          // TODO: Calculate shipping function
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
        {({ handleSubmit, handleChange, values, errors, touched, isValid }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={touched.name && !!errors.name}
                placeholder="Recipient Name *"
              />
              <Form.Control.Feedback type="valid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="shippingAddress1"
                value={values.shippingAddress1}
                onChange={handleChange}
                isInvalid={!!errors.shippingAddress1}
                placeholder="Address Line 1 *"
              />
              <Form.Control.Feedback type="invalid">
                {errors.shippingAddress1}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="shippingAddress2"
                value={values.shippingAddress2}
                onChange={handleChange}
                isInvalid={!!errors.shippingAddress2}
                placeholder="Address Line 2"
              />
              <Form.Control.Feedback type="invalid">
                {errors.shippingAddress2}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="shippingAddress3"
                value={values.shippingAddress3}
                onChange={handleChange}
                isInvalid={!!errors.shippingAddress3}
                placeholder="Address Line 3"
              />
              <Form.Control.Feedback type="invalid">
                {errors.shippingAddress3}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="shippingTown"
                value={values.shippingTown}
                onChange={handleChange}
                isInvalid={!!errors.shippingTown}
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
                placeholder="County *"
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
                placeholder="Postcode *"
              />
              <Form.Control.Feedback type="invalid">
                {errors.shippingPostcode}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ShippingForm;
