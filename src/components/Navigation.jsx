import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query NavProjectsQuery {
      allStrapiProjects(limit: 9, sort: { order: ASC, fields: name }) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `);

  const projects = data.allStrapiProjects.edges;
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => setNavOpen(!navOpen);

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="header-navigation">
      <Container>
        <Navbar.Brand href="/">
          <img src="/logos/ukemi-logo.svg" alt="Ukemi Project text logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggle}
          aria-controls="responsive-navbar-nav"
          label="Toggle Navigation"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/" className="nav-text">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" className="nav-text">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog" className="nav-text">
                Blog
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services" className="nav-text">
                Services
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/projects">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              {projects.map(({ node }) => (
                <NavDropdown.Item
                  key={node.slug}
                  href={`/projects/${node.slug}`}
                  className="nav-text">
                  {node.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/shop" className="nav-text">
                Shop
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" className="nav-text">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
