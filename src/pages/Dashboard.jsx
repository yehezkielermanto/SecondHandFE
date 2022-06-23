import React from 'react'
import '../public/css/style.css'
import product from '../img/product.png'
import logo from '../img/logo.png'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'

const margin = {
  marginLeft: '100px',
  marginRight: '100px',
}
const marginleft = {
  marginLeft: '100px',
}
const marginright = {
  marginRight: '100px',
}
const marginmin = {
  marginTop: '-100px',
}

function Dashboard() {
  return (
    <>
      <nav className="flex items-center justify-between drop-shadow-lg w-full h-20 bg-white">
        <div className="flex items-center w-20 h-20 py-5 -mx-2 lg:w-1/2">
          <div style={marginleft}></div>
          <img src={logo} alt="Logo" className="w-auto h-auto px-2" />

          <div className="flex items-center font-poppins">
            <input
              type="text"
              className="form-control block w-full lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[10px] m-0 text-gray-700 bg-[#EEEEEE]"
              id="exampleFormControlInput"
              placeholder="Cari disini ..."
            />
          </div>
        </div>

        <div className="flex items-center justify-end w-20 h-20 py-5 lg:w-1/2">
          <Link to="/login">
            <button
              className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <div className=" ml-1 w-5 h-5">
                <svg width="20" height="20" xmlns="http://www.w3.org/20/svg">
                  <path
                    d="M4.167 10.833h9.883l-3.025 3.634a.834.834 0 101.283 1.066l4.167-5a.987.987 0 00.075-.125c0-.041.042-.066.058-.108a.83.83 0 00.059-.3.83.83 0 00-.059-.3c0-.042-.041-.067-.058-.108a.996.996 0 00-.075-.125l-4.167-5a.833.833 0 00-1.175-.109.832.832 0 00-.108 1.175l3.025 3.634H4.167a.833.833 0 100 1.666z"
                    fill="#fff"
                  />
                </svg>
              </div>
              Masuk
            </button>
          </Link>
        </div>
        <div style={marginright}></div>
      </nav>

      <div className="flex flex-warp items-center justify-center w-full mt-10">
        <section className="h-100 gradient-form">
          <Slider />
        </section>
      </div>

      <main style={margin}>
        <h1 className="flex w-full font-bold mt-10">Telusuri Kategori</h1>
        <div className="flex w-full mx-100 mt-1">
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Semua
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Hobi
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Kendaraan
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Baju
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Elektronik
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
          <button
            className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="dark"
          >
            Kesehatan
            <div className="w-5 h-5 my-auto ml-2">
              <svg
                width="100"
                height="100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.703 10.123a2 2 0 01-.076 3.341l-9.565 5.98c-1.332.834-3.06-.124-3.06-1.695V5.165c0-1.612 1.81-2.562 3.136-1.646l9.565 6.604z"
                  fill="#FFF"
                />
              </svg>
            </div>
          </button>
        </div>

        <div className="flex w-full mt-5">
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
        </div>

        <div className="flex w-full mt-1">
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
          <div className="inline-block w-full ml-1 mr-1 border border-gray-300 p-3">
            <img src={product} alt="" />
            <h3 className="font-bold">jam tangan cosmos</h3>
            <p>asadasdasd</p>
            <h3 className="font-bold">Rp.00000</h3>
          </div>
        </div>
      </main>

      <div style={marginmin}>
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
