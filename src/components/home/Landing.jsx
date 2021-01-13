import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button } from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <section
        className="landing image-wrapper bg-image page-title-wrapper inverse-text"
        data-img-src="/images/bg27.jpg">
        <Container className="inner text-center">
          <Row className="justify-content-center landing-content">
            <Col sm={10} className="text-center">
              <h1 className="home-title text-white">Learn • Play • Create</h1>
              <h3 className="home-sub-title">Specialists in Movement Inspired Design</h3>
              <p className="home-text text-white mx-auto">
                We create products, design activity landscapes and pursue community arts.
              </p>
              <Button as={Link} to="/shop" className="btn-white landing-btn">
                Visit Our Shop
              </Button>
            </Col>
          </Row>
        </Container>
        <div className="divider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-white"
            preserveAspectRatio="none"
            viewBox="0 0 1070 20.98">
            <path d="M0,0V21H1070V0A6830.24,6830.24,0,0,1,0,0Z" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Landing;
