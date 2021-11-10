import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Bicycle Barn</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="/home#home" className="navbar">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#about" className="navbar">
              About Us
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#products" className="navbar">
              Products
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#reviews" className="navbar">
              Review
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#contact" className="navbar">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="navbar">
              Login
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            <Nav.Link as={Link} to="/login" variant="light" className="navbar ">
              User
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
