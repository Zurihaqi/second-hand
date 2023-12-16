import React from "react";
import "./ProdukCard.css";
import DummyBarangTerjual from "../../../assets/data/dataDummyBarangTerjual.json";
import { Row, Container } from "react-bootstrap";
import Buttonjual from "../../../assets/images/jualButton.png";
import { Link } from "react-router-dom";

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
                  <img src={item.image} className="card-img-top w-100" alt="product-img" />
                  <div className="card-body">
                    <h5 className="card-title product-title">{item.nama}</h5>
                    <p className="card-text product-description">{item.kategori}</p>
                    <h5 className="card-title product-price">
                      Rp {item.harga.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </h5>
                  </div>
                </a>
              </div>
            );
          })}
        </Row>
        <Link to="/inputProduct">
          <img src={Buttonjual} className="imgJual" alt="..."></img>
        </Link>
      </Container>
    </div>
  );
}
