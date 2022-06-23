import React from 'react'
import { FiMenu, FiSearch, FiList, FiBell, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function HeaderProduct() {
  return (
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
          <FiBell className="xl:w-5 h-full mx-2" />
          <Link to="/user">
            <FiUser className="xl:w-5 h-full mx-2" />
          </Link>
        </div>
      </div>
    </div>
  )
}
