import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import FormatCurrencies from "../FormatCurrencies/FormatCurrencies";
import "./CardLebar.css";

export default function CardLebar({
  harga,
  nama,
  hargaPenawaran,
  hargaTerjual,
  tanggalPenawaran,
  tanggalTerjual,
  type,
  href,
  image,
}) {
  return (
    <div className="card-lebar">
      <Link to={href}>
        <img src={image} alt={nama} />
        <div className="card-content">
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
    </div>
  );
}
