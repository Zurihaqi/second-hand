import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./InputPage.css";

export default function NavbarInput() {
  return (
    <Navbar id="Navbar" className="navBg" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navLogo"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
