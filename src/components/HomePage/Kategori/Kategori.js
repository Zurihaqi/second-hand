import React from "react";
import "./Kategori.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export default function Kategori() {
  return (
    <div>
      <Container className="mt-3">
        <p>
          <b>Telusuri Kategori</b>
        </p>
        {/* <Row>
          <Col lg={2}>
            <Button className="btn btnCustom1">
              <p>
                <AiOutlineSearch />
                Semua
              </p>
            </Button>
          </Col>
          <Col lg={2}>
            <Button className="btn btnCustom2">
              <p>
                <AiOutlineSearch />
                Hobi
              </p>
            </Button>
          </Col>
          <Col lg={2}>
            <Button className="btn btnCustom3">
              <p>
                <AiOutlineSearch />
                Kendaraan
              </p>
            </Button>
          </Col>
          <Col lg={2}>
            <Button className="btn btnCustom4">
              <p>
                <AiOutlineSearch />
                Baju
              </p>
            </Button>
          </Col>
          <Col lg={2}>
            <Button className="btn btnCustom5">
              <p>
                <AiOutlineSearch />
                Elektronik
              </p>
            </Button>
          </Col>
          <Col lg={2}>
            <Button className="btn btnCustom6">
              <p>
                <AiOutlineSearch />
                Kesehatan
              </p>
            </Button>
          </Col>
        </Row> */}
        <ButtonGroup aria-label="Basic example">
          <Button
            className="btn btnCustom"
            style={{ borderTopRightRadius: "12px", borderBottomRightRadius: "12px" }}>
            <AiOutlineSearch />
            Semua
          </Button>
          <Button className="btn mx-2 btnCustom" style={{ borderRadius: "12px" }}>
            <AiOutlineSearch />
            Hobi
          </Button>
          <Button className="btn btnCustom" style={{ borderRadius: "12px" }}>
            <AiOutlineSearch />
            Kendaraan
          </Button>
          <Button className="btn mx-2 btnCustom" style={{ borderRadius: "12px" }}>
            <AiOutlineSearch />
            Baju
          </Button>
          <Button className="btn btnCustom" style={{ borderRadius: "12px" }}>
            <AiOutlineSearch />
            Elektronik
          </Button>
          <Button
            className="btn mx-2 btnCustom"
            style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}>
            <AiOutlineSearch />
            Kesehatan
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
