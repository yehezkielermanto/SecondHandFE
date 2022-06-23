import React, { useEffect } from 'react'
import '../public/css/style.css'
import Slider from '../components/Slider'
import NavDashboard from '../components/NavDashboar'
import ButtonDashboard from '../components/ButtonDashboard'
import CardDashboard from '../components/CardDashboard'
import NavbarProduk from '../components/navbarproduk'
import { useDispatch, useSelector } from 'react-redux'

function Dashboard() {
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)
  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <>
      <div>
        <section>
          {/* check state is authenticated or not */}
          {!isAuthenticated ? <NavDashboard /> : <NavbarProduk />}
          <Slider />
          <ButtonDashboard />
          <CardDashboard />
        </section>
      </div>
    </>
  )
}

export default Dashboard
