import React, { useState } from 'react'
import '../public/css/style.css'
import product from '../img/product.png'
import logo from '../img/logo.png'
import Slider from '../components/Slider'
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { BsMenuUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ResponsiveNavLink from '../components/ResponsiveNavLink'

function Dashboard() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="flex items-center drop-shadow-lg w-full bg-white invisible sm:visible">
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
          <Link to="/login">
            <button
              className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <FiLogIn className="text-white" />
              Masuk
            </button>
          </Link>
        </div>
        <div className="W-1/12"></div>
      </nav>

      <div
        id="navmo"
        className="flex items-center font-poppins w-full sm:hidden"
      >
        <div
          onClick={() => setOpen(false)}
          className={`${
            open ? 'block' : 'hidden'
          } bg-transparent absolute w-full h-full inset-0`}
        ></div>

        <button
          onClick={() => setOpen((open) => !open)}
          className=" flex justify-center w-20 bg-gray-300 text-white ml-4 mr-4 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 transition"
        >
          <BsMenuUp size={30} className="text-gray-700 hover:text-white" />
        </button>

        <div
          className={`${
            open ? 'block' : 'hidden'
          } bg-white absolute ml-0 mr-0 top-6 mt-10 py-1 rounded-lg w-56 overflow-hidden z-10`}
        >
          <ResponsiveNavLink href="/">Home</ResponsiveNavLink>
          <ResponsiveNavLink href="/profile">Profile</ResponsiveNavLink>
          <ResponsiveNavLink href="/login">Masuk</ResponsiveNavLink>
          <ResponsiveNavLink href="/register">Register</ResponsiveNavLink>
        </div>

        <input
          type="text"
          className="form-control block ml-1 r-1 w-5/6 justify-end lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[16px] m-0 text-gray-700 bg-gray-300"
          id="exampleFormControlInput"
          placeholder="cari apapun disini"
        />
      </div>

      <div className="flex flex-warp items-center justify-center w-full mt-10">
        <section className="h-100 gradient-form">
          <Slider />
        </section>
      </div>

      <div id="button">
        <h1 className="font-bold font-poppins mt-10">Telusuri Kategori</h1>
        <div className="flex w-full mt-1 snap-x">
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700" />
              Semua
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700" />
              Hobi
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700" />
              Kendaraan
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700" />
              Baju
            </button>
          </div>
          <div className="snap-center">
            <button
              className="flex font-poppins hover:bg-[#7126B5] bg-gray-300 px-6 py-2.5 hover:text-white text-gray-700 border border-solid border-gray-300 text-font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <AiOutlineSearch className="hover:text-white text-gray-700" />
              Elektronik
            </button>
          </div>
          <div className="snap-center">
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
      </div>

      <div id="card" className="flex flex-row flex-wrap mt-5 justify-center">
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" className="w-full" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>

        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
          <img src={product} alt="" />
          <h3 className="font-semibold">jam tangan cosmos</h3>
          <p>asadasdasd</p>
          <h3 className="font-semibold">Rp.00000</h3>
        </div>
        <div className="inline-block w-full m-1 border border-gray-300 p-3 basis-1/6">
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
