import React from "react";
import { Container, Row, Col, Figure, Accordion, Button, Card } from "react-bootstrap";

const Roadmap = () => {
  return (
    <section className="roadmap">
      <Container className="inner">
        <Row className="align-items-center">
          <Col lg={{ span: 6, order: 2 }} className="text-center">
            <Figure>
              <Figure.Image
                src="images/text-logo272196-P5IYZO-590@2x.png"
                fluid={false}
                className="roadmap-img"
              />
            </Figure>
          </Col>
          <Col lg={6} className="pr-60 pr-md-15">
            <h2 className="title">We&apos;ve broken down our roadmap for 2020 into 3 stages.</h2>

            <Accordion defaultActiveKey="0" className="simple">
              <Card>
                <Card.Header>
                  <h5 className="title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      Stage 1
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p>
                      Step 1 on our roadmap was to gain meaningful traction and create authority in
                      our space. Ukemi, therefore, began its life by developing products and
                      spectacles by and for the movement community. Notably, to date, we have
                      designed, built, programmed, managed and delivered Scotland’s largest ever
                      parkour event as well as brought in the new year with our site-specific show
                      SHINE by our in-house performance team.
                    </p>
                    <p>
                      We have also released the Ukemi card game, the world’s first parkour card game
                      - used by coaches worldwide in over 25 countries.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <h5 className="title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      Stage 2
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p>
                      Step 2 on our roadmap bridges the gap between making ourselves known and
                      designing activity landscapes that have an impact on cities across Scotland.
                      At Ukemi, we leave no stone unturned while pursuing our goals. We realise that
                      if we are to impact urban space, we would need to lay the foundation in
                      individuals legal right to the city.
                    </p>
                    <p>
                      With our Movement Card, we do just that. The Movement Card is a wallet-sized
                      guide providing information to individuals on their rights to the city.
                      Intended for urban sports enthusiasts, artists and activists primarily, it can
                      also be beneficial to anyone who has interactions with them, such as security
                      guards or the general public.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <h5 className="title">
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Stage 3
                    </Accordion.Toggle>
                  </h5>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p>
                      The ‘Movement Card’ will improve legislation. The Parkour History and Heritage
                      Project will add authority and legitimise the spaces. The ‘Greatest Park Never
                      Built’ project will document and collate the information into 3D assets. Then
                      Ukemi will enter stage 3 and create the most magnificent movement landscapes
                      ever seen, the most inclusive cities and fundamentally change the world we
                      live in forever.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Roadmap;
