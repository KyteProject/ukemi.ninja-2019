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
    <>
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-dark"
          preserveAspectRatio="none"
          viewBox="0 0 1070 44.03">
          <path d="M0,20S35-1,137,0C232.52,1,240,33,352,25c111.47-8,177-45.61,367-8,202,40,256-6,351-5V44H0Z" />
        </svg>
      </div>
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
      <div className="divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-dark-r"
          preserveAspectRatio="none"
          viewBox="0 0 1070 44.03">
          <path d="M0,20S35-1,137,0C232.52,1,240,33,352,25c111.47-8,177-45.61,367-8,202,40,256-6,351-5V44H0Z" />
        </svg>
      </div>
    </>
  );
};

export default CTASocials;
