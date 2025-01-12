import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function VehiclePage() {
  return (
    <body>
      {/* Account Details Section */}
      <AccountDetails />
      <div className="dashboard-container">
        <Sidebar/>
      {/* Main Content */}
      <main className="content">
        <div className="card-body anim1">
          <h2 className="text-center">Vehicle Input</h2>
          <p>
            Vehicle Code: <label id="lbl3"></label>
          </p>
        </div>

        <br />

        {/* Vehicle Input Form */}
        <div className="card anim1">
          <div className="card-body mainContent">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="disabledSelect1">
                Vehicle Category
              </label>
              <select className="form-select" id="disabledSelect1">
                <option value="" disabled selected>
                  Choose...
                </option>
                {/* Add dynamic vehicle category options */}
              </select>
            </div>

            <br />

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="disabledSelect2">
                Fuel Type
              </label>
              <select className="form-select" id="disabledSelect2">
                <option value="" disabled selected>
                  Choose...
                </option>
                {/* Add dynamic fuel type options */}
              </select>
            </div>

            <br />

            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping5">
                Remarks
              </span>
              <input
                id="remarksV"
                type="text"
                className="form-control"
                placeholder="Enter vehicle brand"
                aria-label="remarks"
                aria-describedby="addon-wrapping5"
              />
            </div>

            <br />

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="disabledSelect4">
                Status
              </label>
              <select className="form-select" id="disabledSelect4">
                <option value="" disabled selected>
                  Choose...
                </option>
                {/* Add dynamic status options */}
              </select>
            </div>

            <br />

            <div className="input-group flex-nowrap">
              <span className="input-group-text" id="addon-wrapping4">
                Number Plate
              </span>
              <input
                id="numberPlateV"
                type="text"
                className="form-control"
                placeholder="Enter the Number Plate"
                aria-label="number-plate"
                aria-describedby="addon-wrapping4"
              />
            </div>

            <br />

            {/* Action Buttons */}
            <div>
              <button type="button" className="btn btn-primary" id="addBtnV">
                ADD
              </button>
              <button type="button" className="btn btn-secondary" id="updateBtnV">
                UPDATE
              </button>
              <button type="button" className="btn btn-success" id="deleteBtnVvv">
                DELETE
              </button>
              <button type="button" className="btn btn-danger" id="resetBtnV">
                RESET
              </button>
            </div>
          </div>

          {/* Vehicle Table */}
          <div className="card-body mainContent">
            <table className="table table-dark" id="vehicleTable">
              <thead>
                <tr>
                  <th scope="col">Vehicle Code</th>
                  <th scope="col">Vehicle Category</th>
                  <th scope="col">Fuel Type</th>
                  <th scope="col">Remarks</th>
                  <th scope="col">Status</th>
                  <th scope="col">Number Plate</th>
                </tr>
              </thead>
              <tbody>
                {/* Table rows will be dynamically populated */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>  
    </body>
    
  );
}

export default VehiclePage;
