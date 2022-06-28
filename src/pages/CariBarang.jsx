import React, { Component } from "react";
import "../public/css/style.css";
import NavbarProduk from "../components/ NavbarProduk"
import CardName from "../components/CardName";

function CariBarang() {
  return (
    <div className="App">
        <NavbarProduk />
        <CardName />
    </div>
  );
}
export default CariBarang;


