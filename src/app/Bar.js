import React from 'react';
import {
    Container,
    Navbar,
    Nav,
    NavDropdown,
    Table,
    Button,
    Dropdown,
   } from 'react-bootstrap';

const Bar = () => (
    <div id="bar">
        {/* <Navbar fixed="top" collapseOnSelect expand={false}> */}
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Woska.net</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        {/* <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/about">About</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

export default Bar;
