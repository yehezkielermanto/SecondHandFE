import React, { useState, useEffect } from 'react'
import { FiSearch, FiList, FiBell, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/usersActions'
import { IKImage } from 'imagekitio-react'
import { editProduct, updateProduct } from '../redux/actions/produkActions'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Swal from 'sweetalert2'
import HeaderProduct from './HeaderProduct'

export default function PreviewEditPage() {
  const dispatch = useDispatch()
  const { status, previewProduct, detailProduct } = useSelector(
    (state) => state.product,
  )
  const { user, errorU } = useSelector((state) => state.users)
  const handleEdit = async (e) => {
    e.preventDefault()
    dispatch(
      editProduct({
        namaProduk: previewProduct.namaProduk,
        hargaProduk: previewProduct.hargaProduk,
        kategori: previewProduct.kategori,
        deskripsi: previewProduct.deskripsi,
        gambar: previewProduct.gambar,
        dataGambar: previewProduct.dataGambar,
        image: previewProduct.fileImage,
      }),
    )
  }

  const handlePublish = async (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'Sedang update Barang',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })
    dispatch(
      updateProduct({
        id: detailProduct.id,
        namaProduk: previewProduct.namaProduk,
        hargaProduk: previewProduct.hargaProduk,
        kategori: previewProduct.kategori,
        deskripsi: previewProduct.deskripsi,
        gambar: previewProduct.gambar,
        dataGambar: previewProduct.dataGambar,
        image: previewProduct.fileImage,
      }),
    )
  }

  // ---------------------------get user data
  useEffect(() => {
    ;(async () => {
      dispatch(fetchUser())
    })()
  }, [dispatch])

  return (
    <>
      {status === 'updated' ? (
        <Navigate to="/daftarjual" />
      ) : status !== 'viewEdit' ? (
        <Navigate to="/editProduct" />
      ) : (
        <div className="w-screen min-h-screen">
          <HeaderProduct />
          <div className="flex flex-col md:flex-row md:mx-auto md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
            <div className="w-full aspect-[6/5] relative md:w-3/5 md:flex-shrink-0 ">
              <Carousel
                showThumbs={false}
                showArrows={true}
                showStatus={false}
                infiniteLoop={true}
              >
                {previewProduct.dataGambar.map((gambar) => (
                  <IKImage
                    urlEndpoint={urlImg}
                    path={gambar}
                    className="w-full aspect-[6/5] object-cover md:rounded-xl"
                  />
                ))}
                {previewProduct.gambar.map((gambar) => (
                  <img
                    className="w-full aspect-[6/5] object-cover md:rounded-xl"
                    src={gambar}
                  />
                ))}
              </Carousel>
              <button className="absolute top-4 left-4 rounded-full w-8 h-8 bg-white flex justify-center items-center">
                <FiArrowLeft />
              </button>
            </div>

            <div className="px-4 flex flex-col relative bottom-2 gap-4 md:flex-grow md:bottom-0 ">
              <div className="w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
                <h1 className="font-medium">{previewProduct.namaProduk}</h1>
                <p className="text-sm text-neutral-3">
                  {previewProduct.namaKategori}
                </p>
                <p className="">Rp {previewProduct.hargaProduk}</p>

                <button
                  className="hidden md:block w-full bg-[#7126B5] hover:bg-[#8f48cf] font-medium text-white text-center py-2.5 mt-4 rounded-lg"
                  onClick={handlePublish}
                >
                  Terbitkan
                </button>

                <button
                  className="hidden md:block w-full border border-[#7126B5] hover:bg-[#EEEEEE] bg-white font-medium text-neutral-5 text-center py-2 mt-4 rounded-lg"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>

              <div className="flex bg-white rounded-xl py-4 shadow-low gap-4 p-4 w-full relative md:w-4/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.15)] bg-white">
                <IKImage
                  className="h-14 aspect-square rounded-xl object-cover"
                  urlEndpoint={urlImg}
                  path={user.imgFileData.filePath}
                />
                <div className="flex flex-col justify-center">
                  <h1 className="font-medium">{user.nama}</h1>
                  <p className="text-sm text-neutral-3">
                    {previewProduct.kota}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-5 px-4 mt-2 mb-10 md:max-w-screen-lg md:mt-4 md:mx-auto md:px-0 md:pb-0 ">
            <div className="w-full relative md:w-3/5 md:flex-shrink-0 p-4 rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.15)] bg-white mt-3">
              <h1 className="font-medium mb-2">Deskripsi</h1>
              <p className="text-sm font-regular lg:leading-tight leading-normal text-[#8A8A8A] dark:text-[#8A8A8A]">
                {previewProduct.deskripsi}
              </p>
            </div>
          </div>

          <div className="fixed w-full bottom-4 px-4 md:hidden">
            <button
              className="bg-[#7126B5] font-medium text-white text-center py-4 w-full rounded-xl"
              onClick={handlePublish}
            >
              Terbitkan
            </button>
          </div>
        </div>
      )}
    </>
  )
}
