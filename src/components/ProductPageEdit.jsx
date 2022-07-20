import React, { useState, useEffect } from 'react'
import { FiSearch, FiList, FiBell, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IKImage } from 'imagekitio-react'
import {
  emptyDetailProduct,
  fetchProductsById,
  fetchProfileSeller,
} from '../redux/actions/produkActions'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Swal from 'sweetalert2'
import HeaderProduct from './HeaderProduct'

export default function ProductPageEdit() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { detailProduct, seller } = useSelector((state) => state.product)
  const [isLoading, setLoading] = useState('')

  const handleToEdit = (id) => {
    console.log(id)
    try {
      dispatch(fetchProductsById(id))
      return navigate('/editProduct')
    } catch (error) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: error,
        showConfirmButton: false,
        timer: 1500,
      })
      dispatch(logout())
    }
  }
  useEffect(() => {
    if (detailProduct) {
      dispatch(
        fetchProfileSeller({
          idkota: detailProduct.user.idkota,
          idgambar: detailProduct.user.gambar,
        }),
      )
    }
    // console.log(detailProduct)
  }, [detailProduct])

  useEffect(() => {
    if (detailProduct == '' && seller === '') {
      // return navigate('/daftarjual')
    } else {
      setLoading('false')
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Produk berhasil dimuat',
        showConfirmButton: false,
        timer: 1300,
      })
    }
  }, [detailProduct])

  const handleBack = () => {
    dispatch(emptyDetailProduct())
    return navigate('/daftarjual')
  }

  return (
    <div className="w-screen min-h-screen">
      <section>
        <HeaderProduct />
      </section>
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

            <button
              className="hidden md:block w-full border border-[#7126B5] hover:bg-[#EEEEEE] bg-white font-medium text-neutral-5 text-center py-2 mt-4 rounded-lg"
              onClick={() => handleToEdit(detailProduct.id)}
              key={detailProduct.id}
            >
              Edit
            </button>
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
    </div>
  )
}
