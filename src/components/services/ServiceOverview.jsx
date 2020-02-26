import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
    <section className="section-services-slider">
      <Container className="inner text-center">
        <div className="block-title">
          <h2 className="block-title-text">Explore Our Services</h2>
        </div>
        <Row className="services-group">
          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon">
                    <GiTeamIdea size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Consultation</h3>
                  <p className="mb-0">
                    We can provide expert advice on any project focused on movement.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon icon-two">
                    <GiAcrobatic size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Performances</h3>
                  <p className="mb-0">We have build our own performance team available for hire.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon">
                    <GiHammerNails size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Equipment</h3>
                  <p className="mb-0">We build bespoke parkour and movement equipment.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon icon-two">
                    <GiPublicSpeaker size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Events & Presentations</h3>
                  <p className="mb-0">
                    We have delivered presentations and managed large spectator events.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon">
                    <GiJumpAcross size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Park Design</h3>
                  <p className="mb-0">
                    We can design you the next generation of activity landscape or parkour park.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} xl={4}>
            <div className="service-item">
              <div className="service-item-content">
                <div className="service-item-header">
                  <div className="icon icon-two">
                    <GiTeacher size={80} />
                  </div>
                </div>
                <div className="service-item-body">
                  <h3>Workshops</h3>
                  <p className="mb-0">
                    We can host and deliver movement workshops and provide parkour coaches for your
                    event.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSlider;
