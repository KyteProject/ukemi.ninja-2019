import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useCart } from "react-use-cart";
import { Nav, NavDropdown, Navbar, Container, Image, Button, Link } from "react-bootstrap";
import { FiShoppingCart, FiSearch, FiHelpCircle, FiMenu } from "react-icons/fi";

const Navigation = () => {
  const data = useStaticQuery(
    graphql`
      query AllNavigationProjQuery {
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
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const toggle = () => setNavOpen(!navOpen);
  const toggleNav = () => {
    setNavOpen(!navOpen);
    setCartOpen(false);
    setSearchOpen(false);
    setOffCanvasOpen(false);
  };
  const toggleCart = () => {
    setNavOpen(false);
    setCartOpen(!cartOpen);
    setSearchOpen(false);
    setOffCanvasOpen(false);
  };
  const toggleSearch = () => {
    setNavOpen(false);
    setCartOpen(false);
    setSearchOpen(!searchOpen);
    setOffCanvasOpen(false);
  };
  const toggleOffCanvas = () => {
    setNavOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
    setOffCanvasOpen(!offCanvasOpen);
  };
  const { items } = useCart();
  const { isEmpty } = useCart();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed>
        <Container className="flex-row justify-content-center">
          <Navbar.Brand href="/">
            <img
              src="/images/text-logotext-logo.png"
              alt="Ukemi Project text logo"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <div className="navbar-other ml-auto order-lg-3">
            <Nav className="flex-row align-items-center">
              <Nav.Item>
                <Navbar.Toggle
                  onClick={toggleNav}
                  aria-controls="responsive-navbar-nav"
                  label="Toggle Navigation"
                  children={<FiMenu size={30} />}
                  className="btn-link"
                />
              </Nav.Item>
              <Nav.Item className="dropdown cart-dropdown position-static">
                <Button as={Link} onClick={toggleCart} className="btn-link">
                  <FiShoppingCart size={26} />
                </Button>
                {cartOpen && (
                  <div className="dropdown-menu dropdown-menu-right cart-dropdown-menu show">
                    <h5>Shopping Cart</h5>
                    <ul className="image-list">
                      {!isEmpty ? items.map(CartItem) : <p>Your cart is empty!</p>}
                    </ul>
                  </div>
                )}
              </Nav.Item>
              <Nav.Item>
                <Button as={Link} onClick={toggleSearch} className="btn-link">
                  <FiSearch size={26} />
                </Button>
                {searchOpen && (
                  <div className="dropdown-menu search-dropdown-menu w-100 show">
                    <div className="form-wrapper">
                      <form className="inverse-text">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search something"
                        />
                      </form>
                    </div>
                  </div>
                )}
              </Nav.Item>
              <Nav.Item>
                <Button as={Link} onClick={toggleOffCanvas} className="btn-link">
                  <FiHelpCircle size={26} />
                </Button>
              </Nav.Item>
            </Nav>
            <Navbar.Collapse className="offcanvas-nav"></Navbar.Collapse>
          </div>
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
    </>
  );
};

export default Navigation;
