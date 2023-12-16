import React from "react";
import Kategori from "./Kategori/Kategori";
import ProdukCard from "./ProdukCard/ProdukCard";
import NavbarHome from "../Navbar/NavbarHome/NavbarHome";
import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <NavbarHome />
      <Kategori />
      <ProdukCard />
    </>
  );
}
