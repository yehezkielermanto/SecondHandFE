import React, { useEffect, useState } from "react";
import CardName from '../components/CardName'
import { FiDollarSign, FiBox, FiHeart, FiChevronRight, FiPlus } from "react-icons/fi";
import HeaderProduct from "../components/HeaderProduct";
import { Link } from "react-router-dom";
import daftarJual from "../img/daftarjual.png"
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actions/usersActions";
import { getAllProducts } from "../redux/actions/produkActions";
import { IKImage } from "imagekitio-react";
const urlImg = "https://ik.imagekit.io/jmprup9kb";


const DaftarJual = (props) => {
  const dispatch = useDispatch();
  let produks;

  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const { user, errorU } = useSelector((state) => state.users);
  const { product, status, errorP } = useSelector((state) => state.product);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser());
    } else {
      alert("User Data Not Found !");
      dispatch(logout());
    }
  }, [isAuthenticated]);

  /* useEffect(() => {
    if (status == "GET_ALL") {
      (async () => {
        dispatch(getAllProducts());
      })
    }
    if (product.length === 0) {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Sedang Memuat Dafta Produk",
        showConfirmButton: false,
      });
    }
  }, [status]); */

  useEffect(() => {
    (async () => {
      dispatch(getAllProducts());
    })();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: error,
        showConfirmButton: false,
        timer: 3000,
      });

      dispatch(logout());
    }
  }, [error]);

  useEffect(() => {
    if (errorU) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: errorU,
        showConfirmButton: false,
        timer: 3000,
      });
      // alert(errorU);
    }
  }, [errorU]);

  useEffect(() => {
    if (errorP) {
      Swal.fire({
        position: "center",
        icon: "error",
        titleText: errorP,
        showConfirmButton: false,
        timer: 3000,
      });

      dispatch(logout());
    }
  }, [errorP]);

  /* useEffect(() => {
    if (status === null || status == undefined) {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Sedang Memuat Daftar Produk",
        showConfirmButton: false,
      });
    }
  }) */

  produks = product?.data;

  console.log("List Produk, " + produks);
  console.log(product);

  return (
    <div className="w-screen min-h-screen">
      <HeaderProduct />

      <div className="flex flex-col w-full px-4 py-8 lg:max-w-screen-lg lg:mx-auto">

        <h1 className="hidden lg:block font-bold text-xl mb-4">Daftar Jual Saya</h1>            
         
        <CardName />

        {/* Categories */}
        <div className="w-full overflow-x-auto flex gap-2 mt-2 py-2 pl-2 lg:hidden gap-3">
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2"><FiBox className='mt-1 lg:mt-0'/>Produk</button>
          <button className='flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2'><FiHeart className='mt-1 lg:mt-0' /> Diminati</button>
          <button className='flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2'><FiDollarSign className='mt-1 lg:mt-0' /> Terjual</button>
        </div>

        <div className="lg:flex mt-4 lg:gap-5">
          {/* Dekstop Categories */}
          <div className="hidden lg:flex w-56 shadow-high bg-white py-4 border rounded-[16px] flex-col gap-2 flex-none self-start">
            <p className="font-medium text-black px-4">Kategori</p>

            <div className="flex flex-col divide-y divide-[#E5E5E5]">
              <button className={ `flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none` }>
                <span className="flex gap-2 items-center"><FiBox className=''/> Semua Produk</span>
                <FiChevronRight className= "text-neutral-2" />
              </button>
              <button className={ `flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none` }>
                <span className="flex gap-2 items-center"><FiHeart className=''/> Diminati</span>
                <FiChevronRight className="text-neutral-2"/>
              </button>
              <button className={ `flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none` }>
                <span className="flex gap-2 items-center"><FiDollarSign className=''/> Terjual</span>
                <FiChevronRight className="text-neutral-2" />
              </button>
            </div>
          </div>
          {/* Dekstop Categories */}
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 min-h-[10rem] mb-2">
              <Link to="/addProduct" className="flex flex-col justify-center items-center w-full h-full min-h-[10rem] border border-neutral-2 border-dashed text-neutral-3 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2 focus:outline-none">
                <FiPlus />
                <p className='text-center'>Tambah Produk</p>
              </Link>

              <div className="flex flex-col w-full h-full bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
                  <div className="h-1/2">
                    <img
                      src={daftarJual}
                      className="w-full h-full block rounded-[4px] justify-center items-center"
                      alt="..."
                    />
                  </div>
                  <div className="h-1/2 mt-2">
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        Jam Tangan
                      </Link>
                    </p>
                    <p className="text-[#8A8A8A]">
                      <small>Aksesoris</small>
                    </p>
                    <p className="">Rp. 250.000</p>
                  </div>
              </div>

              <div className="flex flex-col w-full h-full bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
                  <div className="h-1/2">

                    <img
                      src={daftarJual}
                      className="w-full h-full block rounded-[4px] justify-center items-center"
                      alt="..."
                    />
                  </div>
                  <div className="h-1/2 mt-2">
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        Jam Tangan
                      </Link>
                    </p>
                    <p className="text-[#8A8A8A]">
                      <small>Aksesoris</small>
                    </p>
                    <p className="">Rp. 250.000</p>
                  </div>
              </div>
              <div className="flex flex-col w-full h-full bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
                  <div className="h-1/2">
                    <img
                      src={daftarJual}
                      className="w-full h-full block rounded-[4px] justify-center items-center"
                      alt="..."
                    />
                  </div>
                  <div className="h-1/2 mt-2">
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        Jam Tangan
                      </Link>
                    </p>
                    <p className="text-[#8A8A8A]">
                      <small>Aksesoris</small>
                    </p>
                    <p className="">Rp. 250.000</p>
                  </div>
              </div>
            </div>
        </div>
      </div>

    </div>

  )
}

export default DaftarJual
