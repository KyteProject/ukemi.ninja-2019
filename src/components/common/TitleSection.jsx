import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";

const TitleSection = ({ sub, crumbLabel }) => {
  return (
    <section className="section-title">
      <Container>
        <Row>
          <Col lg="12">
            <div>
              <Breadcrumb>
                <li>
                  <Link to="/" className="" aria-label="Home">
                    Home
                  </Link>
                </li>
                {sub && (
                  <li>
                    <span className="crumb-seperator">/</span>
                    <Link to={`/${sub.slug}`} className="" aria-label={sub.label}>
                      {sub.label}
                    </Link>
                  </li>
                )}
                <Breadcrumb.Item active>
                  <span className="crumb-seperator">/</span>
                  {crumbLabel}
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TitleSection;
