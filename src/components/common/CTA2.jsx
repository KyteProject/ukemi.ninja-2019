import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiThreeFriends, GiConqueror } from "react-icons/gi";

const CTA2 = () => {
  return (
    <section className="cta-two">
      <Container fluid>
        <Row className="cta-group">
          <Col lg={6} className="cta-bg-pink">
            <div className="cta-two-single">
              <div className="cta-two-icon">
                <span>
                  <GiThreeFriends size={100} />
                </span>
              </div>
              <div className="cta-two-content">
                <h2 className="cta-two-title">Collaborate With Us</h2>
                <Button href="/contact" className="thm-btn btn-dark cta-two-button">
                  Contact Us
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6} className="cta-bg-blue">
            <div className="cta-two-single">
              <div className="cta-two-icon cta-two-icon-2">
                <span>
                  <GiConqueror size={100} />
                </span>
              </div>
              <div className="cta-two-content">
                <h2 className="cta-two-title">Join Our Community</h2>
                <Button as="a" href="/contact" className="thm-btn btn-dark cta-two-button">
                  Get Involved
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTA2;
