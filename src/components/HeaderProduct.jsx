import { IKImage } from 'imagekitio-react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { FiMenu, FiSearch, FiList, FiBell, FiUser } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import product from '../img/product.png'
import { fetchTrans } from '../redux/actions/bidAction'
import ResponsiveNavLink from './ResponsiveNavLink'
import Sidebar from './Sidebar'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Moment from 'moment'

export default function HeaderProduct() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const { transaction } = useSelector((state) => state.bid)
  const { user } = useSelector((state) => state.users)
  const { isAuthenticated } = useSelector((state) => state.auth)
  const [trans, setTrans] = useState('')

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchTrans())
    }
  }, [dispatch])

  useEffect(() => {
    if (transaction != undefined) {
      let tempTrans = transaction.transaction
      let filterTemp = tempTrans?.filter(function (bid) {
        return bid.iduser_seller == user?.id
      })
      setTrans(filterTemp)
    }
  }, [transaction])

  return (
    <div>
      <div className="drop-shadow-lg mt-8 lg:mt-0 relative z-30">
        <Sidebar
          show={isMobileSidebarOpen}
          close={() => setMobileSidebarOpen(false)}
        />
        {/* Header */}
        <div className="w-full flex px-4 gap-4 lg:bg-white lg:shadow-high lg:justify-between lg:py-4 lg:px-16">
          <button
            className="w-12 h-12 p-3 bg-white rounded-2xl lg:hidden"
            onClick={() => setMobileSidebarOpen(true)}
          >
            <FiMenu className="w-full h-full" />
          </button>

          <div className="flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
            <Link
              to="/"
              className="hidden lg:inline w-[5.88rem] h-8 bg-[#4B1979] my-2"
            />
            <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
              <input
                className="w-full h-full bg-transparent"
                placeholder="Cari di sini ..."
              />
              <FiSearch className="text-2xl" />
            </div>
          </div>

          <div className="hidden lg:flex">
            <Link to="/daftarjual">
              <FiList className="xl:w-5 h-full mx-2 hover:text-[#7126B5]" />
            </Link>

            <button
              onClick={() => setOpen((open) => !open)}
              className=" flex justify-center w-10 bg-transparent text-white rounded-full bg-opacity-50 cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 transition"
            >
              <FiBell className="xl:w-5 h-full mx-2 text-black hover:text-[#7126B5]" />
            </button>

            <Link to="/user">
              <FiUser className="xl:w-5 h-full mx-2 hover:text-[#7126B5]" />
            </Link>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`${
          open ? 'block' : 'hidden'
        } bg-transparent absolute w-full h-full inset-0`}
      ></div>

      <div
        className={`${
          open ? 'block' : 'hidden'
        } bg-white absolute rounded-lg drop-shadow-lg h-fit mr-5 right-0 top-6 mt-10 w-1/4 overflow-hidden z-50`}
      >
        {trans != '' ? (
          <>
            {trans?.map((bid) => (
              <ResponsiveNavLink>
                <div className="flex flex-row border-b-2  border-gray-300 p-1 w-full">
                  <IKImage
                    urlEndpoint={urlImg}
                    path={bid.gambarProduk.filePath}
                    className="object-cover w-20 h-15 rounded-lg"
                  />
                  <div className="flex flex-col w-full p-2">
                    <div className="flex flex-row justify-between">
                      <p className="text-[10px]">Penawaran produk</p>
                      <p className="text-[10px]">
                        {Moment(bid.createdAt).format('DD MMM, h:mm a')}
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="font-semibold text-[14px]">
                        {bid.barang.nama}
                      </p>
                      <p className="font-semibold text-[14px]">
                        Rp {bid.barang.harga}
                      </p>
                      <p className="font-semibold text-[14px]">
                        Ditawar Rp {bid.harga_tawar}
                      </p>
                    </div>
                  </div>
                </div>
              </ResponsiveNavLink>
            ))}
          </>
        ) : (
          <div>
            <p>Notifikasi masih kosong</p>
          </div>
        )}
      </div>
    </div>
  )
}
