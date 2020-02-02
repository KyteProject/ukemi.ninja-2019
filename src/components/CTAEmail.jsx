import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { GiPaperPlane, GiEnvelope, GiNewspaper } from "react-icons/gi";

const CTAEmail = () => {
  return (
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
            <div className="text-center mt-5 mb-4">
              <h6 className="text-muted font-weight-normal">
                Subscribe To Our Newsletter For New Content,{" "}
                <span className="d-block mt-2">Updates And Giveaways!</span>
              </h6>
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
  );
};

export default CTAEmail;
