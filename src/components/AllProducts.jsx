import React, { useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import daftarJual from '../img/daftarjual.png'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/usersActions'
import {
  getAllProducts,
  fetchProductsById,
} from '../redux/actions/produkActions'
import { IKImage } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'

function AllProducts() {
  const dispatch = useDispatch()
  const [produks, setProduks] = useState()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const { user, errorU } = useSelector((state) => state.users)
  const { product, status, errorP, detailProduct } = useSelector(
    (state) => state.product,
  )
  const navigate = useNavigate()
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser())
      setAuth(isAuthenticated)
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: 'Akses Tidak Terautentikasi !!',
        showConfirmButton: false,
        timer: 1500,
      })
      dispatch(logout())
    }
  }, [isAuthenticated])

  useEffect(() => {
    ;(async () => {
      dispatch(getAllProducts())
      // console.log(product);
    })()
  }, [dispatch])
  // produks = product?.barang;

  const handlePreview = (id) => {
    console.log(id)
    if (isAuth === true) {
      dispatch(fetchProductsById(id))

      return navigate('/productPageEdit')
    } else {
      Swal.fire({
        title: 'Oops...',
        text: 'Tolong login terlebih dahulu',
        icon: 'error',
        confirmButtonText: 'Login',
      }).then((result) => {
        if (result.value) {
          navigate('/login')
        }
      })
    }
  }
  useEffect(() => {
    ;(async () => {
      if (detailProduct !== '') {
        return navigate('/productPageEdit')
      }
    })()
  }, [detailProduct])

  useEffect(() => {
    if (product.barang == undefined || product.barang == null) {
      /* Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Sedang Memuat Dafta Produk",
        showConfirmButton: false,
      }); */
      Swal.fire({
        title: 'Sedang Memuat Daftar Produk',
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: 'Produk Berhasil Termuat',
        showConfirmButton: false,
        timer: 1500,
      })

      let temp = product?.barang

      setProduks(
        temp.filter((filteredProduct) => filteredProduct.iduser === user.id),
      )
    }
  }, [product])

  useEffect(() => {
    if (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        titleText: error,
        showConfirmButton: false,
        timer: 3000,
      })

      dispatch(logout())
    }
  }, [error])

  useEffect(() => {
    if (errorU) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        titleText: errorU,
        showConfirmButton: false,
        timer: 3000,
      })
      // alert(errorU);
    }
  }, [errorU])

  useEffect(() => {
    if (errorP) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        titleText: errorP,
        showConfirmButton: false,
        timer: 3000,
      })

      dispatch(logout())
    }
  }, [errorP])
  return (
    <>
      {/* Product List */}
      <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-1 min-h-[8rem] mb-2">
        <Link
          to="/addProduct"
          className="flex flex-col justify-center items-center w-full h-full min-h-[8rem] border border-neutral-2 border-dashed text-neutral-3 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2 focus:outline-none"
        >
          <FiPlus />
          <p className="text-center mx-5">Tambah Produk</p>
        </Link>
      </div>

      {produks == null || produks == undefined ? (
        <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-1 min-h-[8rem] mb-2">
          <div className="flex flex-col w-full  bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
            <p className="text-center mx-5">Belum Ada Product</p>
          </div>
        </div>
      ) : (
        // edit disini to navigate ke ProductPageEdit
        produks.map((produkList) => (
          <div className="grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-1 min-h-[8rem] mb-2">
            <div
              className="flex flex-col w-full  bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2"
              onClick={() => handlePreview(produkList.id)}
              key={produkList.id}
            >
              <div className="h-1/2">
                {/* <img src={daftarJual} className="w-full h-full block rounded-[4px] justify-center items-center" alt="..." /> */}
                <IKImage
                  className="w-full h-full block rounded-[4px] justify-center items-center"
                  urlEndpoint={urlImg}
                  path={produkList?.gambarProduk?.filePath}
                />
              </div>
              <div className="h-1/2 mt-2">
                <p className="">{produkList.nama}</p>
                <p className="text-[#8A8A8A]">
                  <small>Aksesoris</small>
                </p>
                <p>Rp.{produkList.harga}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export default AllProducts
