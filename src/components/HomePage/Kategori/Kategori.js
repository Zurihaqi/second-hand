import React from "react";
import "./Kategori.css";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export default function Kategori() {
  return (
    <Container className="mt-3">
      <p>
        <b>Telusuri Kategori</b>
      </p>
      <div className="overflow-auto">
        <ButtonGroup>
          <Button
            style={{
              borderRadius: "12px",
              width: "150px",
            }}
          >
            <AiOutlineSearch />
            Semua
          </Button>
          <Button
            className="mx-2"
            style={{ borderRadius: "12px", width: "150px" }}
          >
            <AiOutlineSearch />
            Hobi
          </Button>
          <Button style={{ borderRadius: "12px", width: "150px" }}>
            <AiOutlineSearch />
            Kendaraan
          </Button>
          <Button
            className="mx-2"
            style={{ borderRadius: "12px", width: "150px" }}
          >
            <AiOutlineSearch />
            Baju
          </Button>
          <Button style={{ borderRadius: "12px", width: "150px" }}>
            <AiOutlineSearch />
            Elektronik
          </Button>
          <Button
            className="mx-2"
            style={{
              borderRadius: "12px",
              width: "150px",
            }}
          >
            <AiOutlineSearch />
            Kesehatan
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}
