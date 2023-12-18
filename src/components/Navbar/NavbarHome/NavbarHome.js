/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./NavbarHome.css";
import { BiSearch } from "react-icons/bi";
import {
  Container,
  Navbar,
  Nav,
  FormControl,
  InputGroup,
  Button,
  Offcanvas,
  Row,
  Col,
  NavDropdown,
} from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import fi_list from "../../../assets/images/fi_list.png";
import fi_bell from "../../../assets/images/fi_bell.png";
import fi_user from "../../../assets/images/fi_user.png";
import btnMasuk from "../../../assets/images/btnMasuk.png";
import NotifikasiPopUp from "../../NotifikasiPopUp/NotifikasiPopUp";

export default function NavbarHome() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  const handleClose = () => setShowHamburgerMenu(false);
  const handleShow = () => setShowHamburgerMenu(true);
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
              {isLoggedIn ? (
                <>
                  <Nav.Link href="/daftarjual">
                    <img src={fi_list} alt="list" />
                  </Nav.Link>
                  <NavDropdown
                    className="custom-nav-dropdown overflow-hidden"
                    title={<img src={fi_bell} alt="notificationBell" />}
                  >
                    <div className="popup-notifikasi">
                      <NotifikasiPopUp />
                    </div>
                  </NavDropdown>
                  <Nav.Link href="/profile">
                    <img src={fi_user} alt="user" />
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link href="login">
                  <img
                    src={btnMasuk}
                    alt="tombolMasuk"
                    style={{ width: "95%" }}
                  />
                </Nav.Link>
              )}
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
              <Offcanvas show={showHamburgerMenu} onHide={handleClose}>
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
