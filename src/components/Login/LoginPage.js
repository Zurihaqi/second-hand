import React from "react";
import "./LoginPage.css";
import { Col, Row, Form, Button, InputGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import SHD from "../../assets/images/SHD.png";
import { useState } from "react";

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Container className="container-fluid p-0">
      <Row className="mx-auto">
        <Link to="/" className="arrow-back p-4">
          <AiOutlineArrowLeft />
        </Link>
        <Col lg={6}>
          <img
            src={SHD}
            className="login-img img-fluid img_SHD"
            alt="..."
          ></img>
        </Col>

        <Col lg={6} className="login-form d-flex">
          <Row className="p-4 mx-auto align-items-center">
            <Col lg={12}>
              <h2>
                <b>Masuk</b>
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    autoComplete="email"
                    placeholder="Contoh: johndee@gmail.com"
                    style={{ borderRadius: "16px" }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      placeholder="Masukkan password"
                      autoComplete="current-password"
                      style={{
                        borderTopLeftRadius: "16px",
                        borderBottomLeftRadius: "16px",
                      }}
                    ></Form.Control>
                    <InputGroup.Text
                      onClick={togglePassword}
                      style={{
                        borderTopRightRadius: "16px",
                        borderBottomRightRadius: "16px",
                      }}
                    >
                      {passwordShown ? (
                        <AiOutlineEyeInvisible type="button" />
                      ) : (
                        <AiOutlineEye type="button" />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Button
                  variant="primary w-100"
                  type="submit"
                  style={{ backgroundColor: "#7126B5", borderRadius: "16px" }}
                >
                  Masuk
                </Button>
              </Form>
              <p className="text-center custom-font">
                Belum punya akun?{" "}
                <Link
                  to="/register"
                  style={{ fontWeight: "bold", color: "#7126B5" }}
                >
                  Daftar di sini
                </Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
