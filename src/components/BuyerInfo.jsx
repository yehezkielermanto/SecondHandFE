import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { useSelector, useDispatch } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { FiArrowLeft, FiX, FiAlertCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import buyer from '../img/buyer.png'
import product from '../img/productBuyer.png'
import { terimaPenawaran } from '../redux/actions/produkActions'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import { IKImage } from 'imagekitio-react'
import Moment from 'moment'
import {
  AcceptBid,
  declineTrans,
  DeniedBid,
  makeFalseStatus,
  soldProduct,
} from '../redux/actions/bidAction'

export default function BuyerInfo(props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const isAcceptProduct = window.location.pathname === '/accept-produk'

  const { terima } = useSelector((state) => state.product)
  const { detailTrans } = useSelector((state) => state.bid)
  const { user } = useSelector((state) => state.users)
  const [isAcceptProduct, setAcceptProduct] = useState(false)
  const [isModalAcceptShow, setModalAcceptShow] = useState(false)
  const [isModalDeniedShow, setModalDeniedShow] = useState(false)
  const [isModalStatusShow, setModalStatusShow] = useState(false)
  const [choose, setChoose] = useState('terima')
  const isModalShow =
    isModalAcceptShow || isModalStatusShow || isModalDeniedShow

  const handleCloseModal = () => {
    setModalAcceptShow(false)
    setModalStatusShow(false)
    setModalDeniedShow(false)
  }

  // terima tawaran
  const handleOpenAcceptModal = () => {
    setModalAcceptShow(true)
    dispatch(terimaPenawaran())
    dispatch(AcceptBid(detailTrans.bid.idbarang))
    dispatch(
      makeFalseStatus({
        iduser: detailTrans.bid.iduser,
        idbarang: detailTrans.bid.idbarang,
      }),
    )
  }
  const handleOpenDeniedModal = () => {
    setModalDeniedShow(true)
  }
  const handleOpenStatusModal = () => {
    setModalStatusShow(true)
  }

  useEffect(() => {
    if (terima == true) {
      setAcceptProduct(true)
      console.log('sudah terima')
    } else {
      console.log('belum terima')
    }
  }, [terima])

  // cek apakah detailTrans kosong
  useEffect(() => {
    if (detailTrans == undefined) {
      return navigate('/daftarjual')
    }
    if (detailTrans?.bid?.status_terima == true) {
      setAcceptProduct(true)
    }
  }, [detailTrans])

  // tolak tawaran
  const handleDeniedBid = () => {
    dispatch(DeniedBid(detailTrans.bid.id))
    setModalDeniedShow(false)
    return navigate('/daftarjual')
  }

  // button handle end transaction
  const handleEndTrans = (e) => {
    e.preventDefault()
    console.log(choose)
    if (choose == 'terima') {
      dispatch(
        soldProduct({
          idtrans: detailTrans.bid.id,
          idbarang: detailTrans.bid.idbarang,
        }),
      )
    } else {
      dispatch(
        declineTrans({
          idtrans: detailTrans.bid.id,
        }),
      )
    }
    return navigate('/BuyerInfoEnd')
  }

  const handleStateEnd = (value) => {
    setChoose(value)
  }

  return (
    <section className="h-full">
      <Header title="Info Penawar" />

      <div className="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap">
        <div className="w-full px-4 items-center my-8">
          <div className="lg:px-72 md:mx-12">
            <button onClick={() => navigate(-1)}>
              <FiArrowLeft className="invisible lg:visible mx-[-64px] mb-[-22px] text-2xl" />
            </button>

            <div className="flex flex-row items-center bg-white rounded-[12px] border shadow-md">
              <div className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2 m-4">
                <IKImage
                  urlEndpoint={urlImg}
                  path={detailTrans?.bid?.gambarUser.filePath}
                />
              </div>
              <div className="flex flex-col justify-between leading-normal">
                <p className="mb-1 text-black text-sm font-normal">
                  {detailTrans?.bid?.user.nama}
                </p>
                <p className="font-normal text-[10px] text-neutral-3 ">
                  {detailTrans?.bid?.user.kotum.nama_kota}
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
                      Penawaran Produk
                    </p>
                    <p className="mb-1">{detailTrans?.bid?.barang.nama}</p>
                    <p className="mb-1">Rp. {detailTrans?.bid?.barang.harga}</p>
                    <p>Ditawar Rp. {detailTrans?.bid?.harga_tawar}</p>
                  </div>

                  <span className="flex-none text-[10px] text-neutral-3">
                    {Moment(detailTrans?.bid?.createdAt).format(
                      'DD MMM, h:mm a',
                    )}
                  </span>
                </div>

                {/* Buttons */}
                <div
                  className={`${
                    isAcceptProduct ? 'hidden' : 'grid'
                  } grid-cols-2 lg:float-right text-center pt-4 pb-4`}
                >
                  <button
                    className="mr-2 px-[48px] py-2 inline-block bg-white border border-[#7126B5] hover:bg-gray-200 text-black font-normal text-sm leading-tight rounded-[16px] 
                                      focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7126B5] disabled:opacity-70"
                    type="button"
                    onClick={handleOpenDeniedModal}
                  >
                    Tolak
                  </button>
                  <button
                    className="ml-2 px-[48px] py-2 inline-block bg-[#7126B5] hover:bg-[#8f48cf]  text-white font-normal text-sm leading-tight rounded-[16px] 
                                      focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8f48cf] disabled:opacity-70"
                    type="button"
                    onClick={handleOpenAcceptModal}
                  >
                    Terima
                  </button>
                </div>
                <div
                  className={`${
                    isAcceptProduct ? 'grid' : 'hidden'
                  } grid grid-cols-2 lg:float-right text-center pt-4 pb-4`}
                >
                  <button
                    className="flex items-center justify-center mr-2 px-8 py-2 bg-white border border-[#7126B5] hover:bg-gray-200 font-normal text-sm leading-tight rounded-[16px] 
                                      focus:shadow-lg focus:outline-none focus:ring-offset-2 focus:ring-[#7126B5] disabled:opacity-70"
                    type="button"
                    onClick={handleOpenStatusModal}
                  >
                    Status
                  </button>
                  <button
                    className="flex items-center justify-center ml-2 px-8 py-2 bg-[#7126B5] hover:bg-[#8f48cf]  text-white font-normal text-sm leading-tight rounded-[16px] 
                                      focus:shadow-lg focus:outline-none focus:ring-offset-2 focus:ring-[#8f48cf] disabled:opacity-70"
                    type="button"
                  >
                    <p>Hubungi di</p>
                    <FaWhatsapp className="ml-2 text-sm" />
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for Modal */}
      <div
        onClick={handleCloseModal}
        className={`w-screen h-screen fixed ${
          isModalShow ? 'flex' : 'hidden'
        } items-center justify-center bg-black bg-opacity-70 top-0 left-0 z-50`}
      >
        {/* Modal for Terima */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isModalAcceptShow ? 'bg-white' : 'hidden'
          } lg:relative absolute bottom-0 p-6 w-full max-w-sm md:h-auto rounded-2xl`}
        >
          <button className="float-right">
            <FiX onClick={handleCloseModal} className="text-xl mb-2" />
          </button>
          <p className="text-sm font-medium pb-2 pt-8">
            Yeay kamu berhasil mendapat harga yang sesuai
          </p>
          <p className="text-sm text-neutral-3 font-normal py-2">
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </p>
          <div className="bg-[#EEEEEE] p-4 rounded-2xl my-2">
            <p className="text-center font-medium text-sm pb-3">
              Product Match
            </p>
            <div className="flex flex-row items-center">
              {/* modal seller tertarik untuk mengambil harga */}
              <IKImage
                className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2"
                urlEndpoint={urlImg}
                path={detailTrans?.bid?.gambarUser.filePath}
                alt="buyer"
              />
              <div className="flex flex-col justify-between ml-4">
                <p className="mb-1 font-medium text-sm">
                  {detailTrans?.bid?.user.nama}
                </p>
                <p className="font-normal text-[10px] text-neutral-3 ">
                  {detailTrans?.bid?.user.kotum.nama_kota}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center mt-4">
              <IKImage
                className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2"
                urlEndpoint={urlImg}
                path={detailTrans?.bid?.gambarProduk.filePath}
                alt="Foto Produk"
              />
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="mb-1">{detailTrans?.bid?.barang.nama}</p>
                <p className="mb-1">Rp. {detailTrans?.bid?.barang.harga}</p>
                <p>Ditawar {detailTrans?.bid?.harga_tawar}</p>
              </div>
            </div>
          </div>
          <button
            className="flex items-center justify-center w-full py-3 mt-6 bg-[#7126B5] hover:bg-[#8f48cf] text-white font-normal text-sm rounded-[16px] 
                      focus:shadow-lg focus:outline-none active:shadow-lg"
            type="button"
          >
            <p>Hubungi via Whatsapp</p>
            <FaWhatsapp className="ml-2 text-sm" />
          </button>
        </div>

        {/* Modal for Tolak */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isModalDeniedShow ? 'bg-white' : 'hidden'
          }  lg:relative absolute bottom-0 p-6 w-full max-w-sm md:h-auto rounded-2xl`}
        >
          <div className="flex justify-center items-center">
            <FiAlertCircle className="text-red-600 text-6xl" />
          </div>
          <p className="text-center text-sm font-medium pb-2 my-4">
            Apakah anda yakin ingin menolak tawaran ini?
          </p>

          <div className="grid grid-cols-2">
            <button
              onClick={handleCloseModal}
              className="flex items-center justify-center  py-2 bg-[#7126B5] hover:bg-[#8f48cf] text-white font-normal text-sm rounded-[16px] 
                          focus:shadow-lg focus:outline-none active:shadow-lg mr-2"
              type="button"
            >
              Batalkan
            </button>
            <button
              className="flex items-center justify-center  py-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-normal text-sm rounded-[16px] 
                          focus:shadow-lg focus:outline-none active:shadow-lg"
              type="button"
              onClick={handleDeniedBid}
            >
              Tolak
            </button>
          </div>
        </div>

        {/* Modal for Status */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${
            isModalStatusShow ? 'bg-white' : 'hidden'
          } lg:relative absolute bottom-0 p-6 w-full max-w-sm md:h-auto rounded-2xl`}
        >
          <button className="float-right">
            <FiX onClick={handleCloseModal} className="text-xl mb-2" />
          </button>
          <p className="text-sm font-medium pb-2 pt-8">
            Perbarui status penjualan produkmu
          </p>
          <div className="pt-6">
            <div className="flex pb-3">
              <div className="items-center h-5">
                <input
                  checked={choose == 'terima'}
                  id="radio1"
                  name="status"
                  type="radio"
                  value="terima"
                  className="accent-[#7126B5] bg-[#C4C4C4] rounded border-[#C4C4C4] focus:ring-[#C4C4C4] focus:ring-2"
                  onChange={() => handleStateEnd('terima')}
                />
              </div>
              <div className="ml-3 text-sm">
                <label for="radio1" className="font-medium text-sm">
                  Berhasil Terjual
                </label>
                <p
                  id="radio1"
                  className="text-sm font-normal text-neutral-3 my-2"
                >
                  Kamu telah sepakat menjual produk ini kepada pembeli
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="items-center h-5">
                <input
                  id="radio2"
                  name="status"
                  type="radio"
                  value="tolak"
                  className="accent-[#7126B5] bg-[#C4C4C4] rounded border-[#C4C4C4] focus:ring-[#C4C4C4] focus:ring-2"
                  onChange={() => handleStateEnd('tolak')}
                  checked={choose == 'tolak'}
                />
              </div>
              <div className="ml-3 text-sm">
                <label for="radio2" className="font-medium text-sm">
                  Batalkan Transaksi
                </label>
                <p
                  id="radio2"
                  className="text-sm font-normal text-neutral-3 my-2"
                >
                  Kamu membatalkan transaksi produk ini dengan pembeli
                </p>
              </div>
            </div>
          </div>

          <button
            className="flex items-center justify-center w-full py-3 mt-6 bg-[#7126B5] hover:bg-[#8f48cf] text-white font-normal text-sm rounded-[16px] 
                      focus:shadow-lg focus:outline-none active:shadow-lg"
            type="button"
            onClick={handleEndTrans}
          >
            Kirim
          </button>
        </div>
      </div>
    </section>
  )
}
