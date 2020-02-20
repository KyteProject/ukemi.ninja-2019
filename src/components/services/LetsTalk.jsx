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
              <h2 className="lets-talk-title">Let&apos;s Talk</h2>
              <h3 className="">
                Let&apos;s make something great together. If you have any questions, don&apos;t
                hesitate to get in touch!
              </h3>
              <p>
                At Ukemi we lead some great community projects that are by the Parkour community and
                for the Parkour community. These are free at the point of access and you can learn
                more on our projects page.
              </p>
              <Button as="a" className="cta-btn-blue" href="/contact">
                Contact Us
              </Button>{" "}
              <Button as="a" href="/projects" className="cta-btn-pink">
                View Our Projects
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LetsTalk;
