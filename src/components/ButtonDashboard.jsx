import React from 'react'
import '../public/css/style.css'
import { AiOutlineSearch } from 'react-icons/ai'

const ButtonDashboard = () => {
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
    </>
  )
}

export default ButtonDashboard
