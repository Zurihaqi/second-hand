import React from "react";
import OwlCarousel from "react-owl-carousel";
import "./Carousel.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import banner from "../../../assets/images/banner.png";
import { Container } from "react-bootstrap";

export default function Carousel() {
  const options = {
    loop: true,
    center: true,
    items: 3,
    // margin: 100,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      800: {
        items: 3,
      },
    },
  };

  const items = [
    { id: 1, img: banner, alt: "banner1" },
    { id: 2, img: banner, alt: "banner2" },
    { id: 3, img: banner, alt: "banner3" },
  ];

  return (
    <Container fluid className="mt-3">
      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        {items.map((item) => (
          <div key={item.id} className="item mx-auto">
            <img src={item.img} alt={item.alt} />
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
}
