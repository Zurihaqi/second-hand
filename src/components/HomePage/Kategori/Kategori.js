import React from "react";
import "./Kategori.css";
import { Container, ButtonGroup } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export default function Kategori() {
  return (
    <Container className="shadow-sm p-3">
      <p>
        <b>Telusuri Kategori</b>
      </p>
      <div className="overflow-auto">
        <ButtonGroup>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Semua
          </button>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Hobi
          </button>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Kendaraan
          </button>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Baju
          </button>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Elektronik
          </button>
          <button type="button" className="custom-btn">
            <AiOutlineSearch />
            Kesehatan
          </button>
        </ButtonGroup>
      </div>
    </Container>
  );
}
