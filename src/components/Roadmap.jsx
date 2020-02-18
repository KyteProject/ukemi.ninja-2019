import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Container, Row, Col } from "react-bootstrap";

const Roadmap = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "steps/1.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      two: file(relativePath: { eq: "steps/2.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      three: file(relativePath: { eq: "steps/3.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      four: file(relativePath: { eq: "steps/4.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `);

  return (
    <section className="roadmap">
      <Container className="inner">
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
                <Img fixed={data.one.childImageSharp.fixed} alt="Stage one" />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-taken v1">
                <h5 className="steps-title">
                  Step 1: <span>Get Plan</span>
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
                  Step 2: <span>Development</span>
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
                <Img fixed={data.two.childImageSharp.fixed} alt="Stage two" />
              </div>
            </Col>
          </Row>
          <div className="flat-divider" />
          <Row>
            <Col md={{ span: 4, offset: 1 }}>
              <div className="steps-img left-img">
                <Img fixed={data.three.childImageSharp.fixed} alt="Stage three" />
              </div>
            </Col>
            <Col md={{ span: 4, offset: 2 }}>
              <div className="steps-taken">
                <h5 className="steps-title">
                  Step 3: <span>Test</span>
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
                  Step 4: <span>Launch</span>
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
                <Img fixed={data.four.childImageSharp.fixed} alt="Stage four" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Roadmap;
