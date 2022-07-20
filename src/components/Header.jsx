import React from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


export default function Header(props) {
    const navigate = useNavigate()
  return (
    <div>
      <div className="drop-shadow-lg mt-8 lg:mt-0 relative z-30">
        
        {/* Header */}
        <div className="w-full flex px-4 gap-4 lg:bg-white lg:shadow-high lg:justify-between lg:py-4 lg:px-16">
          <div className="container-fluid w-full flex flex-wrap items-center lg:justify-between flex-grow lg:flex-grow-0 lg:flex lg:justify-center lg:items-center lg:gap-4">
            <Link to="/" className="hidden lg:inline w-[5.88rem] h-8 bg-[#4B1979] my-2" />
            <button className="w-8 lg:hidden" onClick={() => navigate(-1)}>
                <FiArrowLeft className='inline mx-4 text-2xl' />
            </button>
            <span className='text-xl font-bold items-center ml-5 lg:ml-0'>{props.title}</span>
            <div className='lg:w-[5.88rem] w-8'></div>
          </div>

          
        </div>
      </div>

    </div>
  )
}
