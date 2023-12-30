import React, { useState, useEffect } from "react";
import "./ProdukCard.css";
import { Row, Container, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import jualButton from "../../../assets/images/jualButton.png";
import axios from "axios";
import { useFlash } from "../../../provider/FlashProvider";
import { AiOutlineSearch } from "react-icons/ai";

export default function ProductCard() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [data, setData] = useState([]);
  const { showFlash } = useFlash();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "http://localhost:3001/api/home";
        const response = await axios.get(url);

        if (response.status === 200) {
          setData(response.data.data);
        }
      } catch (error) {
        showFlash(
          error.response?.data?.message || "Terjadi kesalahan",
          "danger"
        );
      }
    };

    fetchData();
  }, [showFlash]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = selectedCategory
    ? data.filter((item) => item.Category.name === selectedCategory)
    : data;

  return (
    <div>
      <Container className="shadow-sm p-3 mb-4">
        <p>
          <b>Telusuri Kategori</b>
        </p>
        <div className="overflow-auto">
          <ButtonGroup>
            <button
              type="button"
              onClick={() => handleCategorySelect(null)}
              className={
                selectedCategory === null ? "active custom-btn" : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Semua
            </button>
            <button
              type="button"
              onClick={() => handleCategorySelect("Hobi")}
              className={
                selectedCategory === "Hobi" ? "active custom-btn" : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Hobi
            </button>
            <button
              type="button"
              onClick={() => handleCategorySelect("Kendaraan")}
              className={
                selectedCategory === "Kendaraan"
                  ? "active custom-btn"
                  : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Kendaraan
            </button>
            <button
              type="button"
              onClick={() => handleCategorySelect("Baju")}
              className={
                selectedCategory === "Baju" ? "active custom-btn" : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Baju
            </button>
            <button
              type="button"
              onClick={() => handleCategorySelect("Elektronik")}
              className={
                selectedCategory === "Elektronik"
                  ? "active custom-btn"
                  : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Elektronik
            </button>
            <button
              type="button"
              onClick={() => handleCategorySelect("Kesehatan")}
              className={
                selectedCategory === "Kesehatan"
                  ? "active custom-btn"
                  : "custom-btn"
              }
            >
              <AiOutlineSearch />
              Kesehatan
            </button>
          </ButtonGroup>
        </div>
      </Container>
      <Container>
        <Row>
          {filteredData.map((item) => {
            return (
              <div key={item.id} className="col-lg-2 col-sm-12 mb-4">
                <a
                  href={`/product-detail?id=${item.id}`}
                  className="card product-card w-100 shadow-sm"
                >
                  <img
                    src={item.product_images[0]}
                    className="card-img-top w-100"
                    alt="product-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title product-title">{item.name}</h5>
                    <p className="card-text product-description">
                      {item.Category.name}
                    </p>
                    <h5 className="card-title product-price">
                      Rp{" "}
                      {item.price
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
