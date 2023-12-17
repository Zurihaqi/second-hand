import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import InputProfil from "./pages/InputProfil/InputProfil";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DaftarJual from "./pages/DaftarJual/DaftarJual";
import DetailProduk from "./pages/DetailProduk";
import DetailPenawaran from "./pages/DetailPenawaran/DetailPenawaran";
import DetailProdukSeller from "./pages/DetailProdukSeller/DetailProdukSeller";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<InputProfil />} />
        <Route path="/daftarjual" element={<DaftarJual />} />
        <Route path="/detailproduk" element={<DetailProduk />} />
        <Route path="/detailpenawaran" element={<DetailPenawaran />} />
        <Route path="/detailprodukseller" element={<DetailProdukSeller />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
