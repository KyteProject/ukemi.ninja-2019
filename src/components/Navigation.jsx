import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
	const [ navOpen, setNavOpen ] = useState( false ),
		toggle = () => setNavOpen( !navOpen );

	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Ukemi</Navbar.Brand>
				<Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" label="Toggle Navigation" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/blog">Blog</Nav.Link>
						<Nav.Link href="/services">Services</Nav.Link>
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="/projects">Overview</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/projects/design">Design</NavDropdown.Item>
							<NavDropdown.Item href="/projects/events">Events</NavDropdown.Item>
							<NavDropdown.Item href="/projects/products">Products</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Talks & Presentations</NavDropdown.Item>
						</NavDropdown>
						<Nav.Link href="/shop">Shop</Nav.Link>
						<Nav.Link href="/contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
