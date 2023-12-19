/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./DetailProduk.css";
import axios from "axios";
import { useFlash } from "../Flash/FlashContext";
import FormatCurriencies from "../FormatCurrencies/FormatCurrencies";
import { Carousel } from "react-bootstrap";

export default function DetailProdukPage() {
  const [data, setData] = useState({});
  const [index, setIndex] = useState(0);
  const [alert, setAlert] = useState(false);
  const { showFlash } = useFlash();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
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
              activeIndex={index}
              onSelect={handleSelect}
              className="mb-4"
            >
              {data.product_images &&
                data.product_images.map((image, idx) => (
                  <Carousel.Item key={idx}>
                    <img
                      className="d-block w-100"
                      src={image}
                      alt={`detail-product-img-${idx + 1}`}
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
          <div className="detail-product-name mx-auto mt-auto">
            <h5 className="title">{data.name}</h5>
            <p className="category">{data.Category?.name}</p>
            <h5 className="price">
              Rp{data.price && FormatCurriencies(data.price)}
            </h5>
            <button type="button" className="btn">
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
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content detail-product-modal">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="modal-text-medium">Masukkan Harga Tawarmu</p>
              <p className="modal-text-detail">
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
                akan segera dihubungi penjual.
              </p>
              <div className="d-flex modal-product">
                {/* Replace the next two lines with your actual modal content */}
                <img src="images/product-1.png" alt="product" />
                <div className="flex-fill">
                  <p className="title">Jam Tangan Casio</p>
                  <p className="price">Rp 250.000</p>
                </div>
              </div>
              <p className="modal-text-tawar">Harga Tawar</p>
              <input
                type="number"
                placeholder="Rp 0,00"
                className="modal-input-tawar"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modalBuyBtn"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-dismiss="modal"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      {alert && (
        <div className="row justify-content-center">
          <div
            className="col-lg-6 alert detail-product-alert d-flex justify-content-between"
            role="alert"
          >
            <p>Harga tawarmu berhasil dikirim ke penjual</p>
            <button type="button" data-bs-dismiss="modal" aria-label="Close">
              <img src="/icons/close-icon.svg" alt="close" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
