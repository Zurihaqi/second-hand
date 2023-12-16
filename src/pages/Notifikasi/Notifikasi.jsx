import React from "react";
import DummyBarangTerjual from "../../assets/data/dataDummyBarangTerjual.json";
import "./Notifikasi.css";
import CardLebar from "../../components/CardLebar/CardLebar";

const Notifikasi = () => {
  const dataDummy = DummyBarangTerjual.DummyBarangTerjual;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center notifikasi-page">
        <div className="col-lg-9">
          <h3 className="title">Daftar Notifikasimu</h3>
          <div>
            {dataDummy.map((item) => {
              return (
                <CardLebar
                  key={item.id}
                  harga={item.harga}
                  nama={item.nama}
                  hargaPenawaran={item.hargaTawar}
                  tanggalPenawaran={item.tanggal}
                  type="Penawaran"
                  href=""
                  image="images/product-1.png"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifikasi;
