import React from "react";

const CardName = () => {
  return (
    <>
      <div className="border-2">
        <div className="">
          <div className="flex justify-between">
            <div className="flex flex-row">
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

            <div className="flex-grow-1 ms-3">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm float-end"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardName;
