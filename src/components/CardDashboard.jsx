import React from 'react'
import '../public/css/style.css'
import product1 from '../img/product.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/actions/produkActions'
import { useState } from 'react'
import { IKImage } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'

const CardDashboard = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)

  useEffect(() => {
    ;(async () => {
      dispatch(getAllProducts())
    })()
  }, [dispatch])

  return (
    <>
      {/* <div className="flex flex-row justify-center"> */}
      {product === undefined ? (
        <></>
      ) : (
        <>
          {product.length === 0 ? (
            <div>
              <h4 className="content-center font-semibold text-center">
                Produk Tidak Tersedia
              </h4>
            </div>
          ) : (
            product.data.barang.map((product) => (
              <div className="inline-block m-1 border border-gray-300 p-1 rounded-lg mx-2 w-1/6">
                <IKImage
                  urlEndpoint={urlImg}
                  path={product.gambarbarangs}
                  transformation={[
                    {
                      h: 96,
                      w: 96,
                    },
                  ]}
                />
                <h3 className="font-semibold">{product.nama}</h3>
                <p>{product.deskripsi}</p>
                <h3 className="font-semibold">{product.harga}</h3>
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
