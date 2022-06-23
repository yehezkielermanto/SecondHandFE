import React, { useState } from "react";
import "../public/css/style.css";
import logo from "../img/logo.png";
import { FiLogIn } from "react-icons/fi";
import { BsMenuUp } from "react-icons/bs";
import { Link } from 'react-router-dom'
import ResponsiveNavLink from "./ResponsiveNavLink";

const NavDashboard = () => {
  const [open,setOpen]=useState(false);
    return (
      <>
<nav className="flex items-center drop-shadow-lg w-full bg-white invisible sm:visible">

<div className="w-1/12"></div>
<div className="flex items-center justify-start h-20 py-5 -mx-2 mr-1">
  <img src={logo}alt="Logo" className=" flex w-25 h-10 px-2 item-center"/>
</div>

<div className="flex items-center sm:justify-end font-poppins w-5/12 ml-1">
  <input
    type="text"
    className="form-control block w-full lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[10px] m-0 text-gray-700 bg-gray-300"
    id="exampleFormControlInput"
    placeholder="cari apapun disini"
    />
</div>

<div className="flex items-center justify-end w-4/12 h-20 py-5">
<Link to="/login">
<button
      className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        >
        <FiLogIn className="text-white"/>
        Masuk
    </button>
    </Link>
</div>
<div className="W-1/12"></div>
</nav>

<div id="navmo" className="flex items-center font-poppins w-full sm:hidden">

<div
onClick={()=>setOpen(false)}
className={`${open?'block':'hidden'} bg-transparent absolute w-full h-full inset-0`} 
></div>

<button 
onClick={()=>setOpen((open)=>!open)}
className=" flex justify-center w-20 bg-gray-300 text-white ml-4 mr-4 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 transition">
  <BsMenuUp size={30} className="text-gray-700 hover:text-white"/>
</button>

<div className={`${open?'block':'hidden'} bg-white absolute ml-0 mr-0 top-6 mt-10 py-1 rounded-lg w-56 overflow-hidden z-10`}>
  <ResponsiveNavLink href="/">Home</ResponsiveNavLink>
  <ResponsiveNavLink href="/profile">Profile</ResponsiveNavLink>
  <ResponsiveNavLink href="/login">Masuk</ResponsiveNavLink>
  <ResponsiveNavLink href="/register">Register</ResponsiveNavLink>
</div>

  <input
    type="text"
    className="form-control block ml-1 r-1 w-4/6 justify-end lg:px-10 py-1.5 font-normal text-gray-700 border border-solid border-gray-300 rounded-[16px] m-0 text-gray-700 bg-gray-300"
    id="exampleFormControlInput"
    placeholder="cari apapun disini"
    />
</div>
      </>
    );
}

export default NavDashboard;