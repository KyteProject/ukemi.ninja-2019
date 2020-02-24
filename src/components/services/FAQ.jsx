import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Button, Card, Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-grey"
          preserveAspectRatio="none"
          viewBox="0 0 1070 53.23">
          <path d="M0,11.23s114,42,335,22,272-44,416-28,319,37,319,37v11H0Z" />
        </svg>
      </div>

      <section className="faq bg-light">
        <Container className="inner">
          <h2>FAQ</h2>
          <h3>
            If you don't see an answer to your question,
            <br className="d-none d-lg-block" />
            you can send us an email from our contact form
          </h3>
          <Row>
            <Col lg={6}>
              <Accordion>
                <Card className="shadow">
                  <Card.Header>
                    <h5>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Where can I buy a copy of the Ukemi Card Game?
                      </Accordion.Toggle>
                    </h5>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      You can get a copy by visiting our <Link to="/shop">store</Link>. It's also
                      available on{" "}
                      <a
                        href="https://www.amazon.co.uk/Ukemi-Project-Card-Game/dp/B07N2Z8N7T"
                        rel="no-follow">
                        Amazon
                      </a>{" "}
                      and{" "}
                      <a href="https://www.etsy.com/uk/shop/UkemiProject" rel="no-follow">
                        Etsy
                      </a>
                      .
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      How can I collaborate with Ukemi?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      We are always on the lookout for new partners, clients, and collaborators.
                      Visit our <Link to="/contact">Contact</Link> page for details.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      How much does a custom piece of equipment or park cost?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Ukemi provides equipment and park solutions from design, to creation and
                      installation. The initial consultation is free. Just give us an email by
                      visiting the <Link to="/contact">Contact</Link> section and we will arrange a
                      call.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col lg={6}>
              <Accordion>
                <Card className="shadow">
                  <Card.Header>
                    <h5>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Where are you based?
                      </Accordion.Toggle>
                    </h5>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Our services extend worldwide but we are based in Scotland.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      I’d like to support Ukemi. How can I do this?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      The easiest way to support Ukemi is by following our social media and getting
                      in on the action. You can also join our Facebook community group by clicking
                      here.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      What are you doing for the community?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Ukemi have a variety of projects that benefit the community such as the
                      Movement Card and Greatest Park Never Built. You can get involved by visiting
                      the project pages or joining our Facebook community group by clicking here.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-default"
          preserveAspectRatio="none"
          viewBox="0 0 1070 44.03">
          <path d="M0,20S35-1,137,0C232.52,1,240,33,352,25c111.47-8,177-45.61,367-8,202,40,256-6,351-5V44H0Z" />
        </svg>
      </div>
    </>
  );
};

export default FAQ;
