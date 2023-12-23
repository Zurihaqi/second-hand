import React from "react";
import ProdukCard from "./ProdukCard/ProdukCard";
import MainNavbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <MainNavbar />
      <Carousel />
      <ProdukCard />
    </>
  );
}
