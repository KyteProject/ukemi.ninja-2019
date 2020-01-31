import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

const CTASocials = () => {
  return (
    <section className="cta-socials text-center">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }} className="text-center">
            <div className="block-title">
              <h2 className="block-title-text cta-socials-title">Follow Us</h2>
            </div>
            <ul className="cta-social-icons">
              <li>
                <a className="facebook" href="#">
                  <AiOutlineFacebook size={42} />
                </a>
              </li>
              <li>
                <a className="github" href="#">
                  <AiOutlineGithub size={42} />
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <AiOutlineInstagram size={42} />
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <AiOutlineLinkedin size={42} />
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <AiOutlineTwitter size={42} />
                </a>
              </li>
              <li>
                <a className="youtube" href="#">
                  <AiOutlineYoutube size={42} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CTASocials;
