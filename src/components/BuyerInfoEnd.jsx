import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {useNavigate} from 'react-router-dom'
import { FiArrowLeft, FiX, FiAlertCircle } from 'react-icons/fi'
import buyer from '../img/buyer.png'
import product from '../img/productBuyer.png'

export default function BuyerInfoEnd(props) {

    const navigate = useNavigate()
    
    return (
      <section className='h-full'>
      <Header title="Info Penawar" />
  
      <div className='flex xl:justify-center lg:justify-center justify-center items-center flex-wrap'>
          <div className="w-full px-4 items-center my-8">
              <div className="lg:px-72 md:mx-12">
  
                  <button onClick={() => navigate(-1)}>
                      <FiArrowLeft className='invisible lg:visible mx-[-64px] mb-[-22px] text-2xl' />
                  </button>
              
                  <div className="flex flex-row items-center bg-white rounded-[12px] border shadow-md">
                      <div className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2 m-4">
                          <img src={buyer} />
                      </div>
                      <div className="flex flex-col justify-between leading-normal">
                          <p className="mb-1 text-black text-sm font-normal">Nama Pembeli</p>
                          <p className="font-normal text-[10px] text-neutral-3 ">Kota</p>
                      </div>
                  </div>
  
                  <p className='py-4 my-2 font-normal text-sm'>Daftar Produkmu yang Ditawar</p>
  
                  <div className="grid grid-cols-1 divide-y">
                      <div>
                          <div className="flex gap-4 py-3">
                              <img className="w-12 h-12 object-cover rounded-lg flex-none" alt="Foto Produk" src={ product } />
                              
                              <div className="flex-grow flex flex-col">
                                  <p className="text-[10px] text-neutral-3 mb-1">Penjualan Produk</p>
                                  <p className='mb-1'>Jam Tangan Casio</p>
                                  <p className='mb-1'>Rp. 20000</p>
                                  <p>Terjual Rp. 10000</p>
                              </div>
  
                              <span className="flex-none text-[10px] text-neutral-3">20 Apr, 14:04</span>
                          </div>
                      </div>
                      <div></div>
                  </div>
              </div>
          </div> 
      </div>
  </section>
  
    )
  }