import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiX } from 'react-icons/fi'
import { FiSearch, FiList, FiBell, FiUser } from 'react-icons/fi'
import Image from '../img/productDetails.png'
import Seller from '../img/seller.png'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import { Input } from 'antd'
import product from '../img/productBuyer.png'
import { useDispatch, useSelector } from 'react-redux'
import { IKImage } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import {
  emptyDetailProduct,
  fetchProfileSeller,
  getAllProducts,
} from '../redux/actions/produkActions'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { createBid, fetchTrans } from '../redux/actions/bidAction'
import HeaderProduct from './HeaderProduct'

export default function ProductBuyer13() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // ambil detail products dari redux
  const { detailProduct, seller } = useSelector((state) => state.product)
  const { transaction } = useSelector((state) => state.bid)
  const { user } = useSelector((state) => state.users)
  const [isModalAcceptShow, setModalAcceptShow] = useState(false)
  const isModalShow = isModalAcceptShow
  const [isLoading, setLoading] = useState(false)
  // state harga
  const [price, setPrice] = useState(null)
  const [bidProduct, setBidProduct] = useState('')

  useEffect(() => {
    if (isLoading == false) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Produk Berhasil Termuat',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    if (detailProduct != '') {
      dispatch(
        fetchProfileSeller({
          idkota: detailProduct.user.idkota,
          idgambar: detailProduct.user.gambar,
        }),
      )
    }
    if (detailProduct == '' && seller == '') {
      return navigate('/')
    }

    dispatch(fetchTrans())
  }, [dispatch])

  useEffect(() => {
    if (transaction != undefined) {
      let tempTrans = transaction.transaction
      let filterTemp = tempTrans?.filter(function (bid) {
        return (
          bid.iduser_seller == detailProduct.iduser &&
          bid.idbarang == detailProduct.id &&
          bid.iduser == user.id &&
          bid.status_terima == null
        )
      })
      setBidProduct(filterTemp)
    }
  }, [transaction])

  const handleCloseModal = () => {
    setModalAcceptShow(false)
  }
  const handleOpenAcceptModal = () => {
    if (user.idkota == null || user.alamat == null || user.nohp == null) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'mohon isikan data diri terlebih dahulu',
        showConfirmButton: false,
        timer: 1500,
      })
      return navigate('/user/profile')
    } else {
      setModalAcceptShow(true)
    }
  }

  const handleBack = () => {
    dispatch(emptyDetailProduct())
    return navigate('/')
  }

  // button bid products
  const handleSubmitBid = async (e) => {
    e.preventDefault()
    dispatch(
      createBid({
        price,
        productId: detailProduct.id,
        sellerId: detailProduct.iduser,
      }),
    )
    setModalAcceptShow(false)
    setBidProduct(true)
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.resumeTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      },
    })

    Toast.fire({
      icon: 'success',
      title: 'Harga tawarmu berhasil dikirim ke penjual',
    })
  }

  return (
    <div className="w-screen min-h-screen">
      {/* navbar */}
      <HeaderProduct />
      <div className="flex flex-col md:flex-row md:mx-auto md:max-w-screen-lg md:mt-5 md:mx-auto md:px-0 md:pb-0 ">
        <div className="w-full aspect-[6/5] relative md:w-3/5 md:flex-shrink-0 ">
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
          >
            {detailProduct?.gambarProduk?.map((gambar) => (
              <IKImage
                key={gambar.fileId}
                urlEndpoint={urlImg}
                path={gambar.filePath}
                className="w-full aspect-[6/5] object-cover md:rounded-xl"
              />
            ))}
          </Carousel>
          <button
            onClick={handleBack}
            className="absolute top-4 left-4 rounded-full w-8 h-8 bg-white flex justify-center items-center"
          >
            <FiArrowLeft />
          </button>
        </div>

        <div className="px-4 flex flex-col relative bottom-2 gap-4 md:flex-grow md:bottom-0 ">
          <div className="w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
            <h1 className="font-medium">{detailProduct.nama}</h1>
            <p className="text-sm text-[#8A8A8A] dark:text-[#8A8A8A] mb-3">
              {detailProduct.kategori?.nama_kategori}
            </p>
            <p className="">Rp {detailProduct.harga}</p>
            {bidProduct == '' ? (
              <button
                onClick={handleOpenAcceptModal}
                className="hidden md:block w-full bg-[#7126B5] font-medium text-white text-center py-2 mt-4 rounded-lg"
              >
                Saya Tertarik dan Ingin Nego
              </button>
            ) : (
              <button
                disabled={true}
                className="bg-[#D0D0D0] font-medium text-white text-center py-4 w-full rounded-xl"
              >
                Menunggu respon penjual
              </button>
            )}
          </div>

          <div className="flex bg-white rounded-xl py-4 shadow-low gap-4 p-4 w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
            <IKImage
              urlEndpoint={urlImg}
              path={seller?.imgDetail?.gambar?.filePath}
              className="h-14 aspect-square rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center ml-3">
              <h1 className="font-medium">{detailProduct.user?.nama}</h1>
              <p className="text-sm text-neutral-3">{seller.kota}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5 px-4 mt-2 mb-10 md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
        <div className="w-full relative md:w-3/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white mt-5">
          <h1 className="font-medium mb-5">Deskripsi</h1>
          <p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A]">
            {detailProduct.deskripsi}
          </p>
        </div>
      </div>

      {/* Mobile version */}
      <div className="fixed w-full bottom-4 px-4 md:hidden">
        {bidProduct == '' ? (
          <button
            onClick={handleOpenAcceptModal}
            className="bg-[#7126B5] font-medium text-white text-center py-4 w-full rounded-xl"
          >
            Saya Tertarik dan Ingin Nego
          </button>
        ) : (
          <button
            disabled={true}
            className="bg-[#D0D0D0] font-medium text-white text-center py-4 w-full rounded-xl"
          >
            Menunggu respon penjual
          </button>
        )}
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
            Masukkan Harga Tawarmu
          </p>
          <p className="text-sm text-neutral-3 text text-[#8A8A8A] font-normal py-2">
            Harga tawaranmu akan diketahui penual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </p>
          <div className="bg-[#EEEEEE] p-4 rounded-2xl my-2">
            <div className="flex flex-row items-center">
              <IKImage
                urlEndpoint={urlImg}
                path={detailProduct?.gambarProduk?.[0]?.filePath}
                className="w-[48px] h-[48px] rounded-[12px] border border-neutral-2"
              />

              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="mb-1 font-medium">{detailProduct.nama}</p>
                <p className="mb-1 font-regular">Rp {detailProduct.harga}</p>
              </div>
            </div>
          </div>
          <p className="text-sm font-medium pb-2 pt-2">Harga Tawar</p>
          <div className="mb-5">
            <Input
              type="text"
              className="form-control w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
                border-neutral-2 rounded-[16px] transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
              id="tawar"
              placeholder="Rp 0,00"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button
            className="flex items-center justify-center w-full py-3 mt-6 bg-[#7126B5] hover:bg-[#8f48cf] text-white font-normal text-sm rounded-[16px] 
						focus:shadow-lg focus:outline-none active:shadow-lg"
            type="button"
            onClick={handleSubmitBid}
          >
            <p>Kirim</p>
          </button>
        </div>
      </div>
    </div>
  )
}
