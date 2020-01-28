import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <Container>
        <Row>
          <Col md={12}>
            <div className="block-title">
              <h2 className="block-title-text roadmap-title">Our 2020 Roadmap</h2>
              <div className="desc">
                <p>
                  Vestibulum cursus felis sed massa tempus rutrum. Aenean rutrum elit non quam
                  pharetra blandit. Aliquam
                  <br />
                  fringilla arcu magna, ut ultrices eros pharetra non. Sed at sapien vel nisi
                  blandit molestie.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <div className="flat-divider" />
        <div className="flat-steps-taken">
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <div className="steps-img left-img">
                <img src="images/steps/1.png" alt="image" />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-taken v1">
                <h5 className="steps-title">
                  Step 1 : <span>Get Plan</span>
                </h5>
                <p className="steps-content">
                  Proin et ipsum non neque interdum luctus a eu risus. Cras dolor justo, congue vel
                  massa in, eleifend dapibus elit. Vivamus in tincidunt justo, in auctor odio.
                  Vivamus a ullamcorper enim, et gravida nibh
                </p>
              </div>
            </Col>
          </Row>
          <div className="flat-divider" />
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <div className="steps-taken">
                <h5 className="steps-title">
                  Step 2 : <span>Development</span>
                </h5>
                <p className="steps-content">
                  Proin et ipsum non neque interdum luctus a eu risus. Cras dolor justo, congue vel
                  massa in, eleifend dapibus elit. Vivamus in tincidunt justo, in auctor odio.
                  Vivamus a ullamcorper enim, et gravida nibh
                </p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-img right-img">
                <img src="images/steps/2.png" alt="image" />
              </div>
            </Col>
          </Row>
          <div className="flat-divider" />
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <div className="steps-img left-img">
                <img src="images/steps/3.png" alt="image" />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-taken">
                <h5 className="steps-title">
                  Step 3 : <span>Test</span>
                </h5>
                <p className="steps-content">
                  Proin et ipsum non neque interdum luctus a eu risus. Cras dolor justo, congue vel
                  massa in, eleifend dapibus elit. Vivamus in tincidunt justo, in auctor odio.
                  Vivamus a ullamcorper enim, et gravida nibh
                </p>
              </div>
            </Col>
          </Row>
          <div className="flat-divider" />
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <div className="steps-taken v2">
                <h5 className="steps-title">
                  Step 4 : <span>Launch</span>
                </h5>
                <p className="steps-content">
                  Proin et ipsum non neque interdum luctus a eu risus. Cras dolor justo, congue vel
                  massa in, eleifend dapibus elit. Vivamus in tincidunt justo, in auctor odio.
                  Vivamus a ullamcorper enim, et gravida nibh
                </p>
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-img right-img">
                <img src="images/steps/4.png" alt="image" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
