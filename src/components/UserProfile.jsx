import React from "react";
import { FiCamera, FiLogOut, FiPlusCircle, FiSettings } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import Header from '../components/Header';
import { FiHome, FiBell, FiPluscircle, FiList, FiUser } from "react-icons/fi";

export default function AkunComponent() {
  return (
    <section>
      <Header title="Akun Saya"/>
      <div className="mt-5 flex text-[#4B1979] items-center justify-center text-2xl  mx-auto h-24 bg-[#E2D4F0] w-24 rounded-xl">
        <FiCamera />
      </div>

      <div className="lg:mx-10 md:mx-10 my-10 my-10 text-2xl first-letter pr-4 pl-4 divide-y divide-gray-300">
        <div className="items-center flex gap-5  py-6 font-medium text-sm">
          <FiEdit className=" text-2xl text-[#4B1979] " />
           Ubah Akun
        </div>
        <div className="items-center flex gap-5 py-6 font-medium text-sm">
        <FiSettings className=" text-2xl text-[#4B1979] "/>Pengaturan Akun
        </div>
        
        <div className="items-center flex gap-5 py-6 font-medium text-sm ">
        <FiLogOut className="text-2xl text-[#4B1979]" />Keluar
        </div>
        
      </div>

      <div className="lg:hidden md:hidden py-2 text-ls text-center text-gray-400 font-normal">
        Version 1.0.0
      </div>

      <div className="mb-5 lg:hidden md:hidden fixed bottom-0 w-full grid grid-cols-5 ">

        <div className="flex justify-center items-center flex-col text-xs"><FiHome className="text-xl"/>Home </div>
        <div className="flex justify-center items-center flex-col text-xs"><FiBell className="text-xl"/> Notifikasi</div>
        <div className="flex justify-center items-center flex-col text-xs"><FiPlusCircle className="text-xl"/>Jual</div>
        <div className="flex justify-center items-center flex-col text-xs"><FiList className="text-xl" /> Daftar Jual</div>
        <div className="flex justify-center items-center flex-col text-xs text-[#4B1979]"><FiUser className="text-xl"/>Akun</div>

      </div>
    </section>
  );
}