import React, { useEffect } from 'react'
import CardName from '../components/CardName'
import {
  FiDollarSign,
  FiBox,
  FiHeart,
  FiChevronRight,
  FiPlus,
} from 'react-icons/fi'
import HeaderProduct from '../components/HeaderProduct'

import AllProducts from '../components/AllProducts'
import { useState } from 'react'
import BidProducts from '../components/BidProducts'
import SoldProduct from '../components/SoldProducts'

const DaftarJual = (props) => {
  const [All, setAll] = useState('')
  const [AllBid, setBid] = useState('')
  const [AllSold, setSold] = useState('')
  const [isAll, setIsAll] = useState('')

  const showAll = () => {
    setAll('show')
    setBid('hide')
    setIsAll('hide')
    setSold('hide')
  }

  const showBid = () => {
    setBid('show')
    setAll('hide')
    setIsAll('hide')
    setSold('hide')
  }

  const showSold = () => {
    setBid('hide')
    setAll('hide')
    setIsAll('hide')
    setSold('show')
  }

  useEffect(() => {
    if (All !== 'show' && AllBid !== 'show' && AllSold !== 'show') {
      setIsAll('show')
    }
  }, [isAll])

  return (
    <div className="w-screen min-h-screen">
      {/* Navbar */}
      <HeaderProduct />

      {/* Content Wrap */}
      <div className="flex flex-col w-full px-4 py-8 lg:max-w-screen-lg lg:mx-auto">
        {/* Content Header */}
        <h1 className="hidden lg:block font-bold text-xl mb-4">
          Daftar Jual Saya
        </h1>
        <CardName />

        {/* Categories Table - Mobile */}
        <div className="w-full overflow-x-auto flex gap-2 mt-2 py-2 pl-2 lg:hidden gap-3">
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiBox className="mt-1 lg:mt-0" />
            Produk
          </button>
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiHeart className="mt-1 lg:mt-0" /> Diminati
          </button>
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiDollarSign className="mt-1 lg:mt-0" /> Terjual
          </button>
        </div>

        {/* Content Body / Main */}
        <div className="lg:flex mt-4 lg:gap-5">
          {/* Categories Table - Dekstop */}
          <div className="hidden lg:flex w-56 shadow-high bg-white py-4 border rounded-[16px] flex-col gap-2 flex-none self-start">
            <p className="font-medium text-black px-4">Kategori</p>
            <div className="flex flex-col divide-y divide-[#E5E5E5]">
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
                onClick={showAll}
              >
                <span className="flex gap-2 items-center">
                  <FiBox className="" /> Semua Produk
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
                onClick={showBid}
              >
                <span className="flex gap-2 items-center">
                  <FiHeart className="" /> Diminati
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
                onClick={showSold}
              >
                <span className="flex gap-2 items-center">
                  <FiDollarSign className="" /> Terjual
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
            </div>
          </div>
          {isAll === 'show' ? <AllProducts /> : ''}
          {All === 'show' ? <AllProducts /> : ''}
          {AllBid === 'show' ? <BidProducts /> : ''}
          {AllSold === 'show' ? <SoldProduct /> : ''}
        </div>
      </div>
    </div>
  )
}

export default DaftarJual
