import React from "react";
import "./RegisterPage.css";
import { Col, Row, Form, Button, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineArrowLeft } from "react-icons/ai";
import SHD from "../../assets/images/SHD.png";
import { useState } from "react";

export default function RegisterPage() {
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
      <Col lg={6} className="Register-form">
        <Row className="row p-4 w-75 mx-auto align-items-center">
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
                  style={{ borderRadius: "16px" }}
                />
              </Form.Group>

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
                Daftar
              </Button>
            </Form>
            <p className="text-center custom-font">
              Sudah punya akun?{" "}
              <Link to="/login" style={{ fontWeight: "bold", color: "#7126B5" }}>
                Masuk di sini
              </Link>
            </p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
