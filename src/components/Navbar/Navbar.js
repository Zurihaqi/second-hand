/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Navbar.css";
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
import fi_list from "../../assets/images/fi_list.png";
import fi_list_hover from "../../assets/images/fi_list_hover.png";
import fi_bell from "../../assets/images/fi_bell.png";
import fi_bell_hover from "../../assets/images/fi_bell_hover.png";
import fi_user from "../../assets/images/fi_user.png";
import fi_user_hover from "../../assets/images/fi_user_hover.png";
import btnMasuk from "../../assets/images/btnMasuk.png";
import NotifikasiPopUp from "../NotifikasiPopUp/NotifikasiPopUp";
import HoverDropdown from "./HoverDropdown/HoverDropdown";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

export default function MainNavbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleClose = () => setShowHamburgerMenu(false);
  const handleShow = () => setShowHamburgerMenu(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered ? fi_list_hover : fi_list;

  return (
    <>
      <Navbar
        bg="light shadow-sm"
        expand="lg"
        id="NavDekstop"
        className="sticky-top"
        style={{ zIndex: "10" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="navbarLogo"
            style={{ color: "white" }}
          >
            SecondHand.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {location.pathname === "/" ||
            location.pathname === "/product-detail" ? (
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
            ) : (
              <h5 className="text-center mx-auto mt-2">
                {location.pathname
                  .replace(/\//g, "")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </h5>
            )}
            <Nav className="my-2 my-lg-0">
              {localStorage.getItem("token") ? (
                <>
                  <Nav.Link
                    href="/listed-product"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img src={iconSource} alt="list" />
                  </Nav.Link>
                  <HoverDropdown
                    className="overflow-hidden"
                    defaultIcon={fi_bell}
                    hoveredIcon={fi_bell_hover}
                  >
                    <NotifikasiPopUp />
                  </HoverDropdown>
                  <HoverDropdown
                    defaultIcon={fi_user}
                    hoveredIcon={fi_user_hover}
                  >
                    <NavDropdown.Item href="/profile">Profil</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </HoverDropdown>
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
      <Container fluid className="mt-4" id="SidebarMobile">
        <Row>
          <Col className="me-auto col-auto">
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
          <Col className="d-flex text-center justify-content-center">
            {location.pathname === "/" ||
            location.pathname === "/product-detail" ? (
              <InputGroup className="d-flex wrapper">
                <FormControl
                  className="customSearch2"
                  type="search"
                  placeholder="Cari disini..."
                  aria-label="search"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text
                  id="basic-addon2"
                  className="customSearchIcon2"
                >
                  <BiSearch />
                </InputGroup.Text>
              </InputGroup>
            ) : (
              <h5 className="me-5">
                {location.pathname
                  .replace(/\//g, "")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </h5>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
