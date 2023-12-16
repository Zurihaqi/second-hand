/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./NavbarLogin.css";
import {
  Container,
  Navbar,
  Nav,
  FormControl,
  InputGroup,
  Button,
  Offcanvas,
  Row,
  Col
} from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import btnMasuk from "../../assets/images/btnMasuk.png";

export default function NavbarLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light shadow-sm" expand="lg" id="NavDekstop">
        <Container>
          <Navbar.Brand href="/" className="navbarLogo"></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <InputGroup className="d-flex wrapper">
              <FormControl
                className="customSearch"
                type="search"
                placeholder="Cari disini..."
                aria-label="search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2" className="customSearchIcon">
                <BiSearch />
              </InputGroup.Text>
            </InputGroup>
            <Nav className="ms-auto my-2 my-lg-0">
              <Nav.Link href="/login">
                <img src={btnMasuk} alt="masuk" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4" id="SidebarMobile">
        <Row>
          <Col>
            <Button variant="light btnMobile" onClick={handleShow}>
              <GiHamburgerMenu />
            </Button>
            <div className="sidebar">
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <b>Second Hand</b>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <a href="#">
                    <img src={btnMasuk} alt="masuk" />
                  </a>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Col>
          <Col>
            <InputGroup className="d-flex wrapper">
              <FormControl
                className="customSearch2"
                type="search"
                placeholder="Cari disini..."
                aria-label="search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2" className="customSearchIcon2">
                <BiSearch />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
