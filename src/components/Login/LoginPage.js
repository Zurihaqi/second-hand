import React from "react";
import "./LoginPage.css";
import { Col, Row, Form, Button, InputGroup, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import SHD from "../../assets/images/SHD.png";
import { useState } from "react";
import { useFlash } from "../Flash/FlashContext";
import axios from "axios";

export default function LoginPage() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showFlash } = useFlash();
  const navigate__ = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/login";
      const login = await axios.post(url, {
        email: email,
        password: password,
      });

      if (login.status === 200) {
        showFlash("Berhasil login.", "success");
        localStorage.setItem("token", login.data.token);
        navigate__("/");
      }
    } catch (error) {
      showFlash(error.response?.data?.message || "Terjadi kesalahan", "danger");
    }
  };

  //testing purpose
  // const flashTest = () => {
  //   showFlash("Success", "success");
  // };

  return (
    <Container fluid className="p-0 overflow-hidden">
      <Row>
        <Link to="/" className="arrow-back p-4">
          <AiOutlineArrowLeft />
        </Link>
        <Col>
          <div>
            <img src={SHD} className="login-img img-fluid" alt="logo"></img>
          </div>
        </Col>

        <Col
          lg={6}
          className="login-form d-flex justify-content-center align-items-center"
        >
          <Row className="mx-auto">
            <Col lg={12}>
              <h2>
                <b>Masuk</b>
              </h2>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    autoComplete="email"
                    placeholder="Contoh: johndee@gmail.com"
                    style={{ borderRadius: "16px" }}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                      onChange={(e) => setPassword(e.target.value)}
                      required
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
