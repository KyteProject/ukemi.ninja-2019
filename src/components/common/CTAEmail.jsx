import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GiPaperPlane, GiEnvelope, GiNewspaper } from "react-icons/gi";

const CTAEmail = () => {
  return (
    <>
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-grey"
          preserveAspectRatio="none"
          viewBox="0 0 1070 44.03">
          <path d="M0,20S35-1,137,0C232.52,1,240,33,352,25c111.47-8,177-45.61,367-8,202,40,256-6,351-5V44H0Z" />
        </svg>
      </div>
      <section className="cta-email text-center bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={7}>
              <Row>
                <div className="col-4">
                  <div className="subscribe-icon sub-icon-color">
                    <GiNewspaper size={60} />
                  </div>
                </div>
                <div className="col-4">
                  <div className="subscribe-icon sub-icon-color">
                    <GiEnvelope size={60} />
                  </div>
                </div>
                <div className="col-4">
                  <div className="sub-icon-color">
                    <GiPaperPlane size={60} />
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="text-center mt-4 mb-4">
                <h5 className="text-muted font-weight-normal">
                  Subscribe to our mailing list for new products, updates, and sales!
                </h5>
              </div>
              <div className="text-center subscribe-form mt-4">
                <Form>
                  <Form.Group as={Row} controlId="subscribeEmail">
                    <Form.Control type="email" placeholder="Your Email Address..." />
                    <Button size="lg" type="submit" className="cta-btn-blue">
                      Subscribe
                    </Button>
                  </Form.Group>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-default"
          preserveAspectRatio="none"
          viewBox="0 0 1070 44.03">
          <path d="M0,20S35-1,137,0C232.52,1,240,33,352,25c111.47-8,177-45.61,367-8,202,40,256-6,351-5V44H0Z" />
        </svg>
      </div>
    </>
  );
};

export default CTAEmail;
