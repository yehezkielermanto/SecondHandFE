import React from 'react'
import { Link } from 'react-router-dom'

const CardName = () => {
  return (
    <>
      <div className="border p-4 rounded-[16px]">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-row mx-2">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50"
                className="rounded"
                alt="..."
              />
              <div className="text-start mx-3 flex flex-col">
                <h6 className="font-medium">Nama Penjual</h6>
                <p className="text-muted">
                  <small>Kota</small>
                </p>
              </div>
            </div>

            <div className="flex-grow-1 ms-3">
              <Link to="/user/profile">
                <button
                  type="button"
                  className="btn btn-outline-primary bg-white  border border-[#7126B5] mt-2 px-2 btn-sm float-end font-medium rounded-[8px]"
                >
                  Edit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardName
