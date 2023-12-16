/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NavbarHome.css";
import { BiSearch } from "react-icons/bi";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  InputGroup,
  Button,
  Offcanvas,
  Row,
  Col,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import fi_list from "../../../assets/images/fi_list.png";
import fi_bell from "../../../assets/images/fi_bell.png";
import fi_user from "../../../assets/images/fi_user.png";
import watch from "../../../assets/images/watch.png";

export default function NavbarHome() {
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
              <Nav.Link href="/daftarjual">
                <img src={fi_list} alt="list" />
              </Nav.Link>
              <Nav.Link href="/notifikasi">
                <img src={fi_bell} alt="bell" />
              </Nav.Link>
              <Nav.Link href="/profile">
                <img src={fi_user} alt="user" />
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
                  <ul>
                    <li>
                      <a href="#">Notifikasi</a>
                    </li>
                    <li>
                      <a href="#">Daftar Jual</a>
                    </li>
                    <li>
                      <a href="#">Akun Saya</a>
                    </li>
                  </ul>
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
