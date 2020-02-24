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

            <Col lg={6} className="service-body">
              <h3 className="title">We design next generation activity landscapes</h3>
              <p>
                We change the image of <i>&apos;play parks&apos;</i> and urban spaces and redefine
                them for all ages. Our main goal is to generate activity landscapes that have a
                meaningful purpose for everyone who steps in them.
              </p>
              <p>
                Using an innovative and bespoke design, we create environments full of opportunities
                for play rather than prescribe specific movements or actions. Our models become
                liminal spaces in which different disciplines and activities co-exist - this fuels
                imagination and encourage discoveries from the users.
              </p>
              <p>
                First, we bring together the best aspects of accessible play spaces such as parkour
                parks, callisthenics arenas, and play spaces. We then unite them with an aesthetic
                inspired by sculptures and art that have transcended their primary function, into
                multifunctional spaces.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center service-row">
            <Col lg={6} className="order-lg-2">
              <Figure>
                <Figure.Image src="/images/service32907492@2x.png" alt="" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body-r">
              <h3 className="title">Events and Performance</h3>
              <p>
                Our team works across a breadth of performance types to put on unique
                parkour-centric spectacles and events for the public. Our service includes
                management, project delivery, and providing coaches and performers - Ukemi delivers
                the full package for your event.
              </p>
              <p>
                Notably, we programmed, managed, and delivered Scotland&apos;s largest parkour
                event, as well as produced our show &quot;SHINE&quot; performed by our in-house
                performance team.
              </p>
              <p>
                Understanding your options when managing a parkour event can have benefits for both
                you and the community. In recent years parkour has grown massively and will continue
                to do so. Whether you regard it as a sport, an art form, lifestyle, philosophy, or
                all of those above, we have benefited as a community by finding more than one way to
                share it.
              </p>
            </Col>
          </Row>

          <Row className="align-items-center service-row">
            <Col lg={6}>
              <Figure>
                <Figure.Image src="/images/service2@2x.png" alt="" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body">
              <h3 className="title">Workshops and Seminars</h3>
              <p>
                Ukemi&apos;s unique take on urban design, movement methodology and product
                development have touched the international community at events such as the UK
                Outdoor Arts Summit, Art of Retreat and Coach Europe.
              </p>
              <p>
                Our practice and implementation of looking at the limen between different methods,
                styles, and disciplines is a revolutionary approach to creating a healthier society.{" "}
                <b>
                  We offer both on-stage presentations and hands-on workshops to suit the clients
                  the needs.
                </b>
              </p>
              <p>
                <i>
                  These workshops and seminars are best suited to movement and design communities.
                  Enquire for more details.
                </i>
              </p>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col lg={6} className="order-lg-2">
              <Figure>
                <Figure.Image src="/images/service1@2x.png" alt="" />
              </Figure>
            </Col>

            <div className="space40 d-lg-none" />

            <Col lg={6} className="service-body-r">
              <h3 className="title">Equipment and Games</h3>
              <p>
                Our store offers a range of traditional parkour equipment for purchase but also acts
                as a costing guideline for unique pieces. Ukemi&apos;s essential service is
                providing bespoke equipment which has a variety of contexts such as theatre, gyms
                and sports events.
              </p>
              <p>
                Ukemi responds to classical play objects such as cards and gamifies them using a
                variety of movement disciplines. Our flagship product is the Ukemi card game. Ukemi
                is the world&apos;s first parkour and freerunning card game – made by traceurs for
                traceurs.
              </p>

              <p>
                The game celebrates going out of your comfort zone and creating new movements - it
                is the perfect training tool for movement practitioners! It has a variety of play
                styles such as group games, coaching, warm-ups, and generating choreography.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ServiceDetails;
