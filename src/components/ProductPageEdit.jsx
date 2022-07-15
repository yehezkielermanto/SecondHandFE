import React, { useState, useEffect } from 'react'
import { FiSearch, FiList, FiBell, FiUser, FiArrowLeft } from 'react-icons/fi'
import Image from '../img/productDetails.png'
import Seller from '../img/seller.png'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IKImage } from 'imagekitio-react'
import {
  emptyDetailProduct,
  fetchProfileSeller,
  getAllProducts,
} from '../redux/actions/produkActions'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Swal from 'sweetalert2'

export default function ProductPageEdit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { detailProduct, seller } = useSelector((state) => state.product)
  const [isLoading, setLoading] = useState(false)

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
    if (detailProduct == '' && seller == '') {
      return navigate('/')
    }
    dispatch(
      fetchProfileSeller({
        idkota: detailProduct.user.idkota,
        idgambar: detailProduct.user.gambar,
      }),
    )
  }, [dispatch])

  const handleBack = () => {
    dispatch(emptyDetailProduct())
    return navigate('/daftarjual')
  }

  return (
    <div className="w-screen min-h-screen">
      <div className="drop-shadow-lg lg:pb-10">
        <div className="w-full pt-8 px-4 gap-4 md:bg-white md:shadow-high md:justify-between md:py-4 md:px-16 hidden md:flex items-center">
          <div className="flex-grow md:flex-grow-0 md:flex md:justify-center md:items-center md:gap-4">
            <Link
              to="/"
              className="hidden lg:inline w-[5.88rem] h-8 bg-[#4B1979] my-2"
            />
            <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex md:bg-[#EEEEEE]">
              <input
                className="w-full h-full bg-transparent"
                placeholder="Cari di sini ..."
              />
              <FiSearch className="text-2xl" />
            </div>
          </div>

          <div className="flex gap-4 items-center text-2xl">
            <FiList />
            <FiBell />
            <Link to="/user">
              <FiUser className="xl:w-5 h-full mx-2" />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:mx-auto md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
        <div className="w-full aspect-[6/5] relative md:w-3/5 md:flex-shrink-0 ">
          <Carousel
            showThumbs={false}
            showArrows={true}
            showStatus={false}
            infiniteLoop={true}
          >
            {detailProduct?.gambarProduk?.map((gambar) => (
              <IKImage
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

            <button className="hidden md:block w-full bg-[#FF0000] font-medium text-white text-center py-2 mt-4 rounded-lg">
              Hapus
            </button>

            <Link to="/product">
              <button className="hidden md:block w-full border border-[#7126B5] bg-white font-medium text-neutral-5 text-center py-2 mt-4 rounded-lg">
                Edit
              </button>
            </Link>
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

      <div className="fixed w-full bottom-4 px-4 md:hidden">
        <button className="bg-[#7126B5] font-medium text-white text-center py-4 w-full rounded-xl">
          Terbitkan
        </button>
      </div>
    </div>
  )
}
