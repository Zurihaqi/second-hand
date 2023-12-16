/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./index.css";

const Detail = () => {
  const [sudahTawar, setSudahTawar] = useState(false);
  const [hargaTawar, setHargaTawar] = useState("");
  const [alert, setAlert] = useState(false);
  const [dataPenawaranLocalStorage, setDataPenawaranLocalStorage] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('tawarBarang'));
    if (items) {
      setDataPenawaranLocalStorage(items);
    }
  }, []);

  setTimeout(() => {
    setAlert(false);
  }, 10000);

  const id = '1';

  return (
    <div className="container-fluid detail-product">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div
            id="carouselExampleControlsNoTouching"
            className="carousel slide detail-product-img mx-auto"
            data-bs-ride="carousel"
            data-bs-touch="false"
            data-bs-interval="false">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide-to="2"
                aria-label="Slide 3"></button>
              <button
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide-to="3"
                aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="images/product-3.png"
                  className="d-block w-100"
                  alt="detail-product-img-1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/product-2.png"
                  className="d-block w-100"
                  alt="detail-product-img-2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/product-1.png"
                  className="d-block w-100"
                  alt="detail-product-img-3"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/product-2.png"
                  className="d-block w-100"
                  alt="detail-product-img-4"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="prev">
              <img src="icons/carousel-button.svg" alt="next btn" />
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControlsNoTouching"
              data-bs-slide="next">
              <img src="icons/carousel-button.svg" alt="next btn" />
            </button>
          </div>
          <div className="detail-product-description mx-auto">
            <h5 className="title">Deskripsi</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. <br /> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="detail-product-name mx-auto">
            <h5 className="title">Nama Produk</h5>
            <p className="category">Aksesoris</p>
            <h5 className="price">Rp 250.000</h5>
            <button
              type="button"
              className="btn"
              data-bs-toggle={(dataPenawaranLocalStorage.id !== id) && "modal"}
              data-bs-target={(dataPenawaranLocalStorage.id !== id) && "#exampleModal"}
              style={{
                backgroundColor: (sudahTawar || dataPenawaranLocalStorage.id === id) ? "#D0D0D0" : "#7126B5"
              }}>
              Saya tertarik dan ingin nego
            </button>
          </div>
          <div className="detail-product-seller mx-auto d-flex justify-content-between">
            <img src="images/avatar.png" alt="avatar" />
            <div className="flex-fill">
              <h5 className="title">Nama Seller</h5>
              <p className="text">Kota</p>
            </div>
          </div>
          <div className="detail-product-description-mobile mx-auto">
            <h5 className="title">Deskripsi</h5>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. <br /> <br /> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <button
            type="button"
            className="btn detail-product-buy-btn"
            data-bs-toggle={(dataPenawaranLocalStorage.id !== id) && "modal"}
            data-bs-target={(dataPenawaranLocalStorage.id !== id) && "#exampleModal"}
            style={{
              backgroundColor: (sudahTawar || dataPenawaranLocalStorage.id === id) ? "#D0D0D0" : "#7126B5"
            }}>
            Saya tertarik dan ingin nego
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content detail-product-modal">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="modal-text-medium">Masukkan Harga Tawarmu</p>
              <p className="modal-text-detail">
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan segera
                dihubungi penjual.
              </p>
              <div className="d-flex modal-product">
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
                value={hargaTawar}
                onChange={(e) => {
                  setHargaTawar(e.target.value)
                }}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="modalBuyBtn"
                onClick={() => {
                  if (hargaTawar !== "") {
                    setSudahTawar(true);
                    setAlert(true);

                    localStorage.setItem("tawarBarang", JSON.stringify({
                      id: id,
                      harga: hargaTawar
                    }))
                  }
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-dismiss="modal">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
      {alert ? (
        <div className="row justify-content-center">
          <div
            className="col-lg-6 alert detail-product-alert d-flex justify-content-between"
            role="alert">
            <p>Harga tawarmu berhasil dikirim ke penjual</p>
            <button
              type="button"
              data-bs-dismiss="modal"
              onClick={(e) => setAlert(false)}
              aria-label="Close">
              <img src="/icons/close-icon.svg" alt="close" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};


export default Detail;
