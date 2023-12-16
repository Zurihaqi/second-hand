import React from "react";
import "./DetailProdukSeller_.css";

const DetailProductSeller = () => {
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
            <button type="button" className="btn">
              Terbitakan
            </button>
            <button type="button" className="btn btn-outline">
              Edit
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
          <button type="button" className="btn detail-product-buy-btn">
            Terbitakan
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProductSeller;

