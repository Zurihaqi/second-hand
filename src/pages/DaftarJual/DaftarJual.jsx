import React from "react";
import { Link } from "react-router-dom";
import "./DaftarJual.css";
import Card from "../../components/Card/Card";
import DaftarKosong from "../../components/DaftarKosong/DaftarKosong";
import CardLebar from "../../components/CardLebar/CardLebar";
import NotifikasiPopUp from "../../components/NotifikasiPopUp/NotifikasiPopUp";
import DummyBarangTerjual from "../../assets/data/dataDummyBarangTerjual.json";

const DaftarJual = () => {
    const dataDummy = DummyBarangTerjual.DummyBarangTerjual;
  
    const dataDiminati = [];
    const dataTerjual = [];
  
    for (let i = 0; i < dataDummy.length; i++) {
      if (dataDummy[i].status === "diminati") {
        dataDiminati.push(dataDummy[i]);
      }
    }
  
    for (let i = 0; i < dataDummy.length; i++) {
      if (dataDummy[i].status === "terjual") {
        dataTerjual.push(dataDummy[i]);
      }
    }
    

    return (
      <div className="container-fluid daftar-jual">
        <NotifikasiPopUp />
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <h3 className="title">Daftar Jual Saya</h3>
            <div className="daftar-jual-seller mx-auto d-flex justify-content-between align-items-center">
              <img src="images/avatar.png" alt="avatar" />
              <div className="flex-fill">
                <h5 className="title">Nama Seller</h5>
                <p className="text">Kota</p>
              </div>
              <Link
                to="/profile"
                className="button d-flex justify-content-center align-items-center">
                Edit
              </Link>
            </div>
            <div className="row">
              <div className="d-flex align-items-start">
                <div className="col-lg-3">
                  <div className="daftar-jual-kategori">
                    <h5 className="title">Kategori</h5>
                    <div
                      className="nav flex-column nav-pills"
                      id="v-pills-tab"
                      role="tablist"
                      aria-orientation="vertical">
                      <button
                        className="nav-link active"
                        id="v-pills-semua-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-semua"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-semua"
                        aria-selected="true">
                        <div className="d-flex justify-content-between">
                          <img src="icons/box.svg" alt="box-icons" />
                          <p className="flex-fill">Semua Produk</p>
                          <img src="icons/chevron-right-active.svg" alt="chevron-right-icon" />
                        </div>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-diminati-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-diminati"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-diminati"
                        aria-selected="false">
                        <div className="d-flex justify-content-between">
                          <img src="icons/heart.svg" alt="heart-icons" />
                          <p className="flex-fill">Diminati</p>
                          <img src="icons/chevron-right.svg" alt="chevron-right-icon" />
                        </div>
                      </button>
                      <button
                        className="nav-link"
                        id="v-pills-terjual-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-terjual"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-terjual"
                        aria-selected="false">
                        <div className="d-flex justify-content-between">
                          <img src="icons/dollar-sign.svg" alt="dollar-sign-icons" />
                          <p className="flex-fill">Terjual</p>
                          <img src="icons/chevron-right.svg" alt="chevron-right-icon" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="daftar-jual-kategori-mobile">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="v-pills-semua-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-semua"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-semua"
                        aria-selected="true">
                        <div className="d-flex justify-content-between ">
                          <img src="icons/box.svg" alt="box-icons" />
                          <p className="flex-fill">Semua Produk</p>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="v-pills-diminati-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-diminati"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-diminati"
                        aria-selected="false">
                        <div className="d-flex justify-content-between ">
                          <img src="icons/heart.svg" alt="heart-icons" />
                          <p className="flex-fill">Diminati</p>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="v-pills-terjual-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-terjual"
                        type="button"
                        role="tab"
                        aria-controls="v-pills-terjual"
                        aria-selected="false">
                        <div className="d-flex justify-content-between ">
                          <img src="icons/dollar-sign.svg" alt="dollar-sign-icons" />
                          <p className="flex-fill">Terjual</p>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-semua"
                    role="tabpanel"
                    aria-labelledby="v-pills-semua-tab">
                    <div className="col-lg-12 mx-auto row daftar-jual-cards">
                      <Link
                        to="/inputProduk"
                        className="col-lg-4 col-sm-12 mb-4 daftar-jual-card tambah-daftar-jual-card d-flex flex-column justify-content-center align-items-center">
                        <img src="icons/plus.svg" alt="plus-icon" />
                        <p>Tambah Produk</p>
                      </Link>
                      {dataDummy.map((item) => {
                        return (
                          <div key={item.id} className="col-lg-4 col-sm-12 mb-4 daftar-jual-card">
                            <Card
                              img={item.image}
                              name={item.nama}
                              price={item.harga}
                              category={item.kategori}
                              href="/detailproductseller"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade daftar-jual-tab-pane"
                    id="v-pills-diminati"
                    role="tabpanel"
                    aria-labelledby="v-pills-diminati-tab">
                    <div className="col-lg-10 mx-auto row daftar-jual-cards">
                      {dataDiminati.length === 0 ? (
                        <DaftarKosong type="diminati" />
                      ) : (
                        dataDiminati.map((item) => {
                          return (
                            <div key={item.id}>
                              {item.penawaran.map((tawar) => {
                                return (
                                  <CardLebar
                                    key={tawar.idPenawaran}
                                    harga={item.harga}
                                    nama={item.nama}
                                    hargaPenawaran={tawar.hargaPenawaran}
                                    tanggalPenawaran={item.tanggal}
                                    type="Penawaran"
                                    href="/detailpenawaran"
                                    image="images/product-1.png"
                                  />
                                );
                              })}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade daftar-jual-tab-pane"
                    id="v-pills-terjual"
                    role="tabpanel"
                    aria-labelledby="v-pills-terjual-tab">
                    <div className="col-lg-10 mx-auto row daftar-jual-cards">
                      {dataTerjual.length === 0 ? (
                        <DaftarKosong type="terjual" />
                      ) : (
                        dataTerjual.map((item) => {
                          return (
                            <div key={item.id}>
                              {item.terjual.map((jual) => {
                                return (
                                  <CardLebar
                                    key={jual.idTerjual}
                                    harga={item.harga}
                                    nama={item.nama}
                                    hargaTerjual={jual.hargaTerjual}
                                    tanggalTerjual={item.tanggal}
                                    type="Terjual"
                                    href="/detailpenawaran"
                                    image="images/product-1.png"
                                  />
                                );
                              })}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default DaftarJual;