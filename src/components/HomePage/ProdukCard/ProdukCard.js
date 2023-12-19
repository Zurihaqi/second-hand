import React, { useState, useEffect } from "react";
import "./ProdukCard.css";
import { Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import jualButton from "../../../assets/images/jualButton.png";
import axios from "axios";
import { useFlash } from "../../Flash/FlashContext";

export default function ProductCard() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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

  useEffect(() => {
    const checkAuthentication = () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <div>
      <Container className="mt-5">
        <Row>
          {data.map((item) => {
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
