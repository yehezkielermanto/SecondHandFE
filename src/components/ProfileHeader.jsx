import React from 'react'
import '../public/css/style.css'
import { Link } from 'react-router-dom'

const ProfileHeaderComponent = () => {
  return (
    <>
      {/* Mobile Size Header */}
      <div className="w-full lg:hidden flex justify-between m-3 mb-6">
        <div className="w-20">
          <Link to="/user">
            <div className="p-0 w-10 flex justify-center hover:bg-violet-800 rounded-full">
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
          {/* <h1 className="border-solid border-2 border-orange-400">Back</h1> */}
        </div>
        <div className="w-60">
          <h1 className="text-center font-medium">Lengkapi Info Akun</h1>
          {/* <h1 className="text-center border-solid border-2 border-red-400">Lengkapi Info Akun</h1> */}
        </div>
        <div className="w-20"></div>
      </div>
      {/* Navbar */}
      <div className="invisible lg:visible flex justify-between p-3 border-b-2 border-solid border-gray-200 shadow-lg shadow-gray-200">
        <div className="w-20 bg-violet-900"></div>
        <div className="w-60">
          <h1 className="text-center font-medium">Lengkapi Info Akun</h1>
        </div>
        <div className="w-20"></div>
      </div>
    </>
  )
}

export default ProfileHeaderComponent
