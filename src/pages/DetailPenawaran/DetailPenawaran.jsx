import React, { useEffect, useState } from "react";
import "./DetailPenawaran.css";
import CardLebar from "../../components/CardLebar/CardLebar";
import { Link } from "react-router-dom";

const DetailPenawaran = () => {
  const [terimaPenawaran, setTerimaPenawaran] = useState(false);
  const [alert, setAlert] = useState(false);
  const [dataBarangLocalStorage, setDataBarangLocalStorage] = useState([]);
  const [selesaiPenawaran, setSelesaiPenawaran] = useState(false);

  const noWa = "6281292584275";
  const teksPesanWa = "tes";


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('terimaPenawaran'));
    if (items) {
      setDataBarangLocalStorage(items);
    }
  }, []);

  return (
    <div className="container-fluid detail-penawaran-page">
      <div className="row justify-content-center ">
        <div className="col-lg-9">
          <h3 className="title-main">Detail Data Penawaran</h3>
          <h3 className="lead">Penawar Barangmu :</h3>
          <div className="detail-penawaran-page-seller mx-auto d-flex justify-content-between align-items-center">
            <img src="images/avatar.png" alt="avatar" />
            <div className="flex-fill">
              <h5 className="title">Nama Seller</h5>
              <p className="text">Kota</p>
            </div>
          </div>
          <h3 className="lead">Barangmu Yang Ditawar :</h3>
          <CardLebar
            harga="250000"
            nama="Jam Tangan"
            hargaPenawaran="200000"
            tanggalPenawaran="2022-03-18 02:00:00.0"
            type="Penawaran"
            href="/detaiPenawaran"
            image="images/product-1.png"
          />
          {(dataBarangLocalStorage.id !== '1') && (
            <div className="d-flex gap-3 mt-5 justify-content-center">
              <Link className="btn shadow-none" to="/daftarJual" >Tolak</Link>
              <button
                type="button"
                className="btn shadow-none"
                data-bs-toggle={(dataBarangLocalStorage.id !== '1') && "modal"}
                data-bs-target={(dataBarangLocalStorage.id !== '1') && "#exampleModal"}
                onClick={() => {terimaPenawaran === true && setAlert(true)}}
                style={{
                  backgroundColor: (terimaPenawaran || dataBarangLocalStorage.id === '1') ? "#D0D0D0" : "#7126B5"
                }}>
                Terima
              </button>
            </div>
          )}
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
                  <p className="modal-text-medium lead">Yeay kamu berhasil mendapat harga yang sesuai</p>
                  <p className="modal-text-detail">
                   Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
                  </p>
                  <div className="modal-product">
                    <p className="modal-text-medium text-center">Product Match</p>
                    <div className="d-flex">
                      <img src="images/avatar.png" alt="avatar" />
                      <div className="flex-fill">
                        <p className="title">nama Pembeli</p>
                        <p className="price">Kota</p>
                      </div>
                    </div>
                    <div className="d-flex mt-4">
                      <img src="images/product-1.png" alt="product" />
                      <div className="flex-fill">
                        <p className="title">Jam Tangan Casio</p>
                        <p className="price">Rp 200.000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <a
                    href={`https://wa.me/${noWa}?text=${teksPesanWa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modalBuyBtn d-flex justify-content-around align-items-center"
                    onClick={() => {
                      setTerimaPenawaran(true)

                      localStorage.setItem("terimaPenawaran", JSON.stringify({
                        id: '1',
                        name: 'nama Pembeli'
                      }))

                    }}>
                    Hubungi via Whatsapp
                    <img src="./icons/fi_whatsapp.svg" alt="wa-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {alert ? (
            <div className="row justify-content-center">
              <div
                className="col-lg-6 alert detail-product-alert d-flex justify-content-between"
                role="alert">
                <p>Anda telah menerima tawaran pembelian ini !</p>
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
          {(terimaPenawaran || dataBarangLocalStorage.id === '1') && (
            <div className="d-flex gap-3 mt-5 justify-content-center">
              <Link className="btn shadow-none" to="/daftarJual" >Kembali Ke Daftar Jual</Link>
              <button
                type="button"
                className="btn shadow-none"
                data-bs-toggle={!selesaiPenawaran && "modal"}
                data-bs-target={!selesaiPenawaran && "#modalSelesaiTransaksi"}
                style={{
                  backgroundColor: selesaiPenawaran ? "#D0D0D0" : "#7126B5",
                  color: "white",
                  border: "none"
                }}>
                Selesaikan Transaksi
              </button>
            </div>
          )}
          <div
            className="modal fade"
            id="modalSelesaiTransaksi"
            tabIndex="-1"
            aria-labelledby="modalSelesaiTransaksiLabel"
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
                  <p className="modal-text-medium lead">Selesaikan Penawaran ?</p>
                  <p className="modal-text-detail">
                    Pastikan transaksimu telah sesuai sebelum menyelesaikan transaksi
                  </p>
                </div>
                <div className="modal-footer">
                  <div
                    className="modalBuyBtn d-flex justify-content-around align-items-center"
                    onClick={() => {
                      // localStorage.setItem("terimaPenawaran", JSON.stringify({
                      //   id: '1',
                      //   name: 'nama Pembeli'
                      // }))
                      setSelesaiPenawaran(true);
                    }}
                    data-bs-toggle="modal"
                    data-bs-target="#modalSelesaiTransaksi"
                    data-bs-dismiss="modal"
                  >
                    Selesaikan Penawaran
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

export default DetailPenawaran;
