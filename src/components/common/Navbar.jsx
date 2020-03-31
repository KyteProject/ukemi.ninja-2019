import React, { useState } from "react";
import { Link } from "gatsby";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { FiShoppingCart, FiSearch, FiHelpCircle, FiMenu } from "react-icons/fi";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
    setSearchOpen(false);
    setOffCanvasOpen(false);
  };
  const toggleSearch = () => {
    setNavOpen(false);
    setSearchOpen(!searchOpen);
    setOffCanvasOpen(false);
  };
  const toggleOffCanvas = () => {
    setNavOpen(false);
    setSearchOpen(false);
    setOffCanvasOpen(!offCanvasOpen);
  };

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
                <Button as={Link} to="/shop/cart" className="btn-link">
                  <FiShoppingCart size={26} />
                </Button>
              </Nav.Item>
              <Nav.Item>
                <Button onClick={toggleSearch} className="btn-link">
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
                <Button onClick={toggleOffCanvas} className="btn-link">
                  <FiHelpCircle size={26} />
                </Button>
              </Nav.Item>
            </Nav>
            <Navbar.Collapse className="offcanvas-nav" />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="nav-text">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className="nav-text">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/services" className="nav-text">
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/projects" className="nav-text">
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/shop" className="nav-text">
                  Shop
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/blog" className="nav-text">
                  Blog
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/contact" className="nav-text">
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
