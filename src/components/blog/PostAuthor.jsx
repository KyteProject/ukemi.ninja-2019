import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";

const PostAuthor = ({ data }) => {
  return (
    <>
      <Container className="inner post-author">
        <Row>
          <Col md={4}>
            <Figure>
              <Figure.Image rounded src={data.profile_image} alt={data.name} />
            </Figure>
          </Col>
          <Col md={8}>
            <h4>About the Author</h4>
            <h5>{data.name}</h5>
            <p className="mb-10"> {data.bio}</p>
            <ul className="social social-color social-s">
              <li>
                <a href={`https://facebook.com/${data.facebook}`}>
                  <AiOutlineFacebook size={32} className="s-facebook" />
                </a>
              </li>
              <li>
                <a href={data.website}>
                  <AiOutlineInstagram size={32} className="s-instagram" />
                </a>
              </li>
              <li>
                <a href="mailto:hello@ukemi.ninja">
                  <AiOutlineMail size={32} className="s-email" />
                </a>
              </li>
              <li>
                <a href="https://ukemi.ninja">
                  <GoGlobe size={32} className="s-website" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostAuthor;
