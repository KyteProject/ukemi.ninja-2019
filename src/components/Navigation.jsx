import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
	const data = useStaticQuery( graphql`
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
	` );
	
	const projects = data.allStrapiProjects.edges,
		[ navOpen, setNavOpen ] = useState( false ),
		toggle = () => setNavOpen( !navOpen );

	return (
		<Navbar expand="lg" className="fixed-top sticky">
			<Container>
				<Navbar.Brand href="/">
					<img src="/logos/ukemi-logo.svg" alt="Ukemi Project text logo" />
				</Navbar.Brand>
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
							<NavDropdown.Item href="#action/3.4">
								Consultation, Presentations & Workshops
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Projects" id="basic-nav-dropdown">
							<NavDropdown.Item href="/projects">Overview</NavDropdown.Item>
							<NavDropdown.Divider />
							{projects.map( ( { node } ) => (
									<NavDropdown.Item href={`/projects/${node.slug}`}>{node.name}</NavDropdown.Item>
									) )}
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
