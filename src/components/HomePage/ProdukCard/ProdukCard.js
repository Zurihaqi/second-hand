import React from "react";
import "./ProdukCard.css";
import DummyBarangTerjual from "../../../assets/data/dataDummyBarangTerjual.json";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import jualButton from "../../../assets/images/jualButton.png";

export default function ProductCard() {
  const dataDummy = DummyBarangTerjual.DummyBarangTerjual;
  return (
    <div>
      <Container className="mt-5">
        <Row>
          {dataDummy.map((item) => {
            return (
              <div key={item.id} className="col-lg-2 col-sm-12 mb-4">
                <a href=" " className="card product-card w-100">
                  <img
                    src={item.image}
                    className="card-img-top w-100"
                    alt="product-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title product-title">{item.nama}</h5>
                    <p className="card-text product-description">
                      {item.kategori}
                    </p>
                    <h5 className="card-title product-price">
                      Rp{" "}
                      {item.harga
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </h5>
                  </div>
                </a>
              </div>
            );
          })}
        </Row>
      </Container>
      <div className="fixed-bottom d-flex justify-content-center mb-2">
        <Link to="/inputProduct">
          <img src={jualButton} alt="Tombol Jual" />
        </Link>
      </div>
    </div>
  );
}
