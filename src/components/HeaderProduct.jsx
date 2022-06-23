import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FiArrowLeft, FiSearch, FiList, FiBell, FiUser} from 'react-icons/fi'


export default function Header(props) {
    const navigate = useNavigate()
  return (
    <nav className="sticky top-0  w-full flex flex-wrap items-center justify-between py-4 bg-white text-black 
    shadow-none lg:shadow-md navbar navbar-expand-lg navbar-light">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between lg:justify-around">
            <div className="hidden flex-end lg:inline w-[5.88rem] h-8 bg-[#4B1979]"></div>
                <button className="w-8 lg:hidden" onClick={() => navigate(-1)}>
                    <FiArrowLeft className='inline mx-4 text-2xl' />
                </button>
				<div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
					<input
						className="w-full h-full bg-transparent"
						placeholder="Cari di sini ..."
					/>
					<FiSearch className="text-2xl" />
				</div>
                <span className='text-base'></span>
                <div className="hidden lg:flex">
					<FiList className="xl:w-5 h-full mx-2" />
					<FiBell className="xl:w-5 h-full mx-2" />
					<FiUser className="xl:w-5 h-full mx-2" />
				</div>
       </div>    
   </nav>
  )
}
