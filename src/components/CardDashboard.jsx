import React from 'react'
import '../public/css/style.css'
import product1 from '../img/product.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchProductsById,
  filterProducts,
  getAllProducts,
} from '../redux/actions/produkActions'
import { useState } from 'react'
import { IKImage } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Swal from 'sweetalert2'
import { fetchUser } from '../redux/actions/usersActions'
import { useNavigate } from 'react-router-dom'

const CardDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)
  const { isAuthenticated } = useSelector((state) => state.auth)
  // const { user } = useSelector((state) => state.users)

  useEffect(() => {
    ;(async () => {
      if (isAuthenticated) {
        dispatch(fetchUser())
        dispatch(filterProducts())
      } else {
        dispatch(getAllProducts())
      }
    })()
  }, [dispatch, isAuthenticated])

  const handlePreview = (id) => {
    console.log(id)
    dispatch(fetchProductsById(id))
    return navigate('/productbuyer')
  }

  return (
    <>
      {/* <div className="flex flex-row justify-center"> */}
      {product === [] ? (
        <></>
      ) : (
        <>
          {product.barang === undefined ? (
            <div>
              <h4 className="content-center font-semibold text-center my-4">
                Produk Tidak Tersedia
              </h4>
            </div>
          ) : (
            product?.barang?.map((product) => (
              <div
                className="inline-block m-1 p-1 border border-gray-300 rounded-lg mx-2 w-1/6 hover:cursor-pointer"
                onClick={() => handlePreview(product.id)}
              >
                <IKImage
                  urlEndpoint={urlImg}
                  path={product.gambarProduk.filePath}
                  className="object-cover w-full h-48 rounded-lg"
                />
                <h3 className="font-semibold p-1">{product.nama}</h3>
                <p className="p-1">{product.kategori.nama_kategori}</p>
                <h3 className="font-semibold p-1">{product.harga}</h3>
              </div>
            ))
          )}
        </>
      )}
      {/* </div> */}
    </>
  )
}

export default CardDashboard
