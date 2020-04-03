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
                <Link to="/" className="breadcrumb-item">
                  Home
                </Link>
                {sub && (
                  <Link to={`/${sub.slug}`} className="breadcrumb-item">
                    {sub.label}
                  </Link>
                )}
                <Breadcrumb.Item active>{crumbLabel}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TitleSection;
