import React from 'react'
import '../public/css/style.css'
import product from '../img/product.png'
import logo from '../img/logo.png'
import Slider from '../components/Slider'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'

function Dashboard() {
  return (
    <>
      <nav className="flex items-center drop-shadow-lg w-full bg-white">
        <div className="w-1/12"></div>
        <div className="flex items-center justify-start w-5/12 h-20 py-5 -mx-2">
          <img src={logo} alt="Logo" className="w-auto h-auto px-2" />

          <div className="flex items-center font-poppins">
            <input
              type="text"
              className="form-control block w-full lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[10px] m-0 text-gray-700 bg-gray-300"
              id="exampleFormControlInput"
              placeholder="cari apapun disini"
            />
          </div>
        </div>

        <div className="flex items-center justify-end w-5/12 h-20 py-5">
          <button
            className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <FiLogIn className="text-white" />
            Masuk
          </button>
        </div>
        <div className="W-1/12"></div>
      </nav>

      <div className="flex flex-warp items-center justify-center w-full mt-10">
        <section className="h-100 gradient-form">
          <Slider />
        </section>
      </div>

      <div id="button">
        <h1 className="font-bold font-poppins mt-10">Telusuri Kategori</h1>
        <div className="flex w-full mt-1">
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Semua
          </button>
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Hobi
          </button>
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Kendaraan
          </button>
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Baju
          </button>
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Elektronik
          </button>
          <button
            className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            <AiOutlineSearch className="hover:text-white text-gray-700" />
            Kesehatan
          </button>
        </div>
      </div>

      <div id="card" className="flex flex-row flex-wrap mt-5">
        <div className="inline-block w-full ml-1 mr-1 mb-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" className="w-full" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>

        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
      </div>

      <div className="relative" id="plus">
        <div className="flex justify-center drop-shadow-lg">
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            + Jual
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
