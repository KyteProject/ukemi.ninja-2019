import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  GiJumpAcross,
  GiPublicSpeaker,
  GiTeacher,
  GiTeamIdea,
  GiHammerNails,
  GiAcrobatic,
} from "react-icons/gi";

const ServicesSlider = () => {
  return (
    <section className="services-overview">
      <Container className="inner text-center">
        <div className="block-title">
          <h2 className="block-title-text">Explore Our Services</h2>
        </div>
        <Row className="services-list">
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiTeamIdea size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Consultation</Link>
              </h3>
              <p className="mb-0">
                We can provide expert advice on any project focused on movement.
              </p>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiAcrobatic size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Performance</Link>
              </h3>
              <p className="mb-0">We have build our own performance team available for hire.</p>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiHammerNails size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Equipment</Link>
              </h3>
              <p className="mb-0">We build bespoke parkour and movement equipment.</p>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiPublicSpeaker size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Events</Link>
              </h3>
              <p className="mb-0">
                We have delivered presentations and managed large spectator events.
              </p>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiJumpAcross size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Park Design</Link>
              </h3>
              <p className="mb-0">
                We can design you the next generation of activity landscape or parkour park.
              </p>
            </Card>
          </Col>
          <Col sm={6} lg={4}>
            <Card className="service-item-box">
              <div className="box-header">
                <div className="icon">
                  <GiTeacher size={70} />
                </div>
              </div>
              <h3>
                <Link to="/services">Workshops</Link>
              </h3>
              <p className="mb-0">We can deliver movement workshops and provide parkour coaches.</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSlider;
