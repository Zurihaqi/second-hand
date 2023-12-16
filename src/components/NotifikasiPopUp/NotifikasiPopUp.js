import React, { useState } from "react";
import "./NotifikasiPopUp.css";
import DummyBarangTerjual from "../../assets/data/dataDummyBarangTerjual.json";
import CardLebar from "../CardLebar/CardLebar";

const PopUpNotifikasi = () => {
  const [alert, setAlert] = useState(true);
  const dataDummy = DummyBarangTerjual.DummyBarangTerjual;

  setTimeout(() => {
    setAlert(false);
  }, 10000);

  return (
    <div>
      {alert && (
        <div className="row justify-content-end">
          <div className="col-lg-6 alert popup-notifikasi " role="alert">
            <div className="popup-notifikasi-head d-flex justify-content-between align-items-center px-3">
              <p>Notifikasi Terbaru</p>
              <button
                type="button"
                data-bs-dismiss="modal"
                onClick={() => setAlert(false)}
                aria-label="Close">
                <img src="/icons/close-icon-black.svg" alt="close" />
              </button>
            </div>
            <div className="px-3">
              {dataDummy
                .sort((a, b) => b.tanggal - a.tanggal)
                .slice(0, 2)
                .map((item) => {
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
      )}
    </div>
  );
};

export default PopUpNotifikasi;
