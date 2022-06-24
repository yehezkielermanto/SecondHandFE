import React, { useState } from "react";
import "../public/css/style.css";
import { FiLogIn } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import ResponsiveNavLink from "./ResponsiveNavLink";

const NavDashboard = () => {
  const [open,setOpen]=useState(false);
    return (
      <>
<nav className="flex items-center drop-shadow-lg w-full bg-white invisible sm:visible">

<div className="w-1/12"></div>
<div className="flex items-center font-poppins w-5/12">
<div className="flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
          <div className="hidden lg:inline w-[5.88rem] h-8 bg-[#7126B5]"></div>
          <div className="h-12 rounded-2xl py-3 px-6 text-neutral-3 flex bg-[#EEEEEE]">
            <input
              className="w-full h-full bg-transparent"
              placeholder="Cari di sini ..."
            />
            <FiSearch className="text-2xl" />
          </div>
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
        <FiLogIn className="text-white mr-1"/>
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
  <FiMenu size={30} className="text-gray-700"/>
</button>

<div className={`${open?'block':'hidden'} bg-white absolute py-1 rounded-lg h-full inset-0 w-1/2 overflow-hidden z-10`}>
  <ResponsiveNavLink className="inline font-semibold top-5">Second Hand <button onClick={()=>setOpen((open)=>!open)}
className="item-center w-fit ml-5 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition"><AiOutlineCloseCircle className="text-black h-4 w-4 "/></button>
</ResponsiveNavLink>
  <ResponsiveNavLink href="/login"><button
      className="flex font-poppins bg-[#7126B5] pr-6 pl-3 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
        type="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
        >
        <FiLogIn className="text-white"/>
        Masuk</button>
        </ResponsiveNavLink>
</div>

<div className="h-12 rounded-2xl py-3 px-6 text-neutral-3 flex bg-[#EEEEEE]">
            <input
              className="w-full h-full bg-transparent"
              placeholder="Cari di sini ..."
            />
            <FiSearch className="text-2xl" />
          </div>
</div>
      </>
    );
}

export default NavDashboard;