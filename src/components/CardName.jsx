import React from "react";

const CardName = () => {
  return (
      <div className="card shadow round my-4">
        <div className="card-body">
          <div className="d-flex align-items-center ps-3">
            <div className="flex flex-row">
              <img
                src="https://via.placeholder.com/50/50"
                className="rounded"
                alt="..."
              />
              <div className="text-start mx-3">
                <h6 className="card-title">Nama Penjual</h6>
                <p className="card-text text-muted">
                  <small>Kota</small>
                </p>
              </div>
            </div>

            <div className="flex-grow-1 ms-3">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm float-end"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CardName;
