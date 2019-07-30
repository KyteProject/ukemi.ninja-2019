import React, { useState } from 'react';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
	const [ navOpen, setNavOpen ] = useState( false ),
		toggle = () => setNavOpen( !navOpen );

	return (
		<Navbar expand="lg" className="fixed-top sticky">
			<Container>
				<Navbar.Brand href="/">Ukemi</Navbar.Brand>
				<Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" label="Toggle Navigation" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/blog">Blog</Nav.Link>
						</Nav.Item>
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item href="/services">Overview</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/services/park-design">Park & Equiptment Design</NavDropdown.Item>
							<NavDropdown.Item href="/services/events">Events & Shows</NavDropdown.Item>
							<NavDropdown.Item href="/services/products">Physical Products</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">Talks & Presentations</NavDropdown.Item>
							<NavDropdown.Item href="/services/web-dev">Website Development</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="/projects">Overview</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="/projects/gpnb">The Greatest Park Never Build</NavDropdown.Item>
							<NavDropdown.Item href="/projects/cards">Ukemi Card Game</NavDropdown.Item>
							<NavDropdown.Item href="/projects/mobile-parkour-van">Parkour Van</NavDropdown.Item>
							<NavDropdown.Item href="/projects/fucked-knee-ebook">Fucked Knee eBook</NavDropdown.Item>
						</NavDropdown>
						<Nav.Item>
							<Nav.Link href="/shop">Shop</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/contact">Contact</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Navigation;
