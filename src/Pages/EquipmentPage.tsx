import React from "react";
import AccountDetails from "../Component/AccountDetail";
import Sidebar from "../Component/Sidebar";

function EquipmentPage() {
   
  return (
    <div>
      {/* Account Details */}
      <AccountDetails />

      {/* Main Dashboard Container */}
      <div className="dashboard-container">
        <Sidebar />

        <main className="content">
          <h2 className="text-center anim1">Equipment Detail</h2>
          <br />

          {/* Equipment Input Form */}
          <div className="card anim1">
            <div className="card-body mainContent">
              <div className="card-body">
                {/* Equipment Detail Receipt Number */}
                <div>
                  Equipment Detail Receipt Number: <label id="lbl6"> </label>
                </div>
                <br />

                {/* Staff ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="staffID_ED">
                    Staff ID
                  </label>
                  <select className="form-select" id="staffID_ED">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Field ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="fieldID_ED">
                    Field ID
                  </label>
                  <select className="form-select" id="fieldID_ED">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Equip ID */}
                <div className="input-group mb-3">
                  <label className="input-group-text" htmlFor="equipID_ED">
                    Equip ID
                  </label>
                  <select className="form-select" id="equipID_ED">
                    <option value="" disabled selected>
                      Choose...
                    </option>
                    {/* Add dynamic options here */}
                  </select>
                </div>
                <br />

                {/* Log Date */}
                <div className="form-group">
                  <label htmlFor="logDate_ED">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="logDate_ED"
                    name="dateInput"
                  />
                </div>
                <br />

                {/* Reason for Borrowing */}
                <div className="mb-3">
                  <label htmlFor="reason_Dis" className="form-label">
                    Reason
                  </label>
                  <textarea
                    className="form-control"
                    id="reason_Dis"
                    // rows="3"
                  ></textarea>
                </div>
                <br />

                {/* Action Buttons */}
                <div>
                  <button type="button" className="btn btn-primary" id="addBtn_ED">
                    ADD
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    id="updateBtn_ED"
                  >
                    UPDATE
                  </button>
                  <button
                    type="button"
                    className="btn btn-success delete"
                    id="deleteBtn_ED"
                  >
                    DELETE
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    id="resetBtn_ED"
                  >
                    RESET
                  </button>
                </div>
              </div>
            </div>

            {/* Equipment Table */}
            <div className="card-body mainContent">
              <table className="table table-dark" id="vehicleTable">
                <thead>
                  <tr>
                    <th scope="col">EquipmentDetail Receipt Number</th>
                    <th scope="col">Staff ID</th>
                    <th scope="col">Field ID</th>
                    <th scope="col">Equip ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Reason for Borrowing</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Dynamic table rows will be added here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default EquipmentPage;
