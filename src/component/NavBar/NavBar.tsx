import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = (props: any) => {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Huddle</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Meeting Notes</Nav.Link>
              <Nav.Link href="#link">Text & Communication</Nav.Link>
              <Nav.Link href="#link">Writing Help</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default NavBar;