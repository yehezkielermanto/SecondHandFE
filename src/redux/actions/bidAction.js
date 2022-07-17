import Swal from 'sweetalert2'
import { CREATE_TRANSACTION, PRODUCT_ERROR } from './types'
const { REACT_APP_URLENDPOINT } = process.env

export const createBid = (params) => async (dispatch) => {
  const { productId, sellerId } = params
  try {
    // masukkan ke tabel transaksi
    const response = await fetch(
      REACT_APP_URLENDPOINT +
        '/api/v1/transaction?' +
        new URLSearchParams({ sellerid: sellerId, productid: productId }),
      {
        method: 'post',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    )
    const data = await response.json()
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}

export const fetchTrans = () => async (dispatch) => {
  try {
    // ambil data dari transaksi
    const fetchTransaction = await fetch(
      REACT_APP_URLENDPOINT + '/api/v1/transaction',
      { method: 'get', headers: { 'Content-Type': 'application/json' } },
    )

    const transaction = await fetchTransaction.json()

    // ambil gambar barang
    console.log(transaction.transaction.length)
    let i = 0
    let gambar = []
    while (i < transaction.transaction.length) {
      // action komunikasi dengan backend untuk ambil detail gambar dari imagekit
      const fetchImgDetail = await fetch(
        `${REACT_APP_URLENDPOINT}/api/v1/products/picture/${transaction.transaction[i].barang.gambarbarangs[0].gambar}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } },
      )
      const imgDetail = await fetchImgDetail.json()
      transaction.transaction[i].gambarProduk = imgDetail.gambar
      i++
    }
    dispatch({ type: CREATE_TRANSACTION, payload: transaction })
  } catch (error) {
    console.log(error.message)
    dispatch({ type: PRODUCT_ERROR })
  }
}
