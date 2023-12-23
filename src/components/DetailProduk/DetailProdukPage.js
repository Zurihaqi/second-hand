/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./DetailProduk.css";
import axios from "axios";
import { useFlash } from "../../provider/FlashProvider";
import FormatCurriencies from "../FormatCurrencies/FormatCurrencies";
import {
  Carousel,
  Modal,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import ImageMagnifier from "./ImageMagnifier/ImageMagnifier";

export default function DetailProdukPage() {
  const [data, setData] = useState({});
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState("");

  const { showFlash } = useFlash();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const showModal = () => setModal(true);

  const hideModal = () => setModal(false);

  const formatCurrency = (inputValue) => {
    const numericValue = parseFloat(inputValue.replace(/[^0-9,]/g, "")) || 0;

    const formattedValue = new Intl.NumberFormat("id-ID").format(numericValue);

    setAmount(formattedValue ? `Rp ${formattedValue}` : "");
  };

  const handleChange = (e) => {
    formatCurrency(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("id");
        const url = `http://localhost:3001/api/products/${id}`;
        const response = await axios.get(url);

        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        showFlash(
          error.response?.data?.message || "Terjadi kesalahan",
          "danger"
        );
      }
    };

    fetchData();
  }, [showFlash]);

  return (
    <div className="container container-fluid detail-product mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          {data.product_images?.length > 0 && (
            <Carousel
              fade
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              className="mb-4 text-center"
            >
              {data.product_images &&
                data.product_images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <ImageMagnifier
                      src={image}
                      width="300px"
                      magnifierHeight={120}
                      magnifieWidth={120}
                      zoomLevel={2}
                      className="object-fit-content"
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          )}
          <div className="detail-product-description mx-auto">
            <h5 className="title">Deskripsi</h5>
            <p className="text">{data.description}</p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="detail-product-name mx-auto mt-2">
            <h5 className="title">{data.name}</h5>
            <p className="category">{data.Category?.name}</p>
            <h5 className="price">
              Rp{data.price && FormatCurriencies(data.price)}
            </h5>
            <button type="button" className="btn" onClick={showModal}>
              Saya tertarik dan ingin nego
            </button>
          </div>
          {data.User && (
            <div className="detail-product-seller mx-auto d-flex justify-content-between">
              <img src={data.User.photo_profile} alt="avatar" />
              <div className="flex-fill">
                <h5 className="title">{data.User.name}</h5>
                <p className="text">{data.User.City.name}</p>
              </div>
            </div>
          )}
          <div className="detail-product-description-mobile mx-auto">
            <h5 className="title">Deskripsi</h5>
            <p className="text">{data.description}</p>
          </div>
        </div>
      </div>
      <Modal
        fade
        id="modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        show={modal}
        onHide={hideModal}
      >
        <ModalHeader closeButton />
        <ModalBody className="p-4">
          <p className="modal-text-medium">Masukkan Harga Tawarmu</p>
          <p className="modal-text-detail">
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div className="d-flex modal-product">
            <img
              src={data.product_images && data.product_images[0]}
              alt="product"
            />
            <div className="flex-fill">
              <p className="title">{data.name}</p>
              <p className="price">
                Rp {data.price && FormatCurriencies(data.price)}
              </p>
            </div>
          </div>
          <p className="modal-text-tawar">Harga Tawar</p>
          <input
            type="text"
            className="modal-input-tawar"
            placeholder="Masukan tawaran anda"
            value={amount}
            onChange={handleChange}
          />
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="modalBuyBtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-dismiss="modal"
          >
            Kirim
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
