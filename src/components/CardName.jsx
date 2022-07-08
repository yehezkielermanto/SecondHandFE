import React from 'react'
import { Link } from 'react-router-dom'

const CardName = () => {
  return (
    <>
      <div className="border-2 p-4 rounded-lg">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-row mx-2">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50"
                className="rounded"
                alt="..."
              />
              <div className="text-start mx-3">
                <h6 className="">Nama Penjual</h6>
                <p className="text-muted">
                  <small>Kota</small>
                </p>
              </div>
            </div>

            <div className="flex items-center mx-3">
              <Link to="/user/profile">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm float-end border border-violet-900 rounded-md px-2 hover:bg-violet-900 hover:text-white"
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
