import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import LetsTalk from "../components/services/LetsTalk";
import FAQ from "../components/services/FAQ";
import Brands from "../components/services/Brands";
import ServiceDetails from "../components/services/ServiceDetails";

const services = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Services" location={location} />
      <TitleSection location={location} crumbLabel="Services" />
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
            <p className="mb-15">
              Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam.
            </p>
          </Col>
          <Col md={4}>
            <h5>Product Creation</h5>
            <p className="mb-15">
              Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam.
            </p>
          </Col>
          <Col md={4}>
            <h5>Community Arts Development</h5>
            <p className="mb-15">
              Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam.
            </p>
          </Col>
        </Row>
      </Container>
      <ServiceDetails />
      <Brands />
      <FAQ />
      <LetsTalk />
    </MainLayout>
  );
};

export default services;
