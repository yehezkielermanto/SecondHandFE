import React, { Component } from "react";
import "../public/css/style.css";
import logo from "../img/logo.png";

const margin = {
  marginLeft: "100px",
  marginRight: "100px",
};
const marginleft = {
  marginLeft: "100px",
};
const marginright = {
  marginRight: "100px",
};
const marginmin = {
  marginTop: "-100px",
};

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between drop-shadow-lg w-full h-20 bg-white">
        <div className="flex items-center w-20 h-20 py-5 -mx-2 lg:w-1/2">
          <div style={marginleft}></div>
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

        <div className="flex items-center justify-end w-20 h-20 py-5 lg:w-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div style={marginright}></div>
      </nav>
    </>
  );
}

export default Navbar;
