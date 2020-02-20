import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

const AboutDetails = () => {
  return (
    <>
      <section className="about-details">
        <Container className="inner">
          <Row className="align-items-center service-row">
            <Col lg={6}>
              <h1 className="title">
                we are <strong>UKEMI</strong>.
              </h1>
              <p className="about-text">
                Ukemi promotes activity in highly urbanised areas and encourages a healthier society
                through digital design, product creation, and community arts development.
              </p>
              <p className="about-text">
                Each founder has practised Parkour for over a decade and this is the lens in which
                we see the world and project our ideas onto. We create experiences in response to
                and in collaboration with communities to reclaim the city for free and open
                activity.
              </p>
              <p className="about-text">
                Our aim is to tackle health and safety culture to encourage play and demystify
                fitness and movement to make it more accessible through our products and services.
              </p>
            </Col>
            <Col lg={6} className="service-body-r">
              <Figure>
                <Figure.Image src="/images/group-jump2912194@2x.png" alt="Group jumping" />
              </Figure>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6}>
              <Figure>
                <Figure.Image src="/images/group-reading2868867@2x.png" alt="Group reading books" />
              </Figure>
            </Col>
            <Col lg={6} className="service-body">
              <h2 className="title text-left">
                a lifelong <strong>TEAM</strong>.
              </h2>
              <p className="about-text">
                We met in 2006 as early adopters of the parkour discipline. We experienced the
                growth of the Scottish scene together and everything that came with it - travelling,
                running classes, putting on national events, creating web resources and performing.
              </p>
              <p className="about-text">
                No longer content to simply see the city differently we now want to change it into
                something better. ⁣⁣After over 15 years years of training and growing up together we
                pulled together our skill sets and began applying our traceur vision beyond the
                practice itself.
              </p>

              <p className="about-text">⁣⁣Here’s to the future of cities, movement and play.⁣</p>

              <span className="subtitle">Together We Have:</span>
              <Row className="counter">
                <Col md={4} className="text-center">
                  <h3>46</h3>
                  <p>Years of Combined Parkour</p>
                </Col>
                <Col md={4} className="text-center">
                  <h3>18</h3>
                  <p>Years of Friendship</p>
                </Col>
                <Col md={4} className="text-center">
                  <h3>16</h3>
                  <p>Years of Combined Coaching</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutDetails;
