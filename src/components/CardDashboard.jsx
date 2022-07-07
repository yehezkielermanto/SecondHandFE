import React from 'react'
import '../public/css/style.css'
import product1 from '../img/product.png'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllProducts } from '../redux/actions/produkActions'
import { useState } from 'react'

const CardDashboard = () => {
  const dispatch = useDispatch()
  const { product } = useSelector((state) => state.product)
  const [products, setProducts] = useState('')
  // const handleSubmit = (id) => {
  //   dispatch(getProductById(id));
  // };

  useEffect(() => {
    if (products == '') {
      dispatch(getAllProducts())
      setProducts(product.data.barang)
    } else {
      console.log('sedang memuat')
    }
  }, [product])

  // useEffect(() => {
  //   console.log('hello')
  //   if (product !== null) {
  //     // console.log(product.data.barang)
  //     setProducts(product)
  //     // console.log(products)
  //   }
  // }, [products])
  // console.log(product.data.barang)

  console.log(products)
  return <></>
}

export default CardDashboard
