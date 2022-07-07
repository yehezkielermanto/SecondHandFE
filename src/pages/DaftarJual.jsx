import React from 'react'
import CardName from '../components/CardName'
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiOutlineCube } from "react-icons/hi";
import { FiDollarSign } from "react-icons/fi";
import HeaderProduct from "../components/HeaderProduct";
import { Link } from "react-router-dom";

const DaftarJual = () => {
  return (
    <>
      <div className="mb-5">
        <HeaderProduct />

        <div className="w-screen min-h-screen">
          <div className="lg:max-w-screen-lg lg:mx-auto">
            <div className="mb-5">
              <h1 className="lg:block font-bold text-xl my-4">
                Daftar Jual Saya
              </h1>
              <CardName />
            </div>

            <div className="w-full overflow-x-auto flex gap-2 mt-2 py-2 pl-2 lg:hidden">
              <button type="button" class="btn btn-success round">
                <HiOutlineCube />
                <small>Semua Produk</small>
              </button>

              <button type="button" class="btn btn-success round mx-2">
                <AiOutlineHeart />
                <small>Disukai</small>
              </button>

              <button type="button" class="btn btn-success round">
                <FiDollarSign />
                <small>Terjual</small>
              </button>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row w-1/5 p-0 hidden lg:flex">
                <div className="flex flex-col p-1 w-full ">
                  <div className="border-2 ">
                    <p className="font-medium text-black px-4">Kategori</p>
                  </div>
                  <div className="border-2">
                    <Link to="/">
                      <div className="flex justify-between items-center py-1 px-3">
                        <HiOutlineCube className="" />
                        <h6>Semua Produk</h6>
                        <AiOutlineArrowRight className="" />
                      </div>
                    </Link>
                  </div>
                  <div className="border-2">
                    <Link to="/">
                      <div className="flex justify-between items-center py-1 px-3">
                        <AiOutlineHeart className="" />
                        <div className="ml-0">
                          <h6 className="text-left">Diminati</h6>
                        </div>
                        <AiOutlineArrowRight className="" />
                      </div>
                    </Link>
                  </div>
                  <div className="border-2">
                    <Link to="/">
                      <div className="flex justify-between items-center py-1 px-3">
                        <FiDollarSign className="" />
                        <h6>Terjual</h6>
                        <AiOutlineArrowRight className="" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex flex-row md:w-4/5 sm:w-full flex-wrap justify-around">
                <Link to="/addProduct">
                  <div className="flex flex-col justify-center items-center sm:w-52 sm:h-40 md:w-52 md:w-48 lg:h-56 lg:w-48 border-2">
                    <AiOutlinePlus className="mx-auto my-auto" />
                    <p className="mx-auto my-auto block">Tambah Produk</p>
                  </div>
                </Link>
                <div className=" border-2 sm:w-52 sm:h-40 md:w-52 md:w-48 lg:h-56 lg:w-48 flex flex-col">
                  <div className="h-1/2 border-2">
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="w-full h-full block"
                      alt="..."
                    />
                  </div>
                  <div className="h-1/2">
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        Jam Tangan
                      </Link>
                    </p>
                    <p className="">
                      <small>Aksesoris</small>
                    </p>
                    <p className="">Rp. 250.000</p>
                  </div>
                </div>

                <div className="border-2 sm:w-52 sm:h-40 md:w-52 md:w-48 lg:h-56 lg:w-48 flex flex-col">
                  <div className="h-1/2 border-2">
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="w-full h-full block"
                      alt="..."
                    />
                  </div>
                  <div className="h-1/2">
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        Jam Tangan
                      </Link>
                    </p>
                    <p className="">
                      <small>Aksesoris</small>
                    </p>
                    <p className="">Rp. 250.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default DaftarJual
