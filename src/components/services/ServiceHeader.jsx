import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

const ServiceHeader = () => {
  return (
    <Container className="inner">
      <h2 className="title text-center">Our Services</h2>
      <h3 className="subtitle text-center">
        Our aim is to tackle health and safety culture,
        <br className="d-none d-lg-block" />
        to encourage play, and demystify fitness and movement.
      </h3>

      <Row>
        <Col lg={{ span: 10, offset: 1 }}>
          <Figure>
            <Figure.Image
              src="/images/teamwork1@2x.png"
              alt="Four people making puzzle"
              className="service-image"
            />
          </Figure>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={4}>
          <h5>Digital Design</h5>
          <p className="mb-15">Experts in digital design, we turn ideas into something visual.</p>
        </Col>
        <Col md={4}>
          <h5>Product Creation</h5>
          <p className="mb-15">We create physical products to enrich the lives of all movers!</p>
        </Col>
        <Col md={4}>
          <h5>Community Arts Development</h5>
          <p className="mb-15">
            We engage with local communities to bring movement to economically challenged areas.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceHeader;
