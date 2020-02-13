import React from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";

const LetsTalk = () => {
  return (
    <>
      <section className="lets-talk">
        <Container className="inner">
          <Row className="align-items-center">
            <Col lg={6}>
              <Figure>
                <Figure.Image
                  src="#"
                  srcSet="/images/concept2.png 1x, /images/concept2@2x.png 2x"
                  alt="Men shaking hands"
                />
              </Figure>
            </Col>
            <Col lg={6} className="lets-talk-text">
              <h2 className="lets-talk-title">Let's Talk</h2>
              <h3 className="">
                Let's make something great together. If you got any questions, don't hesitate to get
                in touch with us.
              </h3>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget
                urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia
                bibendum nulla sed consectetur.
              </p>
              <Button as="a" className="cta-btn-blue" href="#">
                Get Started
              </Button>{" "}
              <Button as="a" href="#" className="cta-btn-pink">
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LetsTalk;
