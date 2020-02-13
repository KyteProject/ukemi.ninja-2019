import React from "react";
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
                        Can I Do Something?
                      </Accordion.Toggle>
                    </h5>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      What is the something of something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Can I Do Something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      What is the something of something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
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
                        Can I Do Something?
                      </Accordion.Toggle>
                    </h5>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                      What is the something of something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                      Can I Do Something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className="shadow">
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                      What is the something of something?
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                      fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet
                      fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis.
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
