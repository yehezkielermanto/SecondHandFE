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
            <div className="">
              <h1 className="lg:block font-bold text-xl mb-4">
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
                <div className="flex flex-col border-2 border-black-900 p-1 w-full ">
                  <div className="border-2 ">
                    <p className="font-medium text-black px-4">Kategori</p>
                  </div>
                  <div className="border-2">
                    <div className="flex justify-between items-center py-1 px-3">
                      <HiOutlineCube className="" />
                      <h6>Semua Produk</h6>
                      <AiOutlineArrowRight className="" />
                    </div>
                  </div>
                  <div className="border-2">
                    <div className="flex justify-between items-center py-1 px-3">
                      <AiOutlineHeart className="" />
                      <div className="ml-0">
                        <h6 className="text-left">Diminati</h6>
                      </div>
                      <AiOutlineArrowRight className="" />
                    </div>
                  </div>
                  <div className="border-2">
                    <div className="flex justify-between items-center py-1 px-3">
                      <FiDollarSign className="" />
                      <h6>Terjual</h6>
                      <AiOutlineArrowRight className="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 flex flex-row md:w-4/5 sm:w-full">
                <div class="basis-1/3 md:basis-1/3 border-2">
                  {" "}
                  <Link to="/addProduct">
                    <div className="flex flex-col justify-center items-center border-2 h-60 w-auto">
                      <AiOutlinePlus className="mx-auto my-auto" />
                      <p className="mx-auto my-auto block">Tambah Produk</p>
                    </div>
                  </Link>
                </div>
                <div class="basis-1/3 md:basis-1/3 border-2">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="">
                      <p className="">
                        <Link
                          to="/seller/produk/detail"
                          className="text-decoration-none text-dark"
                        >
                          Jam Tangan
                        </Link>
                      </p>
                      <p className="card-text text-muted mb-1">
                        <small>Aksesoris</small>
                      </p>
                      <p className="">Rp. 250.000</p>
                    </div>
                  </div>
                </div>
                <div class="basis-1/3 md:basis-1/3 border-2">
                  <div className="">
                    <img
                      src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="">
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
      </div>
    </>
  );
}


export default DaftarJual
