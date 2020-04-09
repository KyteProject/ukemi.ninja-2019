import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";

import config from "../../../data/siteConfig";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query AllFooterProjectsQuery {
        products: allMarkdownRemark(
          sort: { fields: frontmatter___name, order: ASC }
          limit: 5
          filter: { fileAbsolutePath: { regex: "/(/content/products)/.*\\\\.md$/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                slug
              }
            }
          }
        }
        projects: allMarkdownRemark(
          sort: { fields: frontmatter___name, order: ASC }
          limit: 5
          filter: { fileAbsolutePath: { regex: "/(/content/projects)/.*\\\\.md$/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                name
                slug
              }
            }
          }
        }
      }
    `
  );

  const projects = data.projects.edges;
  const products = data.products.edges;
  const { copyright, userLinks } = config;

  return (
    <footer className="footer">
      <Container className="inner">
        <Row>
          <Col sm={{ span: 3, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 3, order: 1 }}>
            <div className="widget">
              <Image
                src="/logos/kanji-text-white2.svg"
                alt="Ukemi Project logo"
                className="footer-logo"
              />
            </div>
          </Col>

          <Col className="col-6" md={3} lg={{ span: 2, offset: 1, order: 2 }}>
            <div className="widget">
              <h5 className="footer-title">Explore</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="footer-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="footer-link">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="footer-link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className="col-6" md={3} lg={{ span: 2, order: 3 }}>
            <div className="widget">
              <h5 className="footer-title">Projects</h5>
              <ul className="list-unstyled mb-0">
                {projects.length >= 1
                  ? /* prettier-ignore */
                    projects.map(({ node }) => (
                      <li key={node.id}>
                        <Link
                          to={`/projects/${node.frontmatter.slug}`}
                          className="footer-link">
                          {node.frontmatter.name}
                        </Link>
                      </li>
                  ))
                  : null}
              </ul>
            </div>
          </Col>

          <Col className="col-6" md={3} lg={{ span: 2, order: 4 }}>
            <div className="widget">
              <h5 className="footer-title">Shop</h5>
              <ul className="list-unstyled mb-0">
                {products.length >= 1
                  ? /* prettier-ignore */
                    products.map(({ node }) => (
                      <li key={node.id}>
                        <Link
                          to={`/shop/${node.frontmatter.slug}`}
                          className="footer-link">
                          {node.frontmatter.name}
                        </Link>
                      </li>
                  ))
                  : null}
              </ul>
            </div>
          </Col>

          <Col className="col-6" md={3} lg={{ span: 2, order: 5 }}>
            <div className="widget">
              <h5 className="footer-title">Follow</h5>
              <ul className="list-unstyled mb-0">
                {userLinks.length > 0
                  ? /* prettier-ignore */
                    userLinks.map(( item ) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link">
                          {item.label}
                        </a>
                      </li>
                  ))
                  : null}
              </ul>
            </div>
          </Col>

          <Col sm={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }} lg={{ span: 12, order: 6 }}>
            <p className="footer-slogan text-darg-bg">
              <span className="text-white">受け身</span>
              <br />
              Movement inspired design specialists.
            </p>
            <small className="footer-legal">{copyright}</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
