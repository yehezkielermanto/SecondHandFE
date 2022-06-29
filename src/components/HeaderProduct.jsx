import React, { useState }from 'react'
import { FiMenu, FiSearch, FiList, FiBell, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import product from "../img/product.png";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function HeaderProduct() {
  const [open,setOpen]=useState(false);
  return (
    <div>
    <div className="drop-shadow-lg pb-12">
      {/* Header */}
      <div className="w-full flex pt-8 px-4 gap-4 lg:bg-white lg:shadow-high lg:justify-between lg:py-4 lg:px-16">
        <button
          className="w-12 h-12 p-3 bg-white rounded-2xl lg:hidden"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <FiMenu className="w-full h-full" />
        </button>

        <div className="flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
          <div className="hidden lg:inline w-[5.88rem] h-8 bg-[#7126B5]"></div>
          <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
            <input
              className="w-full h-full bg-transparent"
              placeholder="Cari di sini ..."
            />
            <FiSearch className="text-2xl" />
          </div>
        </div>

        <div className="hidden lg:flex">
          <FiList className="xl:w-5 h-full mx-2" />

          

          <button 
          onClick={()=>setOpen((open)=>!open)}
          className=" flex justify-center w-10 bg-transparent text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition">
          <FiBell className="xl:w-5 h-full mx-2 text-black" />
          </button>

          

          <Link to="/user">
            <FiUser className="xl:w-5 h-full mx-2" />
          </Link>
        </div>
      </div>
      </div>

<div
  onClick={()=>setOpen(false)}
  className={`${open?'block':'hidden'} bg-transparent absolute w-full h-full inset-0`} >
</div>

<div className={`${open?'block':'hidden'} bg-white absolute rounded-lg h-fit mr-0 right-0 top-6 mt-10 w-1/3 overflow-hidden z-50`}>

<ResponsiveNavLink href="">
  <div className="flex border border-gray-300 p-1">
  <img src={product} alt="" className="w-20 h-15"/>
  <div className='inline-block pl-2'>
  <p className='font-semibold'>jam tangan cosmos</p>
  <p>asadasdasd</p>
  <p className='font-semibold'>Rp.00000</p></div>
  </div>
</ResponsiveNavLink>
<ResponsiveNavLink href="">
  <div className="flex border border-gray-300 p-1">
  <img src={product} alt="" className="w-20 h-15"/>
  <div className='inline-block pl-2'>
  <p className='font-semibold'>jam tangan cosmos</p>
  <p>asadasdasd</p>
  <p className='font-semibold'>Rp.00000</p></div>
  </div>
</ResponsiveNavLink>
<ResponsiveNavLink href="">
  <div className="flex border border-gray-300 p-1">
  <img src={product} alt="" className="w-20 h-15"/>
  <div className='inline-block pl-2'>
  <p className='font-semibold'>jam tangan cosmos</p>
  <p>asadasdasd</p>
  <p className='font-semibold'>Rp.00000</p></div>
  </div>
</ResponsiveNavLink>

</div>

</div>
  )
}
