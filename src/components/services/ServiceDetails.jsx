import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

const ServiceDetails = () => {
  return (
    <>
      <section className="service-details">
        <Container className="inner pt-0">
          <Row className="align-items-center service-row">
            <Col lg={6}>
              <Figure>
                <Figure.Image src="/images/service3@2x.png" alt="service 1" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body">
              <h3 className="title">We design next generation activity landscapes</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet. Duis mollis, est non commodo.
              </p>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </Col>
          </Row>

          <div className="space140" />

          <Row className="align-items-center service-row">
            <Col lg={6} className="order-lg-2">
              <Figure>
                <Figure.Image src="/images/service2@2x.png" alt="" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body-r">
              <h3 className="title">We bring solutions to make life easier for our customers</h3>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio.
              </p>
              <p>
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id
                elit. Aenean lacinia bibendum nulla sed consectetur.
              </p>
            </Col>
          </Row>

          <div className="space140" />

          <Row className="align-items-center">
            <Col lg={6}>
              <Figure>
                <Figure.Image src="/images/service1@2x.png" alt="" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body">
              <h3 className="title">Work with us to reclaim the city for movement</h3>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Cras justo odio, dapibus ac facilisis in egestas.
              </p>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis
                consectetur purus sit amet. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et nascetur ridiculus.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetails;
