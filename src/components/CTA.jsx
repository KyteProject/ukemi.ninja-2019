import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CTA = () => {
  return (
    <>
      <section className="cta">
        <Container>
          <Row>
            <Col md={12}>
              <div className="cta-text text-center">
                <span>Get started</span>

                <h2 className="title text-white">
                  A bold statement in design <br />
                  or something here.
                </h2>

                <Button className="btn-white">Ask us a Question</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CTA;
