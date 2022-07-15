import React, { useEffect, useState } from 'react'
import CardName from '../components/CardName'
import {
  FiDollarSign,
  FiBox,
  FiHeart,
  FiChevronRight,
  FiPlus,
} from 'react-icons/fi'
import HeaderProduct from '../components/HeaderProduct'
import { Link, useNavigate } from 'react-router-dom'
import daftarJual from '../img/daftarjual.png'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/usersActions'
import { getAllProducts, fetchProductsById, } from '../redux/actions/produkActions'
import { IKImage } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'

const DaftarJual = (props) => {
  const dispatch = useDispatch()
  const [produks, setProduks] = useState()

  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const { user, errorU } = useSelector((state) => state.users)
  const { product, status, errorP } = useSelector((state) => state.product)
  const { product, detailProduct } = useSelector((state) => state.product)
  const navigate = useNavigate()
  const [isAuth, setAuth] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser())
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
    // console.log(id)
    if (isAuth === true) {
      dispatch(fetchProductsById(id))
      setLoading(true)
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
        setLoading(false)
        return navigate('/productEditPage')
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

  /* useEffect(() => {
    if (status === null || status == undefined) {
      Swal.fire({
        position: "center",
        icon: "warning",
        titleText: "Sedang Memuat Daftar Produk",
        showConfirmButton: false,
      });
    }
  }) */

  /* useEffect(() => {
      if (produks != null || produks != undefined) {
        let temp = product?.barang;
        produks = temp.filter((filteredProduct) => filteredProduct.iduser === user.id);
        console.log(produks);

        if (produks == null || produks == undefined || produks == "undefined") {
          produks = null;
        }
        console.log(temp);
        console.log(`ID USER PRODUK ${product?.barang[1]?.iduser}`);
        console.log(`ID USE ${user.id}`);
      }
  }, [produks]); */

  // console.log(produks)
  // console.log(product);

  return (
    <div className="w-screen min-h-screen">
      {/* Navbar */}
      <HeaderProduct />

      {/* Content Wrap */}
      <div className="flex flex-col w-full px-4 py-8 lg:max-w-screen-lg lg:mx-auto">
        {/* Content Header */}
        <h1 className="hidden lg:block font-bold text-xl mb-4">
          Daftar Jual Saya
        </h1>
        <CardName />

        {/* Categories Table - Mobile */}
        <div className="w-full overflow-x-auto flex gap-2 mt-2 py-2 pl-2 lg:hidden gap-3">
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiBox className="mt-1 lg:mt-0" />
            Produk
          </button>
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiHeart className="mt-1 lg:mt-0" /> Diminati
          </button>
          <button className="flex gap-2 bg-[#E2D4F0] lg:bg-white focus:bg-[#7126B5] focus:text-white rounded-[8px] p-2">
            <FiDollarSign className="mt-1 lg:mt-0" /> Terjual
          </button>
        </div>

        {/* Content Body / Main */}
        <div className="lg:flex mt-4 lg:gap-5">
          {/* Categories Table - Dekstop */}
          <div className="hidden lg:flex w-56 shadow-high bg-white py-4 border rounded-[16px] flex-col gap-2 flex-none self-start">
            <p className="font-medium text-black px-4">Kategori</p>
            <div className="flex flex-col divide-y divide-[#E5E5E5]">
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
              >
                <span className="flex gap-2 items-center">
                  <FiBox className="" /> Semua Produk
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
              >
                <span className="flex gap-2 items-center">
                  <FiHeart className="" /> Diminati
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
              <button
                className={`flex justify-between items-center py-3 px-4 focus:text-[#7126B5] font-medium hover:bg-gray-200 focus:outline-none`}
              >
                <span className="flex gap-2 items-center">
                  <FiDollarSign className="" /> Terjual
                </span>
                <FiChevronRight className="text-neutral-2" />
              </button>
            </div>
          </div>

          {/* Product List */}
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5 lg:grid-cols-5 min-h-[8rem] mb-2">
            <Link
              to="/addProduct"
              className="flex flex-col justify-center items-center w-full h-full min-h-[8rem] border border-neutral-2 border-dashed text-neutral-3 hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2 focus:outline-none"
            >
              <FiPlus />
              <p className="text-center mx-5">Tambah Produk</p>
            </Link>

            {produks == null || produks == undefined ? (
              <div className="flex flex-col w-full  bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
                <div className="h-1/2">
                  <img
                    src={daftarJual}
                    className="w-full h-full block rounded-[4px] justify-center items-center"
                    alt="..."
                  />
                </div>
                <div className="mt-2">
                  <p className="h-1/2">
                    <Link
                      to="/seller/produk/detail"
                      className="text-decoration-none text-dark"
                    >
                      Jam Tangan
                    </Link>
                  </p>
                  <p className="text-[#8A8A8A]">
                    <small>Aksesoris</small>
                  </p>
                  <p className="">Rp. 250.000</p>
                </div>
              </div>
            ) : (
              // edit disini to navigate ke ProductPageEdit
              produks.map((produkList) => (
                <div className="flex flex-col w-full  bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2"
                onClick={() => handlePreview(product.id)}
                key={product.id}
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
                    <p className="">
                      <Link
                        to="/seller/produk/detail"
                        className="text-decoration-none text-dark"
                      >
                        {produkList.nama}
                      </Link>
                    </p>
                    <p className="text-[#8A8A8A]">
                      <small>Aksesoris</small>
                    </p>
                    <p>Rp.{produkList.harga}</p>
                  </div>
                </div>
              ))
            )}

            {/* <div className="flex flex-col w-full h-full bg-neutral-1 shadow-low rounded-md py-3 px-2 gap-2 border border-neutral-2  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-2">
              <div className="h-1/2">
                <img src={daftarJual} className="w-full h-full block rounded-[4px] justify-center items-center" alt="..." />
              </div>
              <div className="h-1/2 mt-2">
                <p className="">
                  <Link to="/seller/produk/detail" className="text-decoration-none text-dark">
                    Jam Tangan
                  </Link>
                </p>
                <p className="text-[#8A8A8A]">
                  <small>Aksesoris</small>
                </p>
                <p className="">Rp. 250.000</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DaftarJual
