import React from "react";
import "./LoginPage.css";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineArrowLeft } from "react-icons/ai";
import SHD from "../../assets/images/SHD.png";
import { useState } from "react";

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Row>
      <Link to="/" className="arrow-back">
        <AiOutlineArrowLeft />
      </Link>
      <Col lg={6}>
        <img src={SHD} className="img-fluid img_SHD" alt="..." style={{ width: "100%" }}></img>
      </Col>

      <Col lg={6} className="login-form">
        <Row className="row p-4 w-75 mx-auto align-items-center">
          <Col lg={12}>
            <h2>
              <b>Masuk</b>
            </h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
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
                    style={{
                      borderTopLeftRadius: "16px",
                      borderBottomLeftRadius: "16px"
                    }}></Form.Control>
                  <InputGroup.Text
                    onClick={togglePassword}
                    style={{ borderTopRightRadius: "16px", borderBottomRightRadius: "16px" }}>
                    <AiOutlineEye />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              <Button
                variant="primary w-100"
                type="submit"
                style={{ backgroundColor: "#7126B5", borderRadius: "16px" }}>
                Masuk
              </Button>
            </Form>
            <p className="text-center custom-font">
              Belum punya akun?{" "}
              <Link to="/register" style={{ fontWeight: "bold", color: "#7126B5" }}>
                Daftar di sini
              </Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}