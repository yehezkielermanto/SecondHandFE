import React, { useEffect } from 'react'
import NavDashboard from '../components/NavDashboar'
import HeaderProduct from '../components/HeaderProduct'
import { useSelector } from 'react-redux'

export default function NotFound() {
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])
  return (
    <>
      {!isAuthenticated ? <NavDashboard /> : <HeaderProduct />}
      <div className="w-screen min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-8xl mt-[7.5rem]">404</h4>
          <h4 className="text-4xl">PAGE NOT FOUND</h4>
        </div>
      </div>
    </>
  )
}
