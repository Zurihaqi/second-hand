import React from "react";
import "./RegisterPage.css";
import { Col, Row, Form, Button, InputGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineArrowLeft,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import SHD from "../../assets/images/SHD.png";
import { useState } from "react";

const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState(!state);
  return [state, toggle];
};

export default function RegisterPage() {
  const [passwordShown, togglePassword] = useToggle(false);
  const [confirmPasswordShown, toggleConfirmPassword] = useToggle(false);

  return (
    <Container className="container-fluid p-0">
      <Row className="mx-auto">
        <Link to="/" className="arrow-back p-4">
          <AiOutlineArrowLeft />
        </Link>
        <Col lg={6}>
          <img
            src={SHD}
            className="login-img img-fluid w-100 img_SHD"
            alt="..."
          ></img>
        </Col>
        <Col lg={6} className="Register-form d-flex">
          <Row className="p-4 mx-auto align-items-center">
            <Col lg={12}>
              <h2>
                <b>Daftar</b>
              </h2>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nama Lengkap"
                    autoComplete="name"
                    style={{ borderRadius: "16px" }}
                  />
                </Form.Group>

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
                      autoComplete="new-password"
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Konfirmasi Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type={confirmPasswordShown ? "text" : "password"}
                      placeholder="Ulangi password"
                      autoComplete="confirm-password"
                      style={{
                        borderTopLeftRadius: "16px",
                        borderBottomLeftRadius: "16px",
                      }}
                    ></Form.Control>
                    <InputGroup.Text
                      onClick={toggleConfirmPassword}
                      style={{
                        borderTopRightRadius: "16px",
                        borderBottomRightRadius: "16px",
                      }}
                    >
                      {confirmPasswordShown ? (
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
                  Daftar
                </Button>
              </Form>
              <p className="text-center custom-font">
                Sudah punya akun?{" "}
                <Link
                  to="/login"
                  style={{ fontWeight: "bold", color: "#7126B5" }}
                >
                  Masuk di sini
                </Link>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
