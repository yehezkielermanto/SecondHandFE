import React, { useEffect } from 'react'
import { FiCamera, FiLogOut, FiPlusCircle, FiSettings } from 'react-icons/fi'
import { FiEdit } from 'react-icons/fi'
import Header from '../components/Header'
import { FiHome, FiBell, FiPluscircle, FiList, FiUser } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/actions/usersActions'
import { logout } from '../redux/actions/authActions'
import { Link } from 'react-router-dom'
import { IKImage, IKContext } from 'imagekitio-react'
const urlImg = 'https://ik.imagekit.io/jmprup9kb'
import Swal from 'sweetalert2'

export default function AkunComponent() {
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const { user, justUpdated, errorU } = useSelector((state) => state.users)

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  useEffect(() => {
    if (errorU) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        titleText: errorU,
        showConfirmButton: false,
        timer: 1000,
      })
      // alert(errorU);
    }
  }, [errorU])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser())
    } else {
      alert('User Data Not Found !')
    }
  }, [isAuthenticated])

  const handleLogout = () => {
    dispatch(logout())
  }

  console.log(urlImg)

  return (
    <section>
      <Header title="Akun Saya" />
      {user.gambar == null ? (
        <div className="mt-5 flex text-[#4B1979] items-center justify-center text-2xl  mx-auto h-24 bg-[#E2D4F0] w-24 rounded-xl">
          <FiCamera />
        </div>
      ) : (
        <div className="mt-5 flex text-[#4B1979] items-center justify-center text-2xl  mx-auto h-24 bg-[#E2D4F0] w-24 rounded-xl overflow-hidden">
          {/* <img src={user.gambar} alt="Img Not Found" className="w-max h-max rounded-xl" /> */}
          {user?.imgFileData?.filePath && (
            <IKImage
              urlEndpoint={urlImg}
              path={user.imgFileData.filePath}
              transformation={[
                {
                  h: 96,
                  w: 96,
                },
              ]}
            />
          )}
        </div>
      )}

      <div className="lg:mx-10 md:mx-10 my-10 my-10 text-2xl first-letter pr-4 pl-4 divide-y divide-gray-300">
        <div className="items-center flex gap-5   font-medium text-sm">
          <Link
            className="w-full hover:bg-[#E2D4F0] py-6 px-3"
            to="/user/profile"
          >
            <div className="flex">
              <FiEdit className=" text-2xl text-[#4B1979] " />
              <p className="mx-4">Ubah Akun</p>
            </div>
          </Link>
        </div>
        <div className="items-center flex gap-5 py-6 px-3 font-medium text-sm">
          <FiSettings className=" text-2xl text-[#4B1979] " />
          Pengaturan Akun
        </div>

        <div className="items-center flex gap-5  font-medium text-sm ">
          <button
            className="w-full hover:bg-[#E2D4F0] py-6 px-3"
            onClick={handleLogout}
          >
            <div className="flex">
              <FiLogOut className="text-2xl text-[#4B1979]" />
              <p className="mx-4">Keluar</p>
            </div>
          </button>
        </div>
      </div>

      <div className="lg:hidden md:hidden py-2 text-ls text-center text-gray-400 font-normal">
        Version 1.0.0
      </div>

      <div className="mb-5 lg:hidden md:hidden fixed bottom-0 w-full grid grid-cols-5 ">
        <div className="flex justify-center items-center flex-col text-xs">
          <FiHome className="text-xl" />
          Home{' '}
        </div>
        <div className="flex justify-center items-center flex-col text-xs">
          <FiBell className="text-xl" /> Notifikasi
        </div>
        <div className="flex justify-center items-center flex-col text-xs">
          <FiPlusCircle className="text-xl" />
          Jual
        </div>
        <div className="flex justify-center items-center flex-col text-xs">
          <FiList className="text-xl" /> Daftar Jual
        </div>
        <div className="flex justify-center items-center flex-col text-xs text-[#4B1979]">
          <FiUser className="text-xl" />
          Akun
        </div>
      </div>
    </section>
  )
}
