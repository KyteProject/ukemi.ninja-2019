import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <section className="landing">
        <Container className="landing-content">
          <Row className="justify-content-center">
            <Col sm={10} className="text-center">
              <h1 className="home-title text-white">Movement Inspired Design Specialists</h1>
              <p className="pt-4 home-sub-title text-white mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Button className="btn-white landing-btn">Visit Shop</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Landing;
