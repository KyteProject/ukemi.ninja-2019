import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import CTASocials from "./CTASocials";
import CTAEmail from "./CTAEmail";

const About = () => {
  return (
    <>
      <section className="about-section">
        <Container className="inner">
          <Row>
            <Col md={6} className="pt-2">
              <h1 className="title">
                we are <strong>UKEMI</strong>.
              </h1>
              <p className="about-text">
                Ukemi promote activity in highly urbanised areas and encourage a healthier society
                through digital design, product creation, and community arts development.
              </p>

              <p className="about-text">
                We create experiences in response to, and in collaboration with, communities in
                order to reclaim the city for free and open activity. Our aim is to tackle health
                and safety culture, to encourage play, and to demystify movement and make it more
                accessible through our products and services.
              </p>

              <p className="about-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis et quas eius
                voluptatum, sint placeat atque soluta dolorum doloribus sequi illo quasi numquam
                quo, ipsam rerum animi harum laboriosam voluptate.
              </p>
            </Col>
            <Col lg md={6}>
              <Figure>
                <Figure.Image src="/images/group-jump2912194@2x.png" alt="Group jumping" />
              </Figure>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="story">
        <Container>
          <Row>
            <Col lg md={6}>
              <Figure>
                <Figure.Image src="/images/group-reading2868867@2x.png" alt="Group reading books" />
              </Figure>
            </Col>

            <Col lg md={6} className="mx-auto pl-5">
              <h2 className="title text-left">
                a lifelong <strong>TEAM</strong>.
              </h2>

              <span className="subtitle">Our Story</span>
              <p className="about-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto facilis nam maxime
                autem assumenda ea, recusandae vitae similique accusantium id nobis, voluptatibus
                architecto, quasi nostrum? Doloremque beatae sapiente alias sunt!
              </p>
              <p className="about-text pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis molestias
                odit nihil distinctio. Maxime in enim et odit animi, temporibus minus voluptates
                voluptas explicabo nulla nesciunt placeat sint sapiente?
              </p>

              <span className="subtitle">Together We Have:</span>
              <br className="d-none d-lg-block" />
              <Row className="bottom-text">
                <Col md={4}>
                  <div>
                    <span>46</span>
                    <p>Years of Parkour</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <span>18</span>
                    <p>Years of Friendship</p>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <span>12</span>
                    <p>Years of Coaching</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <CTASocials />
      <CTAEmail />
    </>
  );
};

export default About;
