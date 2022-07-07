import React, { useState } from "react";
import "../public/css/style.css";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import product from "../img/product.png";
import ResponsiveNavLink from "../components/ResponsiveNavLink";

const Notification = () => {
  const [open,setOpen]=useState(false);
    return (
      <>
<nav className="flex items-center drop-shadow-lg font-poppins w-full bg-white mb-5 p-3">



<button 
onClick={()=>setOpen((open)=>!open)}
className=" flex justify-center w-15 bg-transparent text-white ml-3 mr-3 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition">
  <FiMenu size={25} className="text-black"/>
</button>



<div className="flex">
            <h1 className="font-bold font-poppins" >Notifikasi</h1>
          </div>

</nav>

<div
onClick={()=>setOpen(false)}
className={`${open?'block':'hidden'} bg-transparent absolute w-full h-full inset-0`} 
></div>

<div className={`${open?'block':'hidden'} bg-white absolute py-1 rounded-lg h-full inset-0 w-1/2 overflow-hidden z-10`}>
<ResponsiveNavLink><p className=" inline font-semibold mt-10">Second Hand</p><button onClick={()=>setOpen((open)=>!open)}
className="item-center w-fit ml-5 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition"><AiOutlineCloseCircle className="text-black h-4 w-4 "/></button>
</ResponsiveNavLink>
  <ResponsiveNavLink href="/">Home</ResponsiveNavLink>
  <ResponsiveNavLink href="/notif">Notifikasi</ResponsiveNavLink>
  <ResponsiveNavLink href="/product">Daftar Jual</ResponsiveNavLink>
  <ResponsiveNavLink href="/profile">Akun Saya</ResponsiveNavLink>
</div>

<Link to="/notif">
<div className="flex border border-gray-300 p-1 ml-3 mr-3 mb-1">
  <img src={product} alt="" className="w-20 h-15"/>
  <div className='inline-block pl-2'>
  <p className='font-semibold'>jam tangan cosmos</p>
  <p>asadasdasd</p>
  <p className='font-semibold'>Rp.00000</p></div>
  </div>
  </Link>
<Link to="/notif">
<div className="flex border border-gray-300 p-1 ml-3 mr-3 mb-1">
  <img src={product} alt="" className="w-20 h-15"/>
  <div className='inline-block pl-2'>
  <p className='font-semibold'>jam tangan cosmos</p>
  <p>asadasdasd</p>
  <p className='font-semibold'>Rp.00000</p></div>
  </div>
  </Link>

      </>
    );
}

export default Notification;