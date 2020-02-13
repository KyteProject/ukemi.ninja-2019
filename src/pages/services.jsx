import React from "react";
import { Container, Row, Col, Button, Figure, Image } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/TitleSection";
import InDevelopment from "../components/InDevelopment";
import LetsTalk from "../components/LetsTalk";
import FAQ from "../components/FAQ";

const services = ({ location }) => {
  return (
    <MainLayout>
      <MetaData title="Services" location={location} />
      <TitleSection location={location} crumbLabel="Services" />

      <Container className="inner">
        <h2 className="title text-center">Our Services</h2>
        <h3 className="subtitle text-center">
          Vestibulum cursus felis sed massa tempus rutrum.
          <br className="d-none d-lg-block" />
          Aenean rutrum elit non quam pharetra blandit.
        </h3>

        <Row>
          <Col>
            <Figure>
              <Figure.Image src="/images/teamwork1@2x.png" alt="Four people making puzzle" />
            </Figure>
          </Col>
        </Row>
      </Container>
      <FAQ />
      <LetsTalk />
    </MainLayout>
  );
};

export default services;
