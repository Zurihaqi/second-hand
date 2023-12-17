import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import FormatCurrencies from "../FormatCurrencies/FormatCurrencies";
import "./CardLebar.css";

const CardLebar = ({
  harga,
  nama,
  hargaPenawaran,
  hargaTerjual,
  tanggalPenawaran,
  tanggalTerjual,
  type,
  href,
  image,
}) => {
  return (
    <Link
      to={href}
      className="p-3 d-flex w-100 justify-content-between align-items-center product-card-lebar"
    >
      <img src={image} alt={nama} />
      <div className="flex-fill ms-3">
        <p className="text-penawaran-produk">
          {type === "Penawaran" ? "Penawaran Produk" : "Barang Terjual"}
        </p>
        <p>{nama}</p>
        <p>Rp {FormatCurrencies(harga)}</p>
        <p>
          {type} Rp{" "}
          {FormatCurrencies(
            type === "Penawaran" ? hargaPenawaran : hargaTerjual
          )}
        </p>
      </div>
      <p className="text-tanggal">
        {moment(
          type === "Penawaran" ? tanggalPenawaran : tanggalTerjual
        ).format("D MMM YYYY, h:mm")}
      </p>
    </Link>
  );
};

export default CardLebar;
