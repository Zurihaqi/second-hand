import React from "react";
import Kategori from "./Kategori/Kategori";
import ProdukCard from "./ProdukCard/ProdukCard";
import NavbarHome from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <Carousel />
      <Kategori />
      <ProdukCard />
    </>
  );
}
