/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Container, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import "./InputPage.css";
import { Link } from "react-router-dom";
import CurrencyInput from "react-currency-input-field";
import { AiOutlineArrowLeft } from "react-icons/ai";
import fotoProduk from "../../../assets/images/fotoProduk.png";

export default function InputPage() {
  const [selectedImages, setSelectedImages] = useState([]);
  const onSelectFile = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));
  };
  return (
    <Container>
      <Row>
        <Col lg={1}>
          <Link to="/" className="arrow-back mt-5">
            <AiOutlineArrowLeft />
          </Link>
        </Col>
        <Col lg={11}>
          <p className="InfoProduk">
            <b>Lengkapi Detail Produk</b>
          </p>
        </Col>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control type="text" placeholder="nama produk" className="customForm" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Harga Produk</Form.Label>
          <InputGroup>
            <CurrencyInput
              className="InputHarga"
              id="input-example"
              name="input-name"
              placeholder="Rp 0.00"
              decimalsLimit={3}
              prefix={"Rp"}
              onValueChange={(value, name) => console.log(value, name)}
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Katagori</Form.Label>
          <Form.Select aria-label="Default select example" className="customForm">
            <option>Pilih Katagori</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Contoh: Jalan Ikan Hiu 33"
            className="customForm"
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Foto Produk</Form.Label>
          <InputGroup>
            <label className="labelFoto">
              <img src={fotoProduk} />
              <input type="file" className="customInput" onChange={onSelectFile} multiple />
            </label>
            <br />
            <div className="images">
              {selectedImages &&
                selectedImages.map((image) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} height="150" alt="upload" />
                      <br />
                      <Button
                        className="delete"
                        onClick={() =>
                          setSelectedImages(selectedImages.filter((e) => e !== image))
                        }>
                        Delete
                      </Button>
                    </div>
                  );
                })}
            </div>
          </InputGroup>
        </Form.Group>
        <Row>
          <Col lg={6}>
            <Button variant=" w-100 customButton1" type="submit">
              Preview
            </Button>
          </Col>
          <Col lg={6}>
            {selectedImages.length > 0 &&
              (selectedImages.length > 5 ? (
                <p>You cant upload more than 5 images!</p>
              ) : (
                <Button variant=" w-100 customButton2" type="submit">
                  Terbitkan
                </Button>
              ))}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
