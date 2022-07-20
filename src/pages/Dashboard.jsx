import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import NavDashboard from '../components/NavDashboar'
import ButtonDashboard from '../components/ButtonDashboard'
import CardDashboard from '../components/CardDashboard'
import HeaderProduct from '../components/HeaderProduct'
import { useSelector } from 'react-redux'

import '../public/css/style.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  const [enableClick, setEnableClick] = useState(false)

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  useEffect(() => {
    if (isAuthenticated) {
      setEnableClick(true)
    }
  }, [isAuthenticated])

  return (
    <>
      {!isAuthenticated ? <NavDashboard /> : <HeaderProduct />}
      <div className="mt-10">
        <section>
          <Slider />
          <ButtonDashboard />
          <div className="mx-3 md:mx-10 lg:mx-12 px-0 lg:px-10 place-items-center grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
            <CardDashboard />
          </div>

          <div className="relative z-40" id="plus">
            <div className="flex justify-center drop-shadow-lg">
              {enableClick == true ? (
                <Link to="/addProduct">
                  <button
                    className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    + Jual
                  </button>
                </Link>
              ) : (
                <Link to="/">
                  <button
                    className="flex font-poppins bg-[#7126B5] px-6 py-2.5 text-white font-medium text-sm leading-tight rounded-[10px] shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 ml-1 mr-1"
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    + Jual
                  </button>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard
