import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGoogleLogin } from '@react-oauth/google'
import { Navigate, Link } from 'react-router-dom'
import Image from '../img/register.png'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from 'antd'

import 'antd/dist/antd.css'
import { loginViaForm, loginWithGoogle } from '../redux/actions/authActions'

const Login = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '') {
      alert('Email is required')
    }
    if (password === '') {
      alert('Password is required')
    }
    if (email !== '' && password !== '') {
      dispatch(loginViaForm({ email, password }))
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token))
    },
    onError: (error) => {
      alert(error)
    },
  })

  return (
    <>
      {!isAuthenticated ? (
        <section className="h-full text-left">
          <div className="flex md:flex-none xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full">
            <div className="hidden md:block lg:w-6/12 items-center">
              <img src={Image} className="w-full m-0" alt="image register" />
            </div>
            <div className="lg:w-6/12 w-full px-4 md:px-0 items-center my-8">
              <div className="lg:px-12 md:mx-12">
                <Link to="/">
                  <button>
                    <FiArrowLeft className="lg:invisible item-left text-black text-xl" />
                  </button>
                </Link>
                <div className="text-left">
                  <h4 className="text-2xl font-bold mb-4 pt-6">Masuk</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <p className="mb-3 text-sm">Email</p>
                  <div className="mb-5">
                    <Input
                      type="email"
                      className="form-control w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
                border-neutral-2 rounded-[16px] transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                      id="emailInput"
                      placeholder="Contoh: johndee@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <p className="mb-3 text-sm">Password</p>
                  <div className="mb-5">
                    <Input.Password
                      type="password"
                      className="form-control w-full px-4 py-2 font-normal text-sm text-neutral-3 bg-white 
                border-neutral-2 rounded-[16px] transition ease-in-out m-0 focus:text-gray-700 focus:outline-none"
                      id="emailInput"
                      placeholder="Masukkan password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="text-center pt-2 mb-6">
                    <button
                      className="inline-block  hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Masuk
                    </button>
                    <button
                      className="inline-block  hover:bg-[#8f48cf] bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[16px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      onClick={() => googleLogin()}
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="dark"
                    >
                      Login with Google
                    </button>
                  </div>
                  <div className="text-center text-sm ">
                    <p>
                      Belum punya akun?
                      <Link to="/register">
                        <button
                          className="text-purple-4 hover:text-purple-3 font-semibold pl-1 
                    transition duration-300 ease-in-out"
                        >
                          Daftar disini
                        </button>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Navigate to={`/`} />
      )}
    </>
  )
}
export default Login
