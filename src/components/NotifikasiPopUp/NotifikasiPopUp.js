import React from "react";
import "./NotifikasiPopUp.css";
import DummyBarangTerjual from "../../assets/data/dataDummyBarangTerjual.json";
import CardLebar from "../CardLebar/CardLebar";
import { NavDropdown } from "react-bootstrap";

const PopUpNotifikasi = () => {
  const dataDummy = DummyBarangTerjual.DummyBarangTerjual;

  return (
    <>
      {dataDummy
        .sort((a, b) => b.tanggal - a.tanggal)
        .slice(0, 2)
        .map((item) => (
          <NavDropdown.Item key={item.id} href="/">
            <CardLebar
              harga={item.harga}
              nama={item.nama}
              hargaPenawaran={item.hargaTawar}
              tanggalPenawaran={item.tanggal}
              type="Penawaran"
              href="#"
              image="images/product-1.png"
            />
          </NavDropdown.Item>
        ))}
    </>
  );
};

export default PopUpNotifikasi;
