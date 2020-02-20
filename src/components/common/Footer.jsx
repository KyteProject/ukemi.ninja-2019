import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Nav, Container } from "react-bootstrap";

import config from "../../../data/siteConfig";

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query AllFooterProjectsQuery {
        allMarkdownRemark(sort: { fields: frontmatter___name, order: ASC }) {
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

  const projects = data.allMarkdownRemark.edges;
  const { copyright, userLinks } = config;

  return (
    <footer className="footer">
      <Container>
        <Nav className="footer-nav">
          <div className="footer-col footer-col-intro">
            <a className="footer-logo" href="/" data-footer-link="1">
              <img src="/logos/kanji-text-white2.svg" alt="Ukemi Project text logo" />
            </a>
            <p className="footer-slogan">
              <span className="text-white">受け身</span>
              <br />
              Movement inspired design specialists.
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-col-wrap">
              <h6 className="footer-col-title">Explore</h6>
              <div className="footer-nav-list">
                <a href="/" className="footer-link" data-footer-link="1">
                  Home
                </a>
                <a href="/about" className="footer-link" data-footer-link="2">
                  About
                </a>
                <a href="/services" className="footer-link" data-footer-link="3">
                  Services
                </a>
                <a href="/shop" className="footer-link" data-footer-link="4">
                  Shop
                </a>
                <a href="/blog" className="footer-link" data-footer-link="5">
                  Blog
                </a>
                <a href="/contact" className="footer-link" data-footer-link="6">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-wrap">
              <h6 className="footer-col-title">Projects</h6>
              <div className="footer-nav-list">
                {projects.length >= 1
                  ? /* prettier-ignore */
                    projects.map(({ node }) => (
                      <Link
                        key={node.id}
                        to={`/projects/${node.frontmatter.slug}`}
                        className="footer-link">
                        {node.frontmatter.name}
                      </Link>
                  ))
                  : null}
              </div>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-wrap">
              <h6 className="footer-col-title">Follow</h6>
              {userLinks.length > 0
                ? /* prettier-ignore */
                  userLinks.map(( item ) => (
                    <a
                      key={item.label}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link">
                      {item.label}
                    </a>
                  ))
                : null}
            </div>
          </div>

          <small className="footer-legal">{copyright}</small>
        </Nav>
      </Container>
    </footer>
  );
};

export default Footer;
