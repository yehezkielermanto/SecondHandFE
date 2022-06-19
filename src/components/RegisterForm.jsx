import React from 'react'
import Image from '../img/register.png'
import { Link } from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import {Input} from 'antd'

export default function Register() {
  return (
    <section className="h-full text-left">
    <div className="flex md:flex-none xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full">
      <div className="hidden md:block lg:w-6/12 items-center">
        <img src={Image} className="w-full m-0" alt="image register" />
      </div>
      <div className="lg:w-6/12 w-full px-4 md:px-0 items-center my-8">
        <div className="lg:px-12 md:mx-12">
           <Link to="/">
              <button>
                <FiArrowLeft className='lg:invisible item-left text-black text-xl'/>
              </button>
            </Link>
              <div className="text-left">
                <h4 className="text-2xl font-bold mb-4 pt-6">Daftar</h4>
              </div>
          <form>
            <p className="mb-3 text-sm">Nama</p>
            <div className="mb-5">
              <Input type="text" className="form-control rounded-[16px] w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
               border-neutral-2  transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                id="nameInput" placeholder="Nama Lengkap" />
            </div>
            <p className="mb-3 text-sm">Email</p>
            <div className="mb-5">
              <Input type="email" className="form-control rounded-[16px] w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
                border-neutral-2 transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                id="emailInput" placeholder="Contoh: johndee@gmail.com" />
            </div>
            <p className="mb-3 text-sm">Password</p>
            <div className="mb-5">
            <Input.Password
                type="password" className="form-control w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
                border-neutral-2 rounded-[16px] transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                id="emailInput" placeholder="Masukkan password" />
            </div>

              <button className="inline-block hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                Daftar
              </button>
            <div className="text-center text-sm ">
              <p>Sudah punya akun?
                <Link to="/login" >
                  <button className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out">Masuk disini
                  </button>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>           
    </div>
</section>
  )
}