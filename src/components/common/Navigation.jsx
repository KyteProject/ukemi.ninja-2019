import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Nav, NavDropdown, Navbar, Container, Image } from "react-bootstrap";

const Navigation = () => {
  const data = useStaticQuery(
    graphql`
      query AllNavigationProjectsQuery {
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
  const [navOpen, setNavOpen] = useState(false);
  const toggle = () => setNavOpen(!navOpen);

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="header-navigation bg-white">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/images/text-logotext-logo.png" alt="Ukemi Project text logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={toggle}
          aria-controls="responsive-navbar-nav"
          label="Toggle Navigation"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/" className="nav-text">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about" className="nav-text">
                About Us
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
              {projects.length > 0
                ? /* prettier-ignore */
                  projects.map(({ node }) => (
                    <NavDropdown.Item
                      key={node.id}
                      href={`/projects/${node.frontmatter.slug}`}
                      className="nav-text">
                      {node.frontmatter.name}
                    </NavDropdown.Item>
                  ))
                : null}
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/shop" className="nav-text">
                Shop
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog" className="nav-text">
                Blog
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
