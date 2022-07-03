import React from "react";
import "../public/css/style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductByKategori,
} from "../redux/actions/produkActions";

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
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterHobi").classList.remove("bg-sky-600");
    document.getElementById("filterHobi").classList.add("bg-purple-300");
    document.getElementById("filterKendaraan").classList.remove("bg-sky-600");
    document.getElementById("filterKendaraan").classList.add("bg-purple-300");
    document.getElementById("filterBaju").classList.remove("bg-sky-600");
    document.getElementById("filterBaju").classList.add("bg-purple-300");
    document.getElementById("filterElektronik").classList.remove("bg-sky-600");
    document.getElementById("filterElektronik").classList.add("bg-purple-300");
    document.getElementById("filterKesehatan").classList.remove("bg-sky-600");
    document.getElementById("filterKesehatan").classList.add("bg-purple-300");
    dispatch(getAllProducts());
  };

  const filterHobi = (event) => {
    let kategori = "Hobi";
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterAll").classList.remove("bg-sky-600");
    document.getElementById("filterAll").classList.add("bg-purple-300");
    document.getElementById("filterKendaraan").classList.remove("bg-sky-600");
    document.getElementById("filterKendaraan").classList.add("bg-purple-300");
    document.getElementById("filterBaju").classList.remove("bg-sky-600");
    document.getElementById("filterBaju").classList.add("bg-purple-300");
    document.getElementById("filterElektronik").classList.remove("bg-sky-600");
    document.getElementById("filterElektronik").classList.add("bg-purple-300");
    document.getElementById("filterKesehatan").classList.remove("bg-sky-600");
    document.getElementById("filterKesehatan").classList.add("bg-purple-300");
    dispatch(getProductByKategori(kategori));
  };

  const filterKendaraan = (event) => {
    let kategori = "Kendaraan";
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterHobi").classList.remove("bg-sky-600");
    document.getElementById("filterHobi").classList.add("bg-purple-300");
    document.getElementById("filterAll").classList.remove("bg-sky-600");
    document.getElementById("filterAll").classList.add("bg-purple-300");
    document.getElementById("filterBaju").classList.remove("bg-sky-600");
    document.getElementById("filterBaju").classList.add("bg-purple-300");
    document.getElementById("filterElektronik").classList.remove("bg-sky-600");
    document.getElementById("filterElektronik").classList.add("bg-purple-300");
    document.getElementById("filterKesehatan").classList.remove("bg-sky-600");
    document.getElementById("filterKesehatan").classList.add("bg-purple-300");
    dispatch(getProductByKategori(kategori));
  };

  const filterBaju = (event) => {
    let kategori = "Baju";
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterHobi").classList.remove("bg-sky-600");
    document.getElementById("filterHobi").classList.add("bg-purple-300");
    document.getElementById("filterKendaraan").classList.remove("bg-sky-600");
    document.getElementById("filterKendaraan").classList.add("bg-purple-300");
    document.getElementById("filterAll").classList.remove("bg-sky-600");
    document.getElementById("filterAll").classList.add("bg-purple-300");
    document.getElementById("filterElektronik").classList.remove("bg-sky-600");
    document.getElementById("filterElektronik").classList.add("bg-purple-300");
    document.getElementById("filterKesehatan").classList.remove("bg-sky-600");
    document.getElementById("filterKesehatan").classList.add("bg-purple-300");
    dispatch(getProductByKategori(kategori));
  };

  const filterElektronik = (event) => {
    let kategori = "Elektronik";
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterHobi").classList.remove("bg-sky-600");
    document.getElementById("filterHobi").classList.add("bg-purple-300");
    document.getElementById("filterKendaraan").classList.remove("bg-sky-600");
    document.getElementById("filterKendaraan").classList.add("bg-purple-300");
    document.getElementById("filterBaju").classList.remove("bg-sky-600");
    document.getElementById("filterBaju").classList.add("bg-purple-300");
    document.getElementById("filterAll").classList.remove("bg-sky-600");
    document.getElementById("filterAll").classList.add("bg-purple-300");
    document.getElementById("filterKesehatan").classList.remove("bg-sky-600");
    document.getElementById("filterKesehatan").classList.add("bg-purple-300");
    dispatch(getProductByKategori(kategori));
  };

  const filterKesehatan = (event) => {
    let kategori = "Kesehatan";
    event.currentTarget.classList.remove("bg-purple-300");
    event.currentTarget.classList.add("bg-sky-600");
    document.getElementById("filterHobi").classList.remove("bg-sky-600");
    document.getElementById("filterHobi").classList.add("bg-purple-300");
    document.getElementById("filterKendaraan").classList.remove("bg-sky-600");
    document.getElementById("filterKendaraan").classList.add("bg-purple-300");
    document.getElementById("filterBaju").classList.remove("bg-sky-600");
    document.getElementById("filterBaju").classList.add("bg-purple-300");
    document.getElementById("filterElektronik").classList.remove("bg-sky-600");
    document.getElementById("filterElektronik").classList.add("bg-purple-300");
    document.getElementById("filterAll").classList.remove("bg-sky-600");
    document.getElementById("filterAll").classList.add("bg-purple-300");
    dispatch(getProductByKategori(kategori));
  };

  return (
    <>
      <div id="button">
        <h1 className="font-bold font-poppins mt-10">Telusuri Kategori</h1>
        <div className="flex w-full mt-1 snap-x bg-scroll">
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
