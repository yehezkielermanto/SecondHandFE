import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiX, FiAlertCircle } from 'react-icons/fi'

const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import { IKImage } from 'imagekitio-react'
import Moment from 'moment'
import { useSelector } from 'react-redux'

export default function BuyerInfoEnd(props) {
  const navigate = useNavigate()

  // get data from redux only
  const { detailTrans } = useSelector((state) => state.bid)

  useEffect(() => {
    if (detailTrans == '') {
      return navigate('/daftarjual')
    }
  }, [detailTrans])

  return (
    <section className="h-full">
      <Header title="Info Penawar" />

      <div className="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap">
        <div className="w-full px-4 items-center my-8">
          <div className="lg:px-72 md:mx-12">
            <button onClick={() => navigate('/daftarjual')}>
              <FiArrowLeft className="invisible lg:visible mx-[-64px] mb-[-22px] text-2xl" />
            </button>

            <div className="flex flex-row items-center bg-white rounded-[12px] border shadow-md">
              <div className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2 m-4">
                <IKImage
                  className="w-12 h-12 object-cover rounded-lg flex-none"
                  urlEndpoint={urlImg}
                  path={detailTrans?.bid?.gambarUser.filePath}
                  alt="FotoPembeli"
                />
              </div>
              <div className="flex flex-col justify-between leading-normal">
                <p className="mb-1 text-black text-sm font-normal">
                  {detailTrans?.bid.user.nama}
                </p>
                <p className="font-normal text-[10px] text-neutral-3 ">
                  {detailTrans?.bid.user.kotum.nama_kota}
                </p>
              </div>
            </div>

            <p className="py-4 my-2 font-normal text-sm">
              Daftar Produkmu yang Ditawar
            </p>

            <div className="grid grid-cols-1 divide-y">
              <div>
                <div className="flex gap-4 py-3">
                  <IKImage
                    className="w-12 h-12 object-cover rounded-lg flex-none"
                    urlEndpoint={urlImg}
                    path={detailTrans?.bid?.gambarProduk.filePath}
                    alt="Foto Produk"
                  />

                  <div className="flex-grow flex flex-col">
                    <p className="text-[10px] text-neutral-3 mb-1">
                      Penjualan Produk
                    </p>
                    <p className="mb-1">{detailTrans?.bid.barang.nama}</p>
                    <p className="mb-1">Rp. {detailTrans?.bid.barang.harga}</p>
                    <p>Terjual Rp. {detailTrans?.bid.harga_tawar}</p>
                  </div>

                  <span className="flex-none text-[10px] text-neutral-3">
                    {Moment(detailTrans?.bid?.createdAt).format(
                      'DD MMM, h:mm a',
                    )}
                  </span>
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
