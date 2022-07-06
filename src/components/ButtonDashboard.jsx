import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "../public/css/style.css";
import { AiOutlineSearch } from "react-icons/ai";

import {
  getAllProducts,
  getProductByKategori,
} from "../redux/actions/produkActions";
import { useEffect } from "react";

const ButtonDashboard = () => {
  const dispatch = useDispatch();
  const { product, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (product.length === 0 && status !== "GET_ALL") {
    dispatch(getAllProducts());
  }

  const filterAll = (event) => {
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterHobi").classList.remove("bg-violet-400");
    document.getElementById("filterHobi").classList.add("bg-sky-400");
    document
      .getElementById("filterKendaraan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKendaraan").classList.add("bg-sky-400");
    document.getElementById("filterBaju").classList.remove("bg-violet-400");
    document.getElementById("filterBaju").classList.add("bg-sky-400");
    document
      .getElementById("filterElektronik")
      .classList.remove("bg-violet-400");
    document.getElementById("filterElektronik").classList.add("bg-sky-400");
    document
      .getElementById("filterKesehatan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKesehatan").classList.add("bg-sky-400");
    dispatch(getAllProducts());
  };

  const filterHobi = (event) => {
    let Hobi = 1;
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterAll").classList.remove("bg-violet-400");
    document.getElementById("filterAll").classList.add("bg-sky-400");
    document
      .getElementById("filterKendaraan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKendaraan").classList.add("bg-sky-400");
    document.getElementById("filterBaju").classList.remove("bg-violet-400");
    document.getElementById("filterBaju").classList.add("bg-sky-400");
    document
      .getElementById("filterElektronik")
      .classList.remove("bg-violet-400");
    document.getElementById("filterElektronik").classList.add("bg-sky-400");
    document
      .getElementById("filterKesehatan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKesehatan").classList.add("bg-sky-400");
    dispatch(getProductByKategori(Hobi));
  };

  const filterKendaraan = (event) => {
    let Kendaraan = 2;
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterHobi").classList.remove("bg-violet-400");
    document.getElementById("filterHobi").classList.add("bg-sky-400");
    document.getElementById("filterAll").classList.remove("bg-violet-400");
    document.getElementById("filterAll").classList.add("bg-sky-400");
    document.getElementById("filterBaju").classList.remove("bg-violet-400");
    document.getElementById("filterBaju").classList.add("bg-sky-400");
    document
      .getElementById("filterElektronik")
      .classList.remove("bg-violet-400");
    document.getElementById("filterElektronik").classList.add("bg-sky-400");
    document
      .getElementById("filterKesehatan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKesehatan").classList.add("bg-sky-400");
    dispatch(getProductByKategori(Kendaraan));
  };

  const filterBaju = (event) => {
    let Baju = 3;
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterHobi").classList.remove("bg-violet-400");
    document.getElementById("filterHobi").classList.add("bg-sky-400");
    document
      .getElementById("filterKendaraan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKendaraan").classList.add("bg-sky-400");
    document.getElementById("filterAll").classList.remove("bg-violet-400");
    document.getElementById("filterAll").classList.add("bg-sky-400");
    document
      .getElementById("filterElektronik")
      .classList.remove("bg-violet-400");
    document.getElementById("filterElektronik").classList.add("bg-sky-400");
    document
      .getElementById("filterKesehatan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKesehatan").classList.add("bg-sky-400");
    dispatch(getProductByKategori(Baju));
  };

  const filterElektronik = (event) => {
    let nama_kategori = "Elektronik";
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterHobi").classList.remove("bg-violet-400");
    document.getElementById("filterHobi").classList.add("bg-sky-400");
    document
      .getElementById("filterKendaraan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKendaraan").classList.add("bg-sky-400");
    document.getElementById("filterBaju").classList.remove("bg-violet-400");
    document.getElementById("filterBaju").classList.add("bg-sky-400");
    document.getElementById("filterAll").classList.remove("bg-violet-400");
    document.getElementById("filterAll").classList.add("bg-sky-400");
    document
      .getElementById("filterKesehatan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKesehatan").classList.add("bg-sky-400");
    // dispatch(getProductByKategori(nama_kategori));
  };

  const filterKesehatan = (event) => {
    let nama_kategori = "Kesehatan";
    event.currentTarget.classList.remove("bg-sky-400");
    event.currentTarget.classList.add("bg-violet-400");
    document.getElementById("filterHobi").classList.remove("bg-violet-400");
    document.getElementById("filterHobi").classList.add("bg-sky-400");
    document
      .getElementById("filterKendaraan")
      .classList.remove("bg-violet-400");
    document.getElementById("filterKendaraan").classList.add("bg-sky-400");
    document.getElementById("filterBaju").classList.remove("bg-violet-400");
    document.getElementById("filterBaju").classList.add("bg-sky-400");
    document
      .getElementById("filterElektronik")
      .classList.remove("bg-violet-400");
    document.getElementById("filterElektronik").classList.add("bg-sky-400");
    document.getElementById("filterAll").classList.remove("bg-violet-400");
    document.getElementById("filterAll").classList.add("bg-sky-400");
    // dispatch(getProductByKategori(nama_kategori));
  };

  return (
    <>
      <div id="button" className=" relative z-30">
        <h1 className="font-bold font-poppins mt-10">Telusuri Kategori</h1>
        <div className="flex w-full mt-1 overflow-x-scroll lg:hidden">
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterAll}
              id="filterAll"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Semua
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterHobi}
              id="filterHobi"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Hobi
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterKendaraan}
              id="filterKendaraan"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Kendaraan
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterBaju}
              id="filterBaju"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Baju
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterElektronik}
              id="filterElektronik"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Elektronik
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterKesehatan}
              id="filterKesehatan"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Kesehatan
            </button>
          </div>
        </div>

        <div className="flex w-full mt-1 invisible lg:visible">
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterAll}
              id="filterAll"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Semua
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterHobi}
              id="filterHobi"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Hobi
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterKendaraan}
              id="filterKendaraan"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Kendaraan
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterBaju}
              id="filterBaju"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Baju
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterElektronik}
              id="filterElektronik"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Elektronik
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
              onClick={filterKesehatan}
              id="filterKesehatan"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700 mr-1" />
              Kesehatan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonDashboard;
