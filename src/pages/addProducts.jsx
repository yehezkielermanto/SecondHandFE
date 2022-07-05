import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiMenu } from 'react-icons/fi'
import { Link, Navigate } from 'react-router-dom'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import ResponsiveNavLink from '../components/ResponsiveNavLink'
import { AiOutlinePlus } from 'react-icons/ai'
import { listCategory } from '../redux/actions/categoryActions'
import { newProduct, tempProduct } from '../redux/actions/produkActions'
import Swal from 'sweetalert2'
import { fetchUser } from '../redux/actions/usersActions'

export default function addProducts() {
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const { category, errorC } = useSelector((state) => state.category)
  const { status, previewProduct } = useSelector((state) => state.product)
  const { user } = useSelector((state) => state.users)

  const [namaProduk, setProduk] = useState('')
  const [hargaProduk, setHarga] = useState('')
  const [kategori, setKategori] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [gambarProduk, setGambar] = useState('')
  const [previewImg1, setPreview1] = useState('')
  const [previewImg2, setPreview2] = useState('')
  const [previewImg3, setPreview3] = useState('')
  const [previewImg4, setPreview4] = useState('')

  // handling submit button -> terbitkan produk
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(namaProduk)

    if (namaProduk === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please provide product name',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    if (hargaProduk === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please provide product price',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    if (kategori === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please select product category',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    if (deskripsi === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please provide product description',
        showConfirmButton: false,
        timer: 1500,
      })
    }
    if (gambarProduk === '') {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please input at least one picture',
        showConfirmButton: false,
        timer: 1500,
      })
    }

    if (
      namaProduk !== '' &&
      hargaProduk !== '' &&
      kategori !== '' &&
      deskripsi !== '' &&
      gambarProduk !== ''
    ) {
      dispatch(
        // dispatch formData to backend
        newProduct({
          namaProduk,
          hargaProduk,
          kategori,
          deskripsi,
          gambarProduk,
        }),
      )
    }
  }

  // -----------------------------------handle preview image
  const image1 = async (e) => {
    e.preventDefault()
    setGambar([...gambarProduk, URL.createObjectURL(e.target.files[0])])
    setPreview1({ file: URL.createObjectURL(e.target.files[0]) })
  }
  const image2 = async (e) => {
    e.preventDefault()
    setGambar([...gambarProduk, URL.createObjectURL(e.target.files[0])])
    setPreview2({ file: URL.createObjectURL(e.target.files[0]) })
  }
  const image3 = async (e) => {
    e.preventDefault()
    setGambar([...gambarProduk, URL.createObjectURL(e.target.files[0])])
    setPreview3({ file: URL.createObjectURL(e.target.files[0]) })
  }
  const image4 = async (e) => {
    e.preventDefault()
    setGambar([...gambarProduk, URL.createObjectURL(e.target.files[0])])
    setPreview4({ file: URL.createObjectURL(e.target.files[0]) })
  }
  // -----------------------------------show preview product before publish
  const handlePreview = async (e) => {
    e.preventDefault()
    // check inputan is empty or not
    if (
      namaProduk !== '' &&
      hargaProduk !== '' &&
      kategori !== '' &&
      deskripsi !== '' &&
      gambarProduk !== ''
    ) {
      dispatch(
        tempProduct({
          namaProduk,
          hargaProduk,
          kategori,
          deskripsi,
          gambarProduk,
          kota: user.idkota,
        }),
      )
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'please input all field before preview',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  //----------------useEffect nama
  useEffect(() => {
    setProduk(previewProduct.namaProduk)
    setHarga(previewProduct.hargaProduk)
    setDeskripsi(previewProduct.deskripsi)
    setKategori(previewProduct.kategori)
    if (previewProduct != '') {
      // set gambar dari redux
      setGambar(previewProduct.gambarProduk)
      // cek panjang gambar dari redux
      let gambarProdukLength = previewProduct.gambarProduk.length
      for (let i = 0; i < gambarProdukLength; i++) {
        if (gambarProdukLength == 1) {
          setPreview1({ file: previewProduct.gambarProduk[0] })
        } else if (gambarProdukLength == 2) {
          setPreview1({ file: previewProduct.gambarProduk[0] })
          setPreview2({ file: previewProduct.gambarProduk[1] })
        } else if (gambarProdukLength == 3) {
          setPreview1({ file: previewProduct.gambarProduk[0] })
          setPreview2({ file: previewProduct.gambarProduk[1] })
          setPreview3({ file: previewProduct.gambarProduk[2] })
        } else if (gambarProdukLength == 4) {
          setPreview1({ file: previewProduct.gambarProduk[0] })
          setPreview2({ file: previewProduct.gambarProduk[1] })
          setPreview3({ file: previewProduct.gambarProduk[2] })
          setPreview4({ file: previewProduct.gambarProduk[3] })
        }
      }
    }
  }, [previewProduct])

  // --------------------------------------list category
  useEffect(() => {
    ;(async () => {
      dispatch(listCategory())
      dispatch(fetchUser())
    })()
  }, [dispatch])

  // ------------------------------use effect is authenticated
  useEffect(() => {
    if (isAuthenticated) {
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please login first',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  })

  // use effect category error or user error or isAuthenticated error
  useEffect(() => {
    if (error) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }, [error])

  useEffect(() => {
    if (errorC) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: error,
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }, [errorC])

  return (
    <>
      <nav className="drop-shadow-lg pb-12w-full flex pt-8 px-4 gap-4 lg:bg-white lg:shadow-high lg:justify-between lg:py-4 lg:px-16">
        <div className="flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
          <div className="hidden lg:inline w-[5.88rem] h-8 bg-[#7126B5]"></div>
        </div>
      </nav>

      <div
        id="navmo"
        className="flex items-center font-poppins w-full sm:hidden"
      >
        <div
          onClick={() => setOpen(false)}
          className={`${
            open ? 'block' : 'hidden'
          } bg-transparent absolute w-full h-full inset-0`}
        ></div>

        <button
          onClick={() => setOpen((open) => !open)}
          className=" flex justify-center w-20 bg-gray-300 text-white ml-4 mr-4 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-700 hover:bg-opacity-50 transition"
        >
          <FiMenu size={30} className="text-gray-700" />
        </button>

        <div
          className={`${
            open ? 'block' : 'hidden'
          } bg-white absolute py-1 rounded-lg h-full inset-0 w-1/2 overflow-hidden z-10`}
        >
          <ResponsiveNavLink className="inline font-semibold top-5">
            Second Hand{' '}
            <button
              onClick={() => setOpen((open) => !open)}
              className="item-center w-fit ml-5 bg-white p-1 rounded-full cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition"
            >
              <AiOutlineCloseCircle className="text-black h-4 w-4 " />
            </button>
          </ResponsiveNavLink>
        </div>
      </div>

      {/* ------------------------------------------form input new product */}
      {status === 'edited' ? (
        <Navigate to="/product" />
      ) : (
        <form>
          {/* {!justUpdated ? ( */}
          <div className="flex flex-col h-full sm:w-full lg:w-6/12 lg:mx-auto mt-5 px-3 text-left">
            <div className="h-full sm:w-full lg:mx-auto mt-5 px-3 text-left">
              <Link to="/">
                <div className="invisible lg:visible p-0 w-10 flex justify-center hover:bg-violet-800 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block ml-0 my-1 h-5 w-5 hover:fill-neutral-50"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>

              <input
                type="hidden"
                value=""
                // onChange={(e) => setId(e.target.value)}
              />
              {/* <br /> */}
              <br />
              <p className="mb-2 text-xs font-poppins">
                Nama Produk<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                {/* <h3 className="mb-1">Nama Sekarang: {user.nama}</h3> */}
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  onChange={(e) => setProduk(e.target.value)}
                  value={namaProduk}
                  placeholder="Nama Produk"
                />
              </div>
              {/* <br/> */}
              <p className="mb-2 text-xs font-poppins">
                Harga Produk<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                {/* <h3 className="mb-1">Nama Sekarang: {user.nama}</h3> */}
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  onChange={(e) => setHarga(e.target.value)}
                  value={hargaProduk}
                  placeholder="Rp 0,00"
                />
              </div>
              {/* <br /> */}
              <p className="mb-2 text-xs font-poppins">
                Kategori<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                <select
                  class="block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  name="kategori"
                  onChange={(e) => setKategori(e.target.value)}
                >
                  <option selected value={kategori}>
                    Pilih Kategori
                  </option>
                  {category.length === 0 ? (
                    <option value="">Daftar Kategori Kosong</option>
                  ) : (
                    category.map((kategori) => (
                      <option key={kategori.id} value={kategori.id}>
                        {kategori.nama_kategori}
                      </option>
                    ))
                  )}
                </select>
              </div>
              {/* <br/> */}
              <p className="mb-2 text-xs font-poppins">
                Deskripsi<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 font-poppins">
                {/* <h3 className="mb-1">No. Handphone Sekarang: {user.nohp}</h3> */}
                <textarea
                  className="form-control block w-full px-4 py-2 lg:py-3 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-[10px] transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  value={deskripsi}
                  name="nohp"
                  onChange={(e) => setDeskripsi(e.target.value)}
                  placeholder="Contoh: Jalan Ikan Hiu 33"
                ></textarea>
              </div>
              <p className="mb-2 text-xs font-poppins">
                Foto Produk<span className="text-red-600">*</span>
              </p>
              <div className="mb-4 flex flex-row">
                {/* image 1 */}
                <label
                  for="dropzone-file1"
                  class="flex flex-col mx-2 w-full justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    {previewImg1 === '' ? (
                      <AiOutlinePlus />
                    ) : (
                      <img src={previewImg1.file} alt="image" />
                    )}
                  </div>
                  <input
                    id="dropzone-file1"
                    type="file"
                    onChange={image1}
                    className="hidden"
                  />
                </label>
                {/* image 2 */}
                <label
                  for="dropzone-file2"
                  class="flex flex-col mx-2 w-full justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    {previewImg2 === '' ? (
                      <AiOutlinePlus />
                    ) : (
                      <img src={previewImg2.file} alt="image" />
                    )}
                  </div>
                  <input
                    id="dropzone-file2"
                    type="file"
                    onChange={image2}
                    className="hidden"
                  />
                </label>
                {/* image 3 */}
                <label
                  for="dropzone-file3"
                  class="flex flex-col mx-2 w-full justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    {previewImg3 === '' ? (
                      <AiOutlinePlus />
                    ) : (
                      <img src={previewImg3.file} alt="image" />
                    )}
                  </div>
                  <input
                    id="dropzone-file3"
                    type="file"
                    onChange={image3}
                    className="hidden"
                  />
                </label>
                {/* image 4 */}
                <label
                  for="dropzone-file4"
                  class="flex flex-col mx-2 w-full justify-center items-center bg-violet-300 hover:bg-violet-400 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer "
                >
                  <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    {previewImg4 === '' ? (
                      <AiOutlinePlus />
                    ) : (
                      <img src={previewImg4.file} alt="image" />
                    )}
                  </div>
                  <input
                    id="dropzone-file4"
                    type="file"
                    onChange={image4}
                    className="hidden"
                  />
                </label>
              </div>
              <br />
              <div className="flex flex-row">
                <button
                  onClick={handlePreview}
                  className="hover:bg-violet-900 border-2 border-violet-700 hover:text-white mx-2 w-full p-1.5 rounded-lg"
                >
                  <span className="text-dark font-medium">Preview</span>
                </button>

                <button
                  onClick={handleSubmit}
                  className="bg-violet-700 hover:bg-violet-900 w-full p-1.5 rounded-lg mx-2"
                >
                  <span className="text-white font-medium">Terbitkan</span>
                </button>
              </div>

              {/* // {)}} */}
            </div>
          </div>
        </form>
      )}
    </>
  )
}
